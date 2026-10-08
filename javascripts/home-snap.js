/* ============================================================
 *  首页整屏滚动吸附
 *
 *  只对首页生效：没有 #top / #section-2 的页面会直接 return。
 *  依赖的 CSS 见 stylesheets/extra.css 第 6 节。
 * ============================================================ */
(() => {
  const cover = document.getElementById("top");
  const content = document.getElementById("section-2");
  if (!cover || !content) return;

  const root = document.documentElement;

  /* 标记"JS 可用"：.section-content 的隐藏/淡入只在有这个 class 时生效，
   * 这样脚本没跑起来时首页第二屏也照常显示（详见 extra.css 第 6.4 节）。 */
  root.classList.add("home-js");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---- 1) 记录固定顶栏的高度 ----------------------------------------
   * --home-header-h  : 顶部 Header 的高度（用于把标签栏摆在它下面）
   * --home-overlay-h : Header + 标签栏的总高度（用于给内容留出空间）
   * 桌面端的 .md-tabs 会显示、移动端会被隐藏，所以这里按实际渲染高度测量。 */
  const header = document.querySelector(".md-header");
  const tabs = document.querySelector(".md-tabs");
  let lastSignature = "";
  const syncHeaderHeight = () => {
    const headerH = header
      ? Math.round(header.getBoundingClientRect().height)
      : 0;
    const tabsH =
      tabs && getComputedStyle(tabs).display !== "none"
        ? Math.round(tabs.getBoundingClientRect().height)
        : 0;
    const signature = `${headerH}/${tabsH}`;
    if (signature === lastSignature) return;
    lastSignature = signature;
    root.style.setProperty("--home-header-h", `${headerH}px`);
    root.style.setProperty("--home-overlay-h", `${headerH + tabsH}px`);
  };
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight, { passive: true });
  window.addEventListener("orientationchange", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);
  if (header && "ResizeObserver" in window) {
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    if (tabs) observer.observe(tabs);
  }

  /* ---- 2) 吸附核心：带锁的 scrollIntoView --------------------------- */
  let isSnapping = false;
  let snapTimer = 0;

  const snapTo = (target) => {
    if (!target || isSnapping) return;
    isSnapping = true;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    // 平滑滚动动画期间会持续产生 wheel 事件，用锁 + 定时器挡掉
    window.clearTimeout(snapTimer);
    snapTimer = window.setTimeout(
      () => {
        isSnapping = false;
      },
      prefersReducedMotion ? 120 : 760
    );
  };

  /* ---- 3) 右侧楼层按钮 ---------------------------------------------- */
  document.querySelectorAll("[data-floor-target]").forEach((item) => {
    item.addEventListener("click", (event) => {
      const target = document.getElementById(item.dataset.floorTarget);
      if (!target) return;
      event.preventDefault();
      snapTo(target);
    });
  });

  /* ---- 4) 封面上的下箭头 -------------------------------------------- */
  const hint = document.querySelector(".scroll-hint");
  if (hint) {
    hint.addEventListener("click", () => snapTo(content));
    hint.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        snapTo(content);
      }
    });
  }

  /* ---- 5) 高亮当前楼层 + 内容入场动画 ------------------------------- */
  const switches = document.querySelectorAll(".floor-switcher__item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        switches.forEach((item) =>
          item.classList.toggle(
            "is-active",
            item.dataset.floorTarget === entry.target.id
          )
        );
        if (entry.target === content) content.classList.add("is-visible");
      });
    },
    { threshold: 0.45 }
  );
  observer.observe(cover);
  observer.observe(content);

  /* ---- 6) 接管滚轮：这才是"一滚一屏"的关键 -------------------------- */
  window.addEventListener(
    "wheel",
    (event) => {
      // 过滤掉触控板/鼠标的微小抖动
      if (Math.abs(event.deltaY) < 18 || isSnapping) return;

      const scrollY = window.scrollY || root.scrollTop;
      // 吸附到内容屏时的目标 scrollY = 内容绝对位置 - scroll-margin-top
      const marginTop = parseFloat(getComputedStyle(content).scrollMarginTop) || 0;
      const contentTop =
        content.getBoundingClientRect().top + scrollY - marginTop;
      const nearCover = scrollY < window.innerHeight * 0.55;
      const nearContentTop = Math.abs(scrollY - contentTop) < 48;

      if (event.deltaY > 0 && nearCover) {
        event.preventDefault();
        snapTo(content);
      }
      if (event.deltaY < 0 && nearContentTop) {
        event.preventDefault();
        snapTo(cover);
      }
    },
    { passive: false } // 必须，否则无法 preventDefault
  );
})();
