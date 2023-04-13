import '../scss/reset-styles.scss'
import '../scss/header-main_title.scss'
import '../scss/adaptive.scss'
import '../scss/main-brands.scss'
import '../scss/colorize.scss'

const header = document.querySelector('header')
const burgerBtn = document.querySelector('#burger-btn')
const menu = document.getElementById('menu')
const body = document.querySelector('body')
const menuBtnBack = document.getElementById('back-burger-btn')
const main = document.querySelector('main')
const menuPadding = document.querySelector('.burger__body-container')
const messageBtn = document.querySelector('.message')
const messageBtnHeader = document.querySelector('#header-navbar-btn-message')
const phoneBtn = document.querySelector('.phone')
const phoneBtnHeader = document.querySelector('#header-navbar-btn-phone')
const feedbackMenu = document.querySelector('.feedback-menu')
const requestCallMenu = document.querySelector('.request-call')
const cancelFeedbackMenu = document.querySelector('.feedback-menu-btn')
const cancelRequestCallMenu = document.querySelector('#cancelRequestCallMenu')
const moreText = document.getElementById("more");
const readMore = document.getElementById('read-more');
const readMoreText = document.getElementById('read-more-text');
const iconDropDownShow = document.getElementById('icon-dropdown-show')
const showAllFirstSlider = document.getElementById('show-all-brands-section-icon')
const readMoreBrands = document.getElementById('read-more-brands')
const readMoreBrandsText = document.getElementById('read-more-brands-text')
const swiperDiv = document.querySelector('#swiper-brand-section')
const swiperDivVariety = document.querySelector('#swiper-variety')
const readMoreBrandsVariety = document.getElementById('read-more-brands-variety')
const readMoreBrandsVarietyText = document.getElementById('read-more-brands-variety-text')
const showAllSecondSlider = document.getElementById("show-all-brands-section-icon-variety")







// читать далее/скрыть - титульная секция

readMore.onclick = function(){
  if(moreText.classList.contains('active') == false){
  moreText.classList.add('active')
  readMoreText.textContent = 'Скрыть'
  iconDropDownShow.classList.add('rotate')
}else{
  moreText.classList.remove('active')
  readMoreText.textContent = 'Читать далее'
  iconDropDownShow.classList.remove('rotate')
}
}


// показать/скрыть - бренд-секция

readMoreBrands.onclick = function(){
  if((swiperDiv.classList.contains('showed')) == false){
  swiperDiv.classList.add('showed')
  readMoreBrandsText.textContent = 'Скрыть';
  showAllFirstSlider.classList.add('rotate');
  }else{
    swiperDiv.classList.remove('showed');
    readMoreBrandsText.textContent = 'Показать все';
    showAllFirstSlider.classList.remove('rotate');
  }
}

// показать/скрыть - ремонт-секция

readMoreBrandsVariety.onclick = function(){
  if((swiperDivVariety.classList.contains('showed')) == false){
  swiperDivVariety.classList.add('showed')
  readMoreBrandsVarietyText.textContent = 'Скрыть';
  showAllSecondSlider.classList.add('rotate');
  }else{
    swiperDivVariety.classList.remove('showed');
    readMoreBrandsVarietyText.textContent = 'Показать все';
    showAllFirstSlider.classList.remove('rotate');
  }
}


// бургер кнопки и взаимодействие с меню

burgerBtn.addEventListener('click',() =>  {
  menu.classList.add('active')
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
})

menuBtnBack.addEventListener('click',() => {
  menu.classList.remove('active')
  header.classList.remove('active')
  main.classList.remove('active')
  body.classList.remove('modal-open')
})

main.addEventListener('click', (e) => {
  if(!menuPadding.classList.contains(e.target)){
    menu.classList.remove('active')
    header.classList.remove('active')
    main.classList.remove('active')
    body.classList.remove('modal-open')
  }
  if(!menuPadding.classList.contains(e.target)){
    feedbackMenu.classList.remove('active')
    header.classList.remove('active')
    main.classList.remove('active')
    body.classList.remove('modal-open')
  }
  if(!menuPadding.classList.contains(e.target)){
    requestCallMenu.classList.remove('active')
    header.classList.remove('active')
    main.classList.remove('active')
    body.classList.remove('modal-open')
  }
})

// модалки

messageBtn.addEventListener('click', () =>{
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
  if(requestCallMenu.classList.contains('active') === false){
  feedbackMenu.classList.add('active')
}if(requestCallMenu.classList.contains('active') === true){
  requestCallMenu.classList.remove('active')
  feedbackMenu.classList.add('active')
}
})
cancelFeedbackMenu.addEventListener('click', ()=>{
  feedbackMenu.classList.remove('active')
  header.classList.remove('active')
  main.classList.remove('active')
  body.classList.remove('modal-open')
})
messageBtnHeader.addEventListener('click', () =>{
  body.classList.add('modal-open')
  header.classList.add('active')
  main.classList.add('active')
  if(requestCallMenu.classList.contains('active') === false){
    feedbackMenu.classList.add('active')
  }if(requestCallMenu.classList.contains('active') === true){
    requestCallMenu.classList.remove('active')
    feedbackMenu.classList.add('active')
  }
})

cancelRequestCallMenu.addEventListener('click', ()=>{
  requestCallMenu.classList.remove('active')
  header.classList.remove('active')
  main.classList.remove('active')
  body.classList.remove('modal-open')
})
phoneBtnHeader.addEventListener('click', ()=>{
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
  if(feedbackMenu.classList.contains('active') === false){
    requestCallMenu.classList.add('active')
  }if(feedbackMenu.classList.contains('active') === true){
    feedbackMenu.classList.remove('active')
    requestCallMenu.classList.add('active')
  }
})
phoneBtn.addEventListener('click', ()=>{
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
  if(feedbackMenu.classList.contains('active') === false){
    requestCallMenu.classList.add('active')
  }if(feedbackMenu.classList.contains('active') === true){
    feedbackMenu.classList.remove('active')
    requestCallMenu.classList.add('active')
  }
})




// тут все понятно ;)

let newSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 'auto',
    
  breakpoints: {
    700: {
      slidesPerView: 4,
      spaceBetween: 10,
      enabled: false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },
});
