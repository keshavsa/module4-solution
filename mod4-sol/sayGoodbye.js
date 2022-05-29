(function(window) {
    var sayword = "Good Bye";
    var byeSay = function(name) {
        console.log(sayword + " " + name);
    }
    window.byeSay = byeSay;
})(window);