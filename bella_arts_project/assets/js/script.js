document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-image img');
    
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.0.5)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1.05)';
        });
    });
});