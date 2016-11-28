            function timedMessage(title, msg) {
                var p = new Promise(function (resolve, reject) { 
                window.setTimeout(function () {
                    document.write("<p>" + title + "<br />" + msg + "</p>");
                    resolve();
                }, 5000);
                });
                return p;
            }

            timedMessage("first", "first message").then(function() {
                return timedMessage("second", "second message");
            }).then(function() {
                return timedMessage("third", "third message");
            }).then(function() {
                return timedMessage("fourth", "fourth message");
            });
