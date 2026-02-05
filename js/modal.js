(() => {
  // MODAL
  const modalOpenBtn = document.querySelector('[data-modal-open]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  // MENU
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');

  // ---- modal ----
  modalOpenBtn?.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  modalCloseBtn?.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  // ---- menu ----
  menuOpenBtn?.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  menuCloseBtn?.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
})();
