(function() {
  const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  const num = document.querySelector('.num');

  function countUp(ele, ms) {
    let value = Number(ele.innerText);
    let start = null;
    return function step(timestamp) {
      let progress;
      if (start === null) start = timestamp;
      progress = timestamp - start;
      if (progress < ms) {
        ele.innerText = Math.floor(value * (progress / ms));
        requestAnimationFrame(step);
      } else {
        ele.innerText = value;
      }
    }
  }
  
  requestAnimationFrame(countUp(num, 500));

})();