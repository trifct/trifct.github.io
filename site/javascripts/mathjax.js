window.MathJax = {
  loader: {
    load: ["[tex]/color", "[tex]/braket"]
  },
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: false,       // 关闭 $ 转义，避免 # 被误解析
    processEnvironments: true,
    packages: {"[+]": ["color", "braket"]}
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  /* 关闭 MathJax 启动时的自动排版。
   * 否则它会先自动排一遍，我们下面 typesetClear() + typesetPromise()
   * 又会把已排好的内容再排一遍（公式出现嵌套重排）。
   * 交给 document$ 那一处统一排版即可。 */
  startup: {
    typeset: false
  }
};

/* 排版 MathJax 公式。
 *
 * 时序问题：document$ 在 DOMContentLoaded 就触发，此时 MathJax 的初始化
 * 可能还在进行（startup.output 仍是 null）—— 直接调用会报
 * "Cannot read properties of null (reading 'clearCache')"，
 * 后面的 typesetClear / texReset / typesetPromise 也一并被跳过。
 *
 * 因此这里等 startup.promise resolve 之后再排版。 */
const typesetMath = () => {
  const startup = window.MathJax && window.MathJax.startup;
  if (!startup || !startup.promise) return;

  startup.promise
    .then(() => {
      startup.output?.clearCache?.();
      window.MathJax.typesetClear();
      window.MathJax.texReset();
      return window.MathJax.typesetPromise();
    })
    .catch((error) => console.warn("[mathjax] 公式排版失败：", error));
};

/* MathJax 本体按需加载。
 *
 * 以前它是写在 mkdocs.yml 的 extra_javascript 里的普通 <script>：
 *   - 每个页面（含没有公式的首页）都要下载约 1MB；
 *   - 它是跨域脚本，会阻塞排在它后面的 home-snap.js，
 *     而首页第二屏的显示恰恰依赖 home-snap.js —— CDN 一慢，首页就像坏了。
 * 现在改成：只有本页真的存在公式（pymdownx.arithmatex 生成的 .arithmatex）
 * 才动态注入，且用 async 注入、不阻塞任何东西。 */
const MATHJAX_URL = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
/* idle | loading | loaded
 * 注意：不能用 window.MathJax.startup 来判断"本体是否已加载"，
 * 因为上面的配置里本来就有 startup 字段，会永远为真。 */
let mathjaxState = "idle";

const ensureMathJax = () => {
  if (!document.querySelector(".arithmatex")) return; // 本页没有公式，不加载

  if (mathjaxState === "loaded") {
    typesetMath(); // 已经加载过（站内跳转时走这条）
    return;
  }
  if (mathjaxState === "loading") return;

  mathjaxState = "loading";
  const script = document.createElement("script");
  script.src = MATHJAX_URL;
  script.async = true;
  script.onload = () => {
    mathjaxState = "loaded";
    typesetMath();
  };
  script.onerror = () => {
    mathjaxState = "idle";
    console.warn("[mathjax] 加载失败（可检查网络或换 CDN）：", MATHJAX_URL);
  };
  document.head.appendChild(script);
};

document$.subscribe(ensureMathJax);

/* 再直接调一次：本脚本在 </body> 前执行，此时正文已经解析完，
 * 有公式的话可以立刻开始下载，比等 DOMContentLoaded 更早（且不阻塞）。 */
ensureMathJax();
