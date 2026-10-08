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
 * 时序问题：document$ 在 DOMContentLoaded 就触发，此时 CDN 脚本虽然已经
 * 执行（MathJax.startup 已存在），但 MathJax 的初始化是异步的，
 * startup.output 还是 null —— 直接调用会报
 * "Cannot read properties of null (reading 'clearCache')"，
 * 后面的 typesetClear / texReset / typesetPromise 也一并被跳过。
 *
 * 因此这里改成等 startup.promise resolve 之后再排版。 */
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

document$.subscribe(typesetMath);
