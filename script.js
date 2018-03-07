

  (function() {
    var states = ['Question?', 'Answer!'],
        currentState = 0,
        elem = document.getElementById('output');

    function update() { elem.textContent = states[currentState]; }

    document.getElementById('button').addEventListener('click', function() {
      currentState = (currentState + 1) % states.length;
      update();
    }, false);
    update();
  })();
