// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero Content Reveal
        gsap.from(".hero h1", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 0.2
        });

        gsap.from(".hero p", {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out",
            delay: 0.4
        });

        gsap.from(".hero-cta", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.out",
            delay: 0.6
        });

        gsap.from(".hero-image-container", {
            duration: 1.2,
            scale: 0.9,
            opacity: 0,
            ease: "power2.out",
            delay: 0.5
        });

        // Service Cards Stagger - Fixed Alignment
        document.querySelectorAll('.services-grid').forEach(grid => {
            gsap.from(grid.querySelectorAll(".service-card"), {
                scrollTrigger: {
                    trigger: grid,
                    start: "top 85%"
                },
                duration: 0.8,
                opacity: 0,
                stagger: 0.1,
                ease: "power1.out"
            });
        });
    }
});
