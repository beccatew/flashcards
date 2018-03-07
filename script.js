

  (function() {
    var states = ['Tool that converts code to latest version of JS', 'Babel'],
        currentState = 0,
        elem = document.getElementById('card1');

    function update() { elem.textContent = states[currentState]; }

    document.getElementById('button1').addEventListener('click', function() {
      currentState = (currentState + 1) % states.length;
      update();
    }, false);
    update();
  })();


  (function() {
    var states = ['Terminal command to add webpack', ' \" yarn add webpack webpack-cli --dev \" '],
        currentState = 0,
        elem = document.getElementById('card2');

    function update() { elem.textContent = states[currentState]; }

    document.getElementById('button2').addEventListener('click', function() {
      currentState = (currentState + 1) % states.length;
      update();
    }, false);
    update();
  })();

  (function() {
    var states = ['True || False, a \"const\" can be reassigned', 'FALSE'],
        currentState = 0,
        elem = document.getElementById('card3');

    function update() { elem.textContent = states[currentState]; }

    document.getElementById('button3').addEventListener('click', function() {
      currentState = (currentState + 1) % states.length;
      update();
    }, false);
    update();
  })();
