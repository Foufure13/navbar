

function changeZIndex(className, zIndex) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.zIndex = zIndex;
    }
}
// function changerLaCouleur(className,couleur)
// {
//      document.getElementsByClassName(className).style.color = document.getElementsByClassName(className).value;
//     document.getElementsByClassName(className).style.backgroundColor = couleur;
// }
function changeColor(className, couleur) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = couleur;
}
}









(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el) => {
    return document.querySelector(el);
  }

  /**
   * Easy event listener function
   */
  const on = (el, type, listener) => {
    const selectEl = select(el);
    if (selectEl) {
      selectEl.addEventListener(type, listener);
    }
  }
  const windowON = false;
  //this.changeColor('mobile-nav-toggle','blue');

  on('.mobile-nav-toggle', 'click', function(e) {
    select('.window1').classList.toggle('mobile-nav-active');
    select('.window2').classList.remove('mobile-nav-active');
    select('.window3').classList.remove('mobile-nav-active');
    changeColor("mobile-nav-toggle","blue")
    changeColor("mobile-nav-toggle2","grey")
    changeColor("mobile-nav-toggle3","grey")
  });

  on('.mobile-nav-toggle2', 'click', function(e) {
    select('.window2').classList.toggle('mobile-nav-active');
    select('.window1').classList.remove('mobile-nav-active');
    select('.window3').classList.remove('mobile-nav-active');       
    changeColor("mobile-nav-toggle","grey")
    changeColor("mobile-nav-toggle2","blue")
    changeColor("mobile-nav-toggle3","grey")
  });

  on('.mobile-nav-toggle3', 'click', function(e) {
    select('.window3').classList.toggle('mobile-nav-active');
    select('.window2').classList.remove('mobile-nav-active');
    select('.window1').classList.remove('mobile-nav-active');
    changeColor("mobile-nav-toggle","grey")
    changeColor("mobile-nav-toggle2","grey")
    changeColor("mobile-nav-toggle3","blue")

  });

})();
