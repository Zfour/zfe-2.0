"use strict";
$(document).ready(function() {
    $(".three-dee").click(function() {
        $("#pokemon").toggleClass("perspective"),
        $("button").toggleClass("active"),
        $(".depth").removeAttr("style")
    });
    var t = function t(e) {
        var i = $("#pokemon").offset(),
        o = $("#pokemon").width(),
        n = $("#pokemon").height(),
        a = .15 * (100 - (e.pageX - i.left) / o * 100 - 50),
        s = .15 * ((e.pageY - i.top) / n * 100 - 50),
        m = "rotateX(" + s + "deg) rotateY(" + a + "deg)";
        $(".depth").css({
            "-webkit-transform": m,
            "-moz-transform": m,
            "-ms-transform": m,
            "-o-transform": m,
            transform: m
        })
    },
    e = void 0;
    $("#pokemon").mousemove(function(i) {
        $(this).hasClass("perspective") && e && (t(i), e = !1)
    }),
    window.setInterval(function() {
        e = !0
    },
    20);
    var i = "游客",
    o = 5,
    n = {
        name: "皮卡丘",
        hp: 35,
        atk: 70,
        def: 30
    },
    a = n.hp,
    s = a;
    $(".player .level").text(o),
    $(".player .hp").text(a),
    $(".player .hpTotal").text(a),
    $(".player .name").text(n.name.toUpperCase()),
    $("#move0").html("撞击"),
    $("#move1").html("摇尾巴"),
    $("#move2").html("电光一闪");
    var m = "冰卡诺",
    c = {
        name: "伊布",
        hp: 40,
        atk: 55,
        def: 50
    },
    r = c.hp,
    u = r,
    w = c.def;
    $(".foe .level").text(o),
    $(".foe .name").text(c.name.toUpperCase());
    var f = function t() {
        $(".window.menu").hide(),
        $(".window.item").hide(),
        $(".window.pkmn").hide(),
        $(".window.fight").hide()
    },
    p = function t() {
        $(".text1").text(""),
        $(".text2").text(""),
        $(".window.item").hide(),
        $(".window.pkmn").hide(),
        $(".window.fight").hide(),
        $(".window.menu").show()
    },
    d = function t(e, i) {
        var o = e,
        n = i,
        a = 100,
        s = o * a / n;
        return s
    },
    l = function t() {
        u <= 0 ? ($(".window.menu").hide(), $(".foe .hp-bar-active").css("width", "0%"), window.setTimeout(function() {
            $(".foe .images").delay(500).animate({
                bottom: "-35em"
            },
            1e3),
            $(".text1").text(c.name.toUpperCase() + "昏厥！"),
            $(".text2").text(""),
            y(),
            window.setTimeout(function() {
                $(".foe .stats").hide(),
                $(".text1").text("得到" + Math.floor(2.5 * o) + "元"),
                $(".text2").text("获胜！"),
                y(),
                window.setTimeout(function() {
                    $(".text1").text(m.toUpperCase() + "：我真不敢"),
                    $(".text2").text("相信！"),
                    y(),
                    window.setTimeout(function() {
                        $(".text1").text("你竟然拥有"),
                        $(".text2").text("这么厉害的宝可梦！"),
                        y()
                    },
                    2e3)
                },
                2e3)
            },
            2e3)
        },
        2e3)) : window.setTimeout(function() {
            $(".text1").text(c.name.toUpperCase() + "使用了"),
            $(".text2").text("撞击！"),
            y(),
            $(".foe .images").animate({
                right: "0em"
            },
            100, "linear").animate({
                right: "1.8em"
            },
            50, "linear").delay(100).animate({
                right: "0.8em"
            },
            10, "linear"),
            window.setTimeout(function() {
                $(".player .images").css("opacity", 0),
                window.setTimeout(function() {
                    $(".player .images").css("opacity", 1),
                    window.setTimeout(function() {
                        $(".player .images").css("opacity", 0),
                        window.setTimeout(function() {
                            $(".player .images").css("opacity", 1),
                            window.setTimeout(function() {
                                $(".player .images").css("opacity", 0),
                                window.setTimeout(function() {
                                    $(".player .images").css("opacity", 1),
                                    window.setTimeout(function() {
                                        var t = 40,
                                        e = Math.floor(Math.floor(Math.floor(2 * o / 5 + 2) * t * c.atk / n.def) / 50) + 2;
                                        s -= e,
                                        s <= 0 ? ($(".window.menu").hide(), $(".player .hp").text("0"), $(".player .hp-bar-active").css("width", "0%"), $(".player .stats").hide(), window.setTimeout(function() {
                                            $(".player .images").delay(500).animate({
                                                bottom: "-35.714em"
                                            },
                                            1e3),
                                            $(".text1").text(n.name.toUpperCase() + "昏厥..."),
                                            $(".text2").text(""),
                                            y(),
                                            window.setTimeout(function() {
                                                $(".text1").text(i.toUpperCase() + "你已经没有"),
                                                $(".text2").text("可用的宝可梦了..."),
                                                y(),
                                                window.setTimeout(function() {
                                                    $(".text1").text(i.toUpperCase() + "精疲力尽！"),
                                                    $(".text2").text(""),
                                                    y()
                                                },
                                                2e3)
                                            },
                                            2e3)
                                        },
                                        2e3)) : ($(".player .hp").text(s), $(".player .hp-bar-active").animate({
                                            width: d(s, a) + "%"
                                        },
                                        500), window.setTimeout(function() {
                                            p()
                                        },
                                        2400))
                                    },
                                    100)
                                },
                                100)
                            },
                            100)
                        },
                        100)
                    },
                    100)
                },
                100)
            },
            100)
        },
        2e3)
    },
    h = function t() {
        f(),
        $(".text1").text(n.name.toUpperCase()),
        $(".text2").text("使用了叫声！"),
        y(),
        window.setTimeout(function() {
            w < c.def - 20 ? ($(".text1").text(c.name.toUpperCase() + "的防御力"), $(".text2").text("不能再低了"), y(), window.setTimeout(function() {
                l()
            },
            2e3)) : ($(".text1").text(c.name.toUpperCase() + "的防御力"), $(".text2").text("下降了2！"), w = -2, y(), window.setTimeout(function() {
                l()
            },
            2e3))
        },
        2e3)
    },
    x = function t(e) {
        f(),
        $(".text1").text(n.name.toUpperCase() + "使用了"),
        $(".text2").text(e.toUpperCase() + "！"),
        y(),
        $(".player .images").animate({
            left: "0em"
        },
        100, "linear").animate({
            left: "1.8em"
        },
        50, "linear").delay(100).animate({
            left: "0.8em"
        },
        10, "linear"),
        window.setTimeout(function() {
            $(".foe .images").css("opacity", 0),
            window.setTimeout(function() {
                $(".foe .images").css("opacity", 1),
                window.setTimeout(function() {
                    $(".foe .images").css("opacity", 0),
                    window.setTimeout(function() {
                        $(".foe .images").css("opacity", 1),
                        window.setTimeout(function() {
                            $(".foe .images").css("opacity", 0),
                            window.setTimeout(function() {
                                $(".foe .images").css("opacity", 1);
                                var t = 40,
                                e = Math.floor(Math.floor(Math.floor(2 * o / 5 + 2) * t * n.atk / c.def) / 50) + 2;
                                u -= e,
                                $(".foe .hp-bar-active").animate({
                                    width: d(u, r) + "%"
                                },
                                500),
                                l()
                            },
                            100)
                        },
                        100)
                    },
                    100)
                },
                100)
            },
            100)
        },
        100)
    },
    g = function t(e) {
        var i = void 0;
        f(),
        i = "normal" === e ? 20 : "super" === e ? 50 : "hyper" === e ? 200 : 999,
        s >= a ? ($(".text1").text("HP 就绪"), $(".text2").text("满了！"), y(), window.setTimeout(function() {
            p()
        },
        1e3)) : ($(".text1").text("使用了伤药！"), $(".text2").text(""), y(), s += i, s >= a && (s = a), $(".player .hp").text(s), $(".player .hp-bar-active").animate({
            width: d(s, a) + "%"
        },
        500), T--, l()),
        $(".potionCount").text(T),
        T <= 0 && $(".potion").hide()
    },
    y = function t() {
        var e = void 0;
        $(".text1, .text2").each(function() {
            $(this).text($(this).text().replace(new RegExp(" ", "g"), " "))
        }),
        e = $(".text1, .text2"),
        e.hide().contents().each(function() {
            var t = void 0;
            t = void 0,
            t = "<span> " + this.data.split("").join(" </span><span> ") + " </span>",
            $(this).replaceWith(t)
        }),
        e.find("span").hide().each(function() {
            $.trim(this.innerHTML) || $(this).remove()
        }),
        e.show().find("span").each(function(t) {
            $(this).delay(40 * t).fadeIn(0)
        })
    },
    T = 1;
    $(".potionCount").text(T),
    $(".button.item").click(function() {
        $(".window.item").show(),
        $(".window.menu").hide()
    }),
    $(".button.potion").click(function() {
        g("normal")
    }),
    $(".button.fight").click(function() {
        $(".window.fight").show()
    }),
    $(".button.growl").click(function() {
        h()
    }),
    $(".button#move0").click(function() {
        x("撞击")
    }),
    $(".button#move1").click(function() {
        x("摇尾巴")
    }),
    $(".button#move2").click(function() {
        x("电光一闪")
    }),
    $(".button.back").click(function() {
        p()
    }),
    $(".button.pkmn").click(function() {
        $(".window.pkmn").show()
    }),
    $(".button.run").click(function() {
        f(),
        $(".text1").text("抱歉！这里不允许"),
        $(".text2").text("使用逃跑！"),
        y(),
        window.setTimeout(function() {
            $(".text1").text("遭遇战！"),
            $(".text2").text(""),
            y(),
            window.setTimeout(function() {
                p()
            },
            2e3)
        },
        2e3)
    });
    var v = function t() {
        $(".foe .images").css("right", "16em"),
        $(".player .images").css("left", "16em"),
        $(".player .pokemon, .foe .pokemon, .stats, .balls, .window.item, .window.pkmn, .window.fight, .window.menu").hide(),
        window.setTimeout(function() {
            $(".foe .images").animate({
                right: "0.8em"
            },
            800, "linear"),
            $(".player .images").animate({
                left: "0.8em"
            },
            800, "linear"),
            window.setTimeout(function() {
                $(".trainer, .balls").show(),
                window.setTimeout(function() {
                    $(".text1").text(m.toUpperCase() + "想要"),
                    $(".text2").text("进行对战！"),
                    y(),
                    window.setTimeout(function() {
                        $(".balls").hide(),
                        $(".foe .images").animate({
                            right: "-21em"
                        },
                        400, "linear"),
                        window.setTimeout(function() {
                            $(".text1").text(m.toUpperCase() + "扔出了精灵球"),
                            $(".text2").text("出现了" + c.name.toUpperCase() + "！"),
                            y(),
                            $(".foe .pokemon").show(),
                            $(".foe .trainer").hide(),
                            $(".foe .images").animate({
                                right: "0.8em"
                            },
                            700, "linear"),
                            window.setTimeout(function() {
                                $(".foe .stats").show(),
                                $(".player .images").animate({
                                    left: "-21em"
                                },
                                400, "linear"),
                                window.setTimeout(function() {
                                    $(".player .trainer").hide(),
                                    $(".player .pokemon").show(),
                                    $(".player .images").animate({
                                        left: "0.8em"
                                    },
                                    700, "linear"),
                                    $(".text1").text("就决定是你了！" + n.name.toUpperCase() + "！"),
                                    $(".text2").text(""),
                                    y(),
                                    $(".player .stats").show(),
                                    window.setTimeout(function() {
                                        p()
                                    },
                                    2e3)
                                },
                                800)
                            },
                            1500)
                        },
                        1e3)
                    },
                    2500)
                },
                400)
            },
            800)
        },
        600)
    };
    v()
});