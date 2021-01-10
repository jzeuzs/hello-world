document.addEventListener("DOMContentLoaded", (event) => {
        document.querySelectorAll("pre code").forEach((block) => {
                hljs.highlightBlock(block);
                hljs.lineNumbersBlock(block);
                hljs.initLangBlock(block);
        });
});
