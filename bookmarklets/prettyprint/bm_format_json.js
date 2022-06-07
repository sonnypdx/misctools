// pretty-prints the json response on a page
(function () {
    var n, e, r, i;
    n = window,
    e = document.body,
    r = JSON.parse,
    i = JSON.stringify,
    n.isf || (e.innerHTML = "<pre>" + i(r(e.innerText), null, 4).replace(/\"(.*)[^\:]\: /g, '<span style="color:#9C3636">$1</span>&colon; ') + "</pre>", n.isf = !0)
})();