(
  function(){
      var names = ["Yaakov" , "John","Jen", "Jason", "Paul", "Frnak", "Larry","Paula","Laura","Jim" ];
      for (var i = 0; i < names.length; i++) {
        if ('j' === (names[i].charAt(0)).toLowerCase()) {
          byeSpeaker.speak(names[i]);
        } else {
          helloSpeaker.sayHello(names[i]);
      }
  }
})();


