// Image Gallery Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Image click to enlarge functionality
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });
    
    // Create modal for image enlargement
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.style.cssText = `
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.9);
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.id = 'modalImage';
        modalImg.style.cssText = `
            margin: auto;
            display: block;
            width: 80%;
            max-width: 900px;
            max-height: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
        `;
        
        const caption = document.createElement('div');
        caption.id = 'caption';
        caption.style.cssText = `
            margin: auto;
            display: block;
            width: 80%;
            max-width: 700px;
            text-align: center;
            color: #ccc;
            padding: 10px 0;
            height: 30px;
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px;
        `;
        
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute;
            top: 15px;
            right: 35px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
        `;
        
        modal.appendChild(modalImg);
        modal.appendChild(caption);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
        
        // Close modal events
        modal.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });
    }
    
    function openModal(src, alt) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const caption = document.getElementById('caption');
        
        modal.style.display = 'block';
        modalImg.src = src;
        caption.innerHTML = alt;
    }
    
    function closeModal() {
        document.getElementById('imageModal').style.display = 'none';
    }
    
    // Create the modal when page loads
    createModal();
    
    // Smooth scrolling for internal links (if you add navigation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation for images
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease-in-out';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
    
    // Add hover effect enhancement
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
});