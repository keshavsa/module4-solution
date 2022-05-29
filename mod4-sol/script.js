(function() {
    var names = ["Yaakov", "Jhon", "Jen", "Jasson", "paul", "frank", "larry", "jim"];
    for (var i = 0; i < names.length; i++) {
        var firstletter = names[i].charAt(0).toLowerCase();
        if (firstletter == 'j') {
            byeSay(names[i]);
        } else {
            helloSpeaker(names[i]);
        }

    }

})();