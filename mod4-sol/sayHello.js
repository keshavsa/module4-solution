(function(window) {
    var sayword = "Hello";
    var helloSpeaker = function(name) {
        console.log(sayword + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})(window);