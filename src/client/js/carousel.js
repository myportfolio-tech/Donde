
function InnitialCarouselSetUp()
    {   

        const track = document.querySelector('.carousel__track');
        const currentSlide = track.querySelector('.current-slide');
        
        lazyLoadImage(currentSlide);
        setAuthorTags(currentSlide);

        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel__button--right');
        const prevButton = document.querySelector('.carousel__button--left');
        
        const slideWidth = slides[0].getBoundingClientRect().width;

        slides.forEach(setSlidePosition);
        
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            // console.log(nextSlide);
            
            lazyLoadImage(nextSlide);
            moveToSlide(track, currentSlide, nextSlide);
            setAuthorTags(nextSlide);

        
        });

        prevButton.addEventListener('click', e => {
            // console.log('Next Clicked');
            
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            
            lazyLoadImage(prevSlide);
            moveToSlide(track, currentSlide, prevSlide);
            
            setAuthorTags(prevSlide);
        
        });
    }





//arrange the slides
function setSlidePosition(slide, index){
    const slideWidth = slide.getBoundingClientRect().width;
    slide.style.left = slideWidth * index + 'px';
} 


function lazyLoadImage(currentSlide){
    // console.log('CURRENT SLIDE: ', currentSlide.firstChild);
    currentSlide.firstChild.src = currentSlide.firstChild.dataset.src;

}

function moveToSlide (track, currentSlide, targetSlide){
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}


function setAuthorTags(slide){
    const author = document.getElementById('author');
    const tags = document.getElementById('tags');
    author.innerHTML = `<span class="author-heading">Author:</span>${slide.firstChild.dataset.author}`
    tags.innerHTML = `<span class="author-heading">Tags:</span>${slide.firstChild.dataset.tags}`
}

export {InnitialCarouselSetUp, setSlidePosition, moveToSlide}