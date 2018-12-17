(function() {
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.btn');
  const hide = document.querySelector('.hide');

  function toggleModal() {
    modal.classList.toggle('showModal');
  }

  btn.addEventListener('click', toggleModal);
  hide.addEventListener('click', toggleModal);
  
})();