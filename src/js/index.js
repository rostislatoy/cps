import '../scss/style.scss'
import '../scss/adaptive.scss'
import '../scss/main-brands.scss'
import '../scss/colorize.scss'

const header = document.querySelector('header')
const burgerBtn = document.querySelector('#burger-btn')
const menu = document.getElementById('menu')
const body = document.querySelector('body')
const menuBtnBack = document.getElementById('back-burger-btn')
const main = document.querySelector('main')
const menuPadding = document.querySelector('.padding-menu-box')
const messageBtn = document.querySelector('.message')
const messageBtnHeader = document.querySelector('.header-navbar-btn-message')
const phoneBtn = document.querySelector('.phone')
const phoneBtnHeader = document.querySelector('.header-navbar-btn-phone')
const feedbackMenu = document.querySelector('.feedback-menu')
const requestCallMenu = document.querySelector('.request-call')
const cancelFeedbackMenu = document.querySelector('.feedback-menu-btn')
const cancelRequestCallMenu = document.querySelector('#cancelRequestCallMenu')
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const readMore = document.getElementById('read-more');
const hidden = document.getElementById('hidden');
const readMoreBrands = document.getElementById('read-more-brands')
const hiddenBrands = document.getElementById('hidden-brands')
const slides = document.querySelectorAll('.brands-cards')
const swiperDiv = document.querySelector('#swiper')
const swiperDivVariety = document.querySelector('#swiper-variety')
const readMoreBrandsVariety = document.getElementById('read-more-brands-variety')
const hiddenBrandsVariety = document.getElementById('hidden-brands-variety')

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


if(readMore.classList.contains('active') === false){hidden.classList.add('active')}
readMore.onclick = () =>{
  readMore.classList.add('active')
  moreText.classList.add('active')
  hidden.classList.remove('active')
}


hidden.onclick = () => {
 
  hidden.classList.add('active')
  moreText.classList.remove('active')
  readMore.classList.remove('active')
}


let newSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 'auto',
    
  breakpoints: {

    700:{
      slidesPerView: 1.5,
    },
    700: {
      lidesPerView: 4,
      spaceBetween: 10,
      enabled: false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },
});

hiddenBrands.style.display = 'none';

readMoreBrands.onclick = function (){
  swiperDiv.style.height = 'auto';
  readMoreBrands.style.display = 'none'
  hiddenBrands.style.display = 'inline-flex'
}
hiddenBrands.onclick = function (){
  swiperDiv.style.height = 200 + 'px';
  hiddenBrands.style.display = 'none'
  readMoreBrands.style.display = 'inline-flex'
}

hiddenBrandsVariety.style.display = 'none';

readMoreBrandsVariety.onclick = function (){
  swiperDivVariety.style.height = 'auto';
  readMoreBrandsVariety.style.display = 'none'
  hiddenBrandsVariety.style.display = 'inline-flex'
}
hiddenBrandsVariety.onclick = function (){
  swiperDivVariety.style.height = 200 + 'px';
  hiddenBrandsVariety.style.display = 'none'
  readMoreBrandsVariety.style.display = 'inline-flex'
}

