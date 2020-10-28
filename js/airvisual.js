"use strict"; !
function(t) {
    window.AVWidget || (window.AVWidget = {
        cache: {}
    });
    var e = window.AVWidget.cache;
    function n(t) {
        return document.getElementById(t.getAttribute("data-target"))
    } !
    function() {
        for (var n = document.getElementsByName("airvisual_widget"), i = function(i) {
            var a = n[i],
            s = a.getAttribute("key"); !
            function r(n, i) {
                if (e[n]) {
                    if ("success" === e[n].status) return i(e[n].data);
                    if ("fetching" === e[n].status) return setTimeout(function() {
                        return r(n, i)
                    },
                    100)
                }
                e[n] = {
                    status: "fetching"
                };
                var a = new XMLHttpRequest;
                a.open("POST", t + "/api/v2/widget/custom/" + n, !0);
                a.onreadystatechange = function() {
                    var t = "";
                    if (4 !== a.readyState || 200 !== a.status) return i(t);
                    try {
                        t = JSON.parse(a.responseText),
                        e[n].status = "success"
                    } catch(s) {
                        e[n].status = "failed"
                    }
                    e[n].data = t,
                    i(t)
                };
                a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                a.send()
            } (s,
            function(t) {
                return function(t, e) {
                    if ("string" == typeof e) return void(t.innerHTML = e);
                    e.html && (t.innerHTML = e.html);
                    if (e.js) {
                        var n = document.createElement("script");
                        n.innerHTML = e.js,
                        document.body.appendChild(n)
                    }
                } (a, t)
            })
        },
        a = 0; a < n.length; ++a) i(a)
    } (),
    window.AVWidget.showDetails = function(t) {
        var e = t.target,
        i = n(e);
        if (e && i) {
            var a = e.getBoundingClientRect(),
            s = i.getBoundingClientRect(),
            r = Math.max(a.left + a.width / 2 - s.width - 164, 0),
            o = a.top + a.height + 10;
            i.style.left = r + "px",
            i.style.top = o + "px",
            i.style.display = "block"
        }
    },
    window.AVWidget.hideDetails = function(t) {
        var e = n(t.target);
        e && (e.style.display = "none")
    }
} ("https://www.airvisual.com");