// Slide in navbar on load
gsap.to(".navbar", {
  y: 0,
  duration: 1,
  ease: "power2.out"
});

// Hero text animation
gsap.to(".animated-text", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 0.5,
  ease: "power2.out"
});

// Paragraph fade in
gsap.to(".hero-content p", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 1,
  ease: "power2.out"
});

// Pulse animation for button
gsap.to(".pulse", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "sine.inOut"
});

// Scroll-triggered fade-in
gsap.utils.toArray('.fade-scroll').forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
});