const menuBtn = document.querySelector('.menu__btn');
const menuLineBtn = document.querySelector('.menu__btn-line');

const popupMenu = document.querySelector('.popup-menu');
const popupList = document.querySelector('.popup-menu__list');

menuBtn.addEventListener('click', function(event) {
  event.preventDefault();
  menuLineBtn.classList.toggle('menu__btn-line_type_active')
  popupMenu.classList.toggle('popup-menu_type_active')
  popupList.classList.toggle('popup-menu__list_type_active')
});