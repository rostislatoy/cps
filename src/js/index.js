import '../scss/reset-styles.scss';
import '../scss/header-main_title.scss';
import '../scss/adaptive.scss';
import '../scss/main-brands.scss';
import '../scss/colorize.scss';
import Swiper, { Navigation, Pagination } from 'swiper';

const header = document.querySelector('header')
const burgerBtn = header.querySelector('.burger-btn')
const menu = document.querySelector('aside')
const body = document.querySelector('body')
const menuBtnBack = menu.querySelector('.back-burger-btn')
const main = document.querySelector('main')
const menuPadding = document.querySelector('.burger__body-container')
const messageBtn = menu.querySelector('.message')
const messageBtnHeader = header.querySelector('.header__btn-message')
const phoneBtn = menu.querySelector('.phone')
const phoneBtnHeader = header.querySelector('.header__btn-phone')
const feedbackMenu = document.querySelector('.feedback-menu')
const requestCallMenu = document.querySelector('.request-call')
const cancelFeedbackMenu = feedbackMenu.querySelector('.feedback-menu-btn')
const cancelRequestCallMenu = requestCallMenu.querySelector('.cancelRequestCallMenu')
const moreText = main.querySelector(".more-title-text");
const readMore = main.querySelector('.services__read-more-text');
const readMoreText = readMore.querySelector('.read-more-text');
const iconDropDownShow = readMore.querySelector('.services__icon-dropdown-show')
const showAllFirstSlider = main.querySelector('.show-all-brands-section-icon')
const readMoreBrands = main.querySelector('.read-more-brands')
const readMoreBrandsText = readMoreBrands.querySelector('.read-more-brands-text')
const swiperDiv = main.querySelector('#swiper-brand-section')
const swiperDivVariety = main.querySelector('#swiper-variety')
const readMoreBrandsVariety = main.querySelector('.read-more-brands-variety')
const readMoreBrandsVarietyText = readMoreBrandsVariety.querySelector('.read-more-brands-variety-text')
const showAllSecondSlider = readMoreBrandsVariety.querySelector(".show-all-brands-section-icon-variety")




let sliders
const breakpointSwiper = window.matchMedia("(max-width: 760px)")
const swiperContainer = document.querySelector('.swiper')
function createSlider() {
  
  if (breakpointSwiper.matches && (!swiperContainer.classList.contains('swiper-initialized'))) {
      sliders = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
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
      })
    
  } else {
    if (
      swiperContainer.classList.contains('swiper-initialized') &&
      !sliders[0].destroyed
    ) {
      for (let slider of sliders) {
        slider.destroy()
        console.log('hfwyuevhbfcsof')
      }
    }
  }
}
createSlider()

breakpointSwiper.addEventListener('change', function(event){
  createSlider()
})



const readMoreTitleFunc = (event) => {
  if(!moreText.classList.contains('active')){
  readMoreText.textContent = 'Скрыть'
  }else{
  readMoreText.textContent = 'Читать далее'
}
moreText.classList.toggle('active')
iconDropDownShow.classList.toggle('rotate--icon')
};
readMore.addEventListener('click', readMoreTitleFunc)



const readMoreBrandsFunc  = (event) => {
  if(!swiperDiv.classList.contains('showed')){
  readMoreBrandsText.textContent = 'Скрыть';
  }else{
  readMoreBrandsText.textContent = 'Показать все';
  }
  swiperDiv.classList.toggle('showed')
  showAllFirstSlider.classList.toggle('rotate--icon');
}
readMoreBrands.addEventListener('click', readMoreBrandsFunc)

const readMoreBrandsVarietyFunc = (event) => {
  if(!swiperDivVariety.classList.contains('showed')){
  readMoreBrandsVarietyText.textContent = 'Скрыть';
  }else{
    readMoreBrandsVarietyText.textContent = 'Показать все';
  }
  swiperDivVariety.classList.toggle('showed');
  showAllSecondSlider.classList.toggle('rotate--icon');
}
readMoreBrandsVariety.addEventListener('click', readMoreBrandsVarietyFunc)




function burgerOpen(){
  menu.classList.add('active')
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
}
burgerBtn.addEventListener('click', burgerOpen)


function burgerClose() {
  menu.classList.remove('active')
  header.classList.remove('active')
  main.classList.remove('active')
  body.classList.remove('modal-open')
}
menuBtnBack.addEventListener('click', burgerClose)

function mainRemoveClasses(e) {
  if(!menuPadding.classList.contains(e.target)){
    menu.classList.remove('active')
    header.classList.remove('active')
    main.classList.remove('active')
    body.classList.remove('modal-open')
    requestCallMenu.classList.remove('active')
    feedbackMenu.classList.remove('active')
  }
}
main.addEventListener('click',mainRemoveClasses)


function messageModalOpen(){
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
  if(!requestCallMenu.classList.contains('active')){
  feedbackMenu.classList.add('active')
}if(requestCallMenu.classList.contains('active')){
  requestCallMenu.classList.remove('active')
  feedbackMenu.classList.add('active')
}
}
messageBtn.addEventListener('click',messageModalOpen)
messageBtnHeader.addEventListener('click', messageModalOpen)

function messageModalClose(){
  feedbackMenu.classList.remove('active')
  header.classList.remove('active')
  main.classList.remove('active')
  body.classList.remove('modal-open')
}
cancelFeedbackMenu.addEventListener('click', messageModalClose)

 function phoneModalOpen(){
  header.classList.add('active')
  main.classList.add('active')
  body.classList.add('modal-open')
  if(!feedbackMenu.classList.contains('active')){
    requestCallMenu.classList.add('active')
  }if(feedbackMenu.classList.contains('active')){
    feedbackMenu.classList.remove('active')
    requestCallMenu.classList.add('active')
  }
}
phoneBtn.addEventListener('click', phoneModalOpen)
phoneBtnHeader.addEventListener('click', phoneModalOpen)

 function phoneModalClose(){
  requestCallMenu.classList.remove('active')
  header.classList.remove('active')
  main.classList.remove('active')
  body.classList.remove('modal-open')
}
cancelRequestCallMenu.addEventListener('click', phoneModalClose)




