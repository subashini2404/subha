//initial
let slideposition = 0;
// variable
const sliders = document.querySelectorAll('.slider-item');
const totalSlider = sliders.length;
const btnPrev = document.querySelector('#btn-previous');
const btnNext = document.querySelector('#btn-next');

// call, action
btnPrev.addEventListener('click', function(){
    PrevSlide();
});
btnNext.addEventListener('click', function(){
    NextSlide();
});

// function
function updatePosition(){
    sliders.forEach(slide=>{
       slide.classList.remove('active');
       slide.classList.add('hidden'); 
    });
sliders[slideposition].classList.add('active');
}

function PrevSlide(){
    if(slideposition==0){
        slideposition=totalSlider-1;
    }else{
        slideposition--;   
     }
    updatePosition();
}
function  NextSlide(){
    if(slideposition==totalSlider-1){
        slideposition=0;
    }else{
        slideposition++;
    }
    updatePosition();

}
