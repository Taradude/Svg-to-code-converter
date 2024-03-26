const cards = document.querySelectorAll(".card");
const h1 = document.querySelector("h1");
gsap.set(h1, {
  opacity: 0,
});
const tl = gsap.timeline();

tl.from(cards, {
  ease: "power4.out",
  yPercent: -150,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
}).to(h1, {
  opacity: 1,
  duration: 1.5,
});
