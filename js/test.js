(function (e) {
    e(document).ready(function () {
        function t() {
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
                    }
                    e(".tweet").html(n.join(" "))
                }
            })
        }
        
        }
    })
})(jQuery)