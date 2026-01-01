
const ring = document.querySelector(".cursor-ring");
const header = document.querySelector(".header");


header.addEventListener("mousemove", (e) => {
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

header.addEventListener("mouseenter", () => {
  ring.style.display = "block";
});
header.addEventListener("mouseleave", () => {
  ring.style.display = "none";
 
  ring.classList.remove("magnify");
});


// mouse circle
window.addEventListener("scroll", () => {
  document.querySelector(".slider").classList.toggle(
    "scrolled",
    window.scrollY > 10
  );
});



const phrases = ["Developer", "Programmer", "Frontend Developer"];

const typingSpeed = 70;
const eraseSpeed = 35;
const delayBetween = 1200;

let i = 0,
  j = 0;
let typing = true;
const el = document.getElementById("typed");

function loop() {
  const current = phrases[i];

  if (typing) {
    if (j <= current.length) {
      el.textContent = current.slice(0, j++);
      setTimeout(loop, typingSpeed);
    } else {
      typing = false;
      setTimeout(loop, delayBetween);
    }
  } else {
    if (j > 0) {
      el.textContent = current.slice(0, --j);
      setTimeout(loop, eraseSpeed);
    } else {
      typing = true;
      i = (i + 1) % phrases.length;
      setTimeout(loop, 250);  
    }
  }
}

loop();

// about me
const intros = document.querySelectorAll(
  ".introduction, .tools , .com-img , .passion , .c-i , .c-tw , .c-t , .c-w"
);

function checkIntros() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  intros.forEach((intro) => {
    const introTop = intro.getBoundingClientRect().top;

    if (introTop < triggerBottom) {
      intro.classList.add("show");
    } else {
      intro.classList.remove("show"); 
    }
  });
}

window.addEventListener("scroll", checkIntros);
checkIntros();