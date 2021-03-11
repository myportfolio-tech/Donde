
function InnitialCarouselSetUp()
    {
        const track = document.querySelector('.carousel__track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel__button--right');
        const prevButton = document.querySelector('.carousel__button--left');
        
        const slideWidth = slides[0].getBoundingClientRect().width;

        slides.forEach(setSlidePosition);
        
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
        
            moveToSlide(track, currentSlide, nextSlide);
        
        });

        prevButton.addEventListener('click', e => {
            console.log('Next Clicked');
            
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
        
            moveToSlide(track, currentSlide, prevSlide);
        
        });
    }





//arrange the slides
function setSlidePosition(slide, index){
    const slideWidth = slide.getBoundingClientRect().width;
    slide.style.left = slideWidth * index + 'px';
} 



function moveToSlide (track, currentSlide, targetSlide){
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}


export {InnitialCarouselSetUp, setSlidePosition, moveToSlide}