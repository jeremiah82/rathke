const card = document.querySelector(".card0");
const contain = document.querySelector(".contain");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".nike img");
const purchase = document.querySelector(".purchase button");
const desc = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

contain.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 55;
  let y = (window.innerHeight / 2 - e.pageY) / 55;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

contain.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  desc.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

contain.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transtion = "all 0.5s ease";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  desc.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

const card1 = document.querySelector(".card1");
const contain1 = document.querySelector(".contain1");
const title1 = document.querySelector(".title1");
const sneaker1 = document.querySelector(".nike1 img");
const purchase1 = document.querySelector(".purchase1 button");
const desc1 = document.querySelector(".info1 h3");
const sizes1 = document.querySelector(".sizes1");

contain1.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 55;
  let y = (window.innerHeight / 2 - e.pageY) / 55;

  card1.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

contain1.addEventListener("mouseenter", (e) => {
  card1.style.transition = "none";

  title1.style.transform = "translateZ(150px)";
  sneaker1.style.transform = "translateZ(200px) rotateZ(-45deg)";
  desc1.style.transform = "translateZ(125px)";
  sizes1.style.transform = "translateZ(100px)";
  purchase1.style.transform = "translateZ(75px)";
});

contain1.addEventListener("mouseleave", (e) => {
  card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card1.style.transtion = "all 0.5s ease";
  sneaker1.style.transform = "translateZ(0px) rotateZ(0deg)";
  title1.style.transform = "translateZ(0px)";
  desc1.style.transform = "translateZ(0px)";
  sizes1.style.transform = "translateZ(0px)";
  purchase1.style.transform = "translateZ(0px)";
});

const card2 = document.querySelector(".card2");
const contain2 = document.querySelector(".contain2");
const title2 = document.querySelector(".title2");
const sneaker2 = document.querySelector(".nike2 img");
const purchase2 = document.querySelector(".purchase2 button");
const desc2 = document.querySelector(".info2 h3");
const sizes2 = document.querySelector(".sizes2");

contain2.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 55;
  let y = (window.innerHeight / 2 - e.pageY) / 55;

  card2.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

contain2.addEventListener("mouseenter", (e) => {
  card2.style.transition = "none";

  title2.style.transform = "translateZ(150px)";
  sneaker2.style.transform = "translateZ(200px) rotateZ(-45deg)";
  desc2.style.transform = "translateZ(125px)";
  sizes2.style.transform = "translateZ(100px)";
  purchase2.style.transform = "translateZ(75px)";
});

contain2.addEventListener("mouseleave", (e) => {
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card2.style.transtion = "all 0.5s ease";
  sneaker2.style.transform = "translateZ(0px) rotateZ(0deg)";
  title2.style.transform = "translateZ(0px)";
  desc2.style.transform = "translateZ(0px)";
  sizes2.style.transform = "translateZ(0px)";
  purchase2.style.transform = "translateZ(0px)";
});

const card3 = document.querySelector(".card3");
const contain3 = document.querySelector(".contain3");
const title3 = document.querySelector(".title3");
const sneaker3 = document.querySelector(".nike3 img");
const purchase3 = document.querySelector(".purchase3 button");
const desc3 = document.querySelector(".info3 h3");
const sizes3 = document.querySelector(".sizes3");

contain3.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 55;
  let y = (window.innerHeight / 2 - e.pageY) / 55;

  card3.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

contain3.addEventListener("mouseenter", (e) => {
  card3.style.transition = "none";

  title3.style.transform = "translateZ(150px)";
  sneaker3.style.transform = "translateZ(200px) rotateZ(-45deg)";
  desc3.style.transform = "translateZ(125px)";
  sizes3.style.transform = "translateZ(100px)";
  purchase3.style.transform = "translateZ(75px)";
});

contain3.addEventListener("mouseleave", (e) => {
  card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card3.style.transtion = "all 0.5s ease";
  sneaker3.style.transform = "translateZ(0px) rotateZ(0deg)";
  title3.style.transform = "translateZ(0px)";
  desc3.style.transform = "translateZ(0px)";
  sizes3.style.transform = "translateZ(0px)";
  purchase3.style.transform = "translateZ(0px)";
});
