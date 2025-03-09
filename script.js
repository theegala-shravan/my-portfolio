// GSAP Animations
gsap.from(".animated-text", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".project-card", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2, ease: "back.out(1.7)" });
gsap.from(".social-links a", { opacity: 0, y: 20, duration: 1, stagger: 0.2, delay: 1 });

// Parallax Effect
document.addEventListener("scroll", () => {
    let offset = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = offset * 0.7 + "px";
});

// Typing effect
const text = "Full-Stack Developer | JavaScript | Node.js";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing-effect").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);
