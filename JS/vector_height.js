function getAbsoluteY(selector) {
  var element = document.querySelector(selector);
  if (element) {
    var rect = element.getBoundingClientRect();
    return rect.top + window.scrollY; // Apsolutna Y koordinata u odnosu na stranicu
  }
  return null;
}

function trackPositions(element1, element2, targetElement) {
  function updateHeight() {
    var y1 = getAbsoluteY(element1);
    var y2 = getAbsoluteY(element2);
    var target = document.querySelector(targetElement);

    if (y1 !== null && y2 !== null && target) {
      var newHeight = Math.abs(y1 - y2); // Sprečava negativne vrednosti
      target.style.height = newHeight + 'px';
      console.log(`Updated height for ${targetElement}: ${newHeight}px`);
    }
  }

  // First time calculation
  var checkExist = setInterval(function () {
    if (document.querySelector(element1) && document.querySelector(element2)) {
      clearInterval(checkExist);
      updateHeight();
    } else {
      console.log('!!! Waiting for elements: ', element1, element2);
    }
  }, 50);

  // Adding resize event listener
  window.addEventListener('resize', updateHeight);
}

window.onload = function () {
  trackPositions('#dot-start', '#dot-end', '.scaling-business-vector');
};
