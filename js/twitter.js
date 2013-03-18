(function (e) {
    e(document).ready(function () {
        function t() {
            e(".tweet").html('Hrm... There was a problem fetching your tweet. <a class="tweetRetry">Try again?</a>');
            e(".tweetRetry").click(t);
            var n = "jimmyliu";
            e.ajax({
                url: "https://api.twitter.com/1/statuses/user_timeline.json?count=1&screen_name=" + n,
                dataType: "jsonp",
                success: function (t) {
                    var n = t[0].text.split(" ");
                    for (i = 0; i < n.length; i++) {
                        if (n[i].indexOf("http://t.co/") !== -1) {
                            var r = [];
                            for (j = n[i].indexOf("http://t.co/"); j <= 20; j++) {
                                r.push(n[i][j])
                            }
                            n[i] = '<a href="' + r.join("") + '">' + n[i] + "</a>"
                        }
                        if (n[i].indexOf("@") !== -1) {
                            var r = [];
                            for (j = n[i].indexOf("@"); j <= 20; j++) {
                                r.push(n[i][j])
                            }
                            n[i] = '<a href=http://twitter.com/"' + r.join("") + '">' + n[i] + "</a>"
                        }
                    }
                    e(".tweet").html(n.join(" "))
                }
            })
        }
        e(".backToTop").click(function () {
            e("html, body").animate({
                scrollTop: 0
            }, 600)
        });
        t();
        e(".headerNavLinkWrapper:not(.headerNavLinkWrapper.noDropdown)").hover(function () {
            e(this).children(".headerNavLinkName").addClass("hover").next().slideDown(100)
        }, function () {
            e(this).children(".headerNavLinkName").removeClass("hover").next().slideUp(100)
        });
        e(".revealPackages").click(function () {
            e(".mainDisplay").addClass("packagesViewDisplay");
            e(".defaultView").animate({
                opacity: "0"
            }, 300, function () {
                e(this).hide();
                e(".packagesView").fadeIn(1e3);
                e(".mainDisplay").css("height", e(".packagesView").height())
            })
        });
        if (e(".sliderWrapper").length >= 1) {
            var n = e(".slidesContainer"),
                r = e(".slide"),
                s = r.get(),
                o = r.first(),
                u = e(".slideLink.prev"),
                a = e(".slideLink.next");
            o.addClass("activeSlide");
            var f = e(".activeSlide"),
                c = 0,
                h = function () {
                    n.css({
                        width: function () {
                            var t = 0;
                            r.each(function () {
                                t += e(this).width()
                            });
                            return t + 4 * r.length
                        },
                        height: f.outerHeight()
                    })
                }, p = function () {
                    if (c === 0) {
                        u.css({
                            "pointer-events": "none",
                            opacity: .4
                        });
                        a.css("pointer-events", "all").css({
                            "pointer-events": "all",
                            visibility: "visible",
                            opacity: 1
                        })
                    } else if (c === r.length - 1) {
                        u.css({
                            "pointer-events": "all",
                            visibility: "visible",
                            opacity: 1
                        });
                        a.css({
                            "pointer-events": "none",
                            opacity: .4
                        })
                    } else {
                        e(".slideLink").css({
                            "pointer-events": "all",
                            opacity: "1",
                            visibility: "visible"
                        })
                    }
                    var t = r.eq(c).attr("data-slidetitle"),
                        n = e('.availableSlideLink[data-slidetitle="' + t + '"]');
                    e(".availableSlideLink.active").removeClass("active");
                    n.addClass("active")
                }, d = function () {
                    r.each(function () {
                        var t = e(this).attr("data-slidetitle");
                        e('<div class="availableSlideLink"></div>').attr("data-slidetitle", t).html(t).click(function () {
                            e(this).get(0).onselectstart = function () {
                                return false
                            };
                            var n = r.index(e('.slide[data-slidetitle="' + t + '"]'));
                            v("specific", n);
                            e(".availableSlideLink.active").removeClass("active");
                            e(this).addClass("active")
                        }).appendTo(".availableSlides")
                    })
                }, v = function (t, n) {
                    if (!t) {
                        return
                    } else {
                        var i = e(".slideLink." + t);
                        i.css("pointer-events", "none");
                        if (t === "prev") {
                            c--;
                            r.css({
                                "-o-transform": "translate(" + -(f.outerWidth() * c) + "px, 0)",
                                transform: "translate(" + -(f.outerWidth() * c) + "px, 0)"
                            });
                            f.removeClass("activeSlide").prev().addClass("activeSlide")
                        } else if (t === "next") {
                            c++;
                            r.css({
                                "-o-transform": "translate(" + -(f.outerWidth() * c) + "px, 0)",
                                transform: "translate(" + -(f.outerWidth() * c) + "px, 0)"
                            });
                            f.removeClass("activeSlide").next().addClass("activeSlide")
                        } else if (t === "specific") {
                            var s = r.eq(n).attr("data-slidetitle"),
                                o = r.eq(n);
                            c = n;
                            r.css({
                                "-o-transform": "translate(" + -(f.outerWidth() * c) + "px, 0)",
                                transform: "translate(" + -(f.outerWidth() * c) + "px, 0)"
                            });
                            f.removeClass("activeSlide");
                            o.addClass("activeSlide")
                        }
                        f = e(".activeSlide");
                        p();
                        h()
                    }
                };
            h();
            d();
            p();
            u.click(function () {
                e(this).get(0).onselectstart = function () {
                    return false
                };
                v("prev")
            });
            a.click(function () {
                e(this).get(0).onselectstart = function () {
                    return false
                };
                v("next")
            })
        }
        if (e(".tooltipLink").length >= 1) {
            e(".tooltipLink").mouseover(function () {
                e(this).next().stop(true, true).fadeIn(300)
            }).mouseout(function () {
                e(this).next().stop(true, true).fadeOut(300)
            });
            e(".tooltip").mouseleave(function () {
                e(this).stop(true, true).fadeOut(300)
            })
        }
        e("a[href^=#]").click(function (t) {
            t.preventDefault();
            var n = e(e(this).attr("href")),
                r = n.offset().top,
                i = 0;
            var s = setInterval(function () {
                if (window.scrollY < r - 68) {
                    window.scrollBy(0, i);
                    i++
                } else {
                    clearInterval(s)
                }
            }, 16)
        });
        if (window.location.pathname.indexOf("#") > -1) {
            var m = window.location.pathname,
                g = m.split("#"),
                y = g[1],
                b = e("#" + y),
                w = b.offset().top;
            window.scrollTo(0, w - 68)
        }
        if (e(".selector").length >= 1) {
            var E = e(".packagesListForClient .package"),
                S = E.length,
                x = 100 / (S - 1),
                T = [];
            for (i = 0; i < S; i++) {
                var N = T[i],
                    C = E.eq(i);
                T[i] = {
                    cpu: {
                        icons: C.find(".numberOfCpuIcons").html(),
                        label: C.find(".cpuLabel").html()
                    },
                    ram: {
                        icons: C.find(".numberOfRamIcons").html(),
                        label: C.find(".ramLabel").html()
                    },
                    ssd: {
                        icons: C.find(".numberOfSsdIcons").html(),
                        label: C.find(".ssdLabel").html()
                    },
                    bw: {
                        icons: C.find(".numberOfBandwidthIcons").html(),
                        label: C.find(".bandwidthLabel").html()
                    },
                    monthlyViews: C.find(".monthlyPageViews"),
                    monthlyUniques: C.find(".monthlyUniques"),
                    monthlyBandwidth: C.find(".monthlyBandwidth"),
                    storage: C.find(".storage"),
                    price: C.find(".price").html(),
                    url: C.find(".purchaseUrl").html()
                }
            }
            e(".packagesListForClient").remove();
            e(".selector").noUiSlider("init", {
                handles: 1,
                step: x,
                start: 0,
                connect: "lower",
                change: function () {
                    var t = e(this).noUiSlider("value")[1];
                    L(Math.round(t / x));
                    if (t === 100) {
                        e(".priceSliderTag").addClass("end")
                    } else {
                        e(".priceSliderTag").removeClass("end")
                    }
                }
            });
            e(".noUi-handle > div").html('<div class="noUi-handleInner"></div><div class="priceSliderTag"></div>');
            var L = function (t) {
                var n = T[t];
                if (e(".graphicsContainer").length >= 1 || e(".selectorContainer.backup").length >= 1) {
                    var r = e(".graphicModule"),
                        s = r.filter(".cpu"),
                        o = r.filter(".ram"),
                        u = r.filter(".ssd"),
                        a = r.filter(".bw"),
                        f = s.find(".imageContainer"),
                        c = o.find(".imageContainer"),
                        h = u.find(".imageContainer"),
                        p = a.find(".imageContainer"),
                        d = s.find(".detail"),
                        v = o.find(".detail"),
                        m = u.find(".detail"),
                        g = a.find(".detail"),
                        y = e(".selectorContainer .storageLabel");
                    d.html(n.cpu.label);
                    v.html(n.ram.label);
                    m.html(n.ssd.label);
                    g.html(n.bw.label);
                    y.html(n.storage);
                    e(".imageContainer").html("");
                    for (i = 0; i < n.cpu.icons; i++) {
                        e('<div class="image cpu"></div>').appendTo(f)
                    }
                    for (j = 0; j < n.ram.icons; j++) {
                        e('<div class="image ram"></div>').appendTo(c)
                    }
                    for (k = 0; k < n.ssd.icons; k++) {
                        e('<div class="image ssd"></div>').appendTo(h)
                    }
                    for (l = 0; l < n.bw.icons; l++) {
                        e('<div class="image bw"></div>').appendTo(p)
                    }
                } else if (e(".detailsContainer").length >= 1) {
                    e(".detailModule.monthlyViews .number").html(n.monthlyViews);
                    e(".detailModule.storage .number").html(n.storage);
                    e(".detailModule.uniqueVisitors .number").html(n.monthlyUniques);
                    e(".detailModule.bandwidth .number").html(n.monthlyBandwidth)
                }
                e(".priceSliderTag").html(n.price);
                e(".selectorPurchaseButton").attr("href", n.url)
            };
            L(0)
        }
        if (e(".emailForm").length >= 1) {
            var A = {
                inputs: e(".emailForm .input"),
                msg: e(".emailForm .message"),
                name: e(".emailForm .name"),
                email: e(".emailForm .address"),
                submit: e(".emailForm .send")
            }, O = function () {
                    var t = false,
                        n = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/ig,
                        r = this,
                        i = function (r) {
                            var i = function (e) {
                                t = false;
                                e.addClass("invalid")
                            };
                            r = e(r);
                            if (r.val().length === 0) {
                                i(r);
                                return t
                            } else if (r.hasClass("address")) {
                                if (n.test(A.email.val()) === false) {
                                    i(r);
                                    return t
                                } else {
                                    r.removeClass("invalid")
                                }
                            } else {
                                r.removeClass("invalid");
                                t = true;
                                return t
                            }
                        };
                    if (e(this).hasClass("send")) {
                        A.inputs.each(function () {
                            i(this)
                        })
                    } else {
                        i(this)
                    }
                    return t
                };
            A.inputs.keyup(O);
            A.submit.click(O).click(function () {
                var t = "name=" + A.name.val() + "&email=" + A.email.val() + "&message=" + A.msg.val();
                if (e(".emailForm .invalid").length === 0) {
                    e.ajax({
                        url: "/emailScript.php",
                        type: "POST",
                        data: t,
                        success: function (t) {
                            if (t === "error") {
                                e(".emailErr").show(300)
                            } else {
                                e(".emailErr").hide(300);
                                e(".emailSucc").show(300);
                                A.submit.addClass("disabled")
                            }
                        }
                    })
                }
            })
        }
        if (e(".apps.section").length >= 1) {
            var M = function (t) {
                var n = false;
                e(".appTableContainer .table tr").empty();
                if (t.length !== 0) {
                    e(".noApps.error").hide();
                    t.clone().each(function (r) {
                        if (r < 20) {
                            if (r % 4 === 0 || r === 0) {
                                if (r === 0) {
                                    e(".appTableContainer .table").empty()
                                }
                                n = e("<tr>").appendTo(".appTableContainer .table")
                            }
                            var i = e("<td>").appendTo(n);
                            e(this).appendTo(i);
                            if (r === t.length - 1 && t.length % 4 !== 0) {
                                for (j = 0; j < 4 - t.length % 4; j++) {
                                    e("<td>").appendTo(n)
                                }
                            }
                        }
                    })
                } else {
                    e(".noApps.error").fadeIn(300)
                }
            };
            e(".category").click(function () {
                var t = e(this).attr("data-category"),
                    n = e(".listOfApps").find('.app[data-category*="' + t + '"]');
                M(n);
                e(".active").removeClass("active");
                e(this).addClass("active")
            });
            e(".search").keyup(function () {
                M(e(".listOfApps").find('.app[data-tags*="' + e(this).val().toLowerCase() + '"]'))
            });
            e(".default.category").trigger("click")
        }
    })
})(jQuery)