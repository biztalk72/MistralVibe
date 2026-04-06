document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let mouseX = 0;
    let windowWidth = window.innerWidth;
    
    // Set initial active item
    updateCarousel();
    
    // Mouse movement tracking
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        
        // Calculate which third of the screen the mouse is in
        const screenThird = windowWidth / 3;
        
        if (mouseX < screenThird) {
            // Left third - move to previous image
            moveCarousel(-1);
        } else if (mouseX > screenThird * 2) {
            // Right third - move to next image
            moveCarousel(1);
        }
    });
    
    // Window resize handler
    window.addEventListener('resize', function() {
        windowWidth = window.innerWidth;
    });
    
    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }
    
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Add instructions
    const instructions = document.createElement('div');
    instructions.className = 'instructions';
    instructions.textContent = 'Move mouse to left/right edges to see cute animals!';
    document.body.appendChild(instructions);
});