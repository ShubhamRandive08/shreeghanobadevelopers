document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
        const thumbnail = item.querySelector('.video-thumbnail');
        const playerContainer = item.querySelector('.video-player');
        const videoId = playerContainer.getAttribute('data-video-id');
        
        thumbnail.addEventListener('click', function() {
            // Close any other playing videos
            videoItems.forEach(video => {
                if (video !== item && video.classList.contains('active')) {
                    video.classList.remove('active');
                    const iframe = video.querySelector('iframe');
                    if (iframe) {
                        iframe.remove();
                    }
                }
            });
            
            // Toggle current video
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                const iframe = playerContainer.querySelector('iframe');
                if (iframe) {
                    iframe.remove();
                }
            } else {
                item.classList.add('active');
                
                // Create and insert YouTube iframe
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                
                playerContainer.appendChild(iframe);
                
                // Scroll the video into view on mobile
                if (window.innerWidth <= 768) {
                    item.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }
            }
        });
    });
    
    // Close video when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.video-item')) {
            videoItems.forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    const iframe = item.querySelector('iframe');
                    if (iframe) {
                        iframe.remove();
                    }
                }
            });
        }
    });
});