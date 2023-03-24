"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    equation();
  }

  function getTwo() {
    let newNum = 0;

    setTimeout(() => {
        newNum = 2;
    }, 2000);

    return newNum;
  }

  function equation() {
    let one = 1;
    let two = getTwo();

    id("answer").textContent = one + two;
  }

  /********* HELPER FUNCTIONS **********/
  function id(id) {
    return document.getElementById(id);
  }

})();