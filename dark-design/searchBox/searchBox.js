(function() {
  let btn = document.querySelector('.btn');
  let input = document.querySelector('.input');

  btn.addEventListener('click', function() {
    input.classList.toggle('inclicked');
    btn.classList.toggle('close');
  });
})();