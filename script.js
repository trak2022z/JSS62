"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    equation();
  }

  function equation() {
    let one = 1;
    let two = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 2000);
    });

    two
      .then((res) => {
        id("answer").textContent = (one + res);
      })

  }

  /********* HELPER FUNCTIONS **********/
  function id(id) {
    return document.getElementById(id);
  }

})();