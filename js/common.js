const slideWrapper = document.querySelector('.slide-wrapper');
const slideContainer =slideWrapper.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
let currentIdx = 0;
let slideCount = slides.length;
const slideBtn = slideWrapper.querySelectorAll('.controls');
const slideHeight = 200;
const slideToShow = 1;
const moveAmt = slideHeight;
let timer;

///slideContainer의 너비를 지정
slides = slideContainer.querySelectorAll('li');
let newslideCount = slides.length;


// 이동함수
function moveSlide(idx) {
// idx = 0, slideContainer left 0,
// idx = 1, slideContainer left = 230px.
// idx = 2, slideContainer left = 460px.
slideContainer.style.left = `${-idx*moveAmt}px`;
currentIdx = idx;

if(currentIdx == -slideCount || currentIdx == slideCount){
  setTimeout(()=>{
    slides.style.top = 0;
  },500);
  setTimeout(()=>{
  },550);

  currentIdx = 0;
}
console.log(currentIdx);
}

/*
4초마다 할 일
*/
function autoSlide(){
    timer = setInterval(()=>{
    moveSlide(currentIdx+1);
    
  },1000);
}

slideContainer.addEventListener('mouseenter',()=>{
  clearInterval(timer);
});
slideContainer.addEventListener('mouseleave',()=>{
  // autoSlide();
});

