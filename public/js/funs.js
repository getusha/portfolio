document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let circle = document.getElementById("circle");
  let left = e.offsetX;
  let top = e.offsetY;
  circle.style.left = left + "px";
  circle.style.top = top + "px";
});

document.addEventListener("click", (e) => {
  let circle = document.getElementById("circle");
  circle.style.scale = 1.3;
});

const skilled = document.querySelectorAll(".skilled");

for (let i = 0; i < skilled.length; i++) {
  ip = i / 7;
  skilled[i].classList.add("animate-intro");
  skilled[i].style.animationDelay = ip + "s";
  setTimeout(() => {
    skilled[i].removeAttribute("style");
    skilled[i].classList.remove("animate-intro");
  }, 5000);
  skilled[i].addEventListener("mouseover", () => {
    skilled[i].classList.add("animate");
  });
}

// skilled.forEach((e)=>{
//     e.addEventListener('mouseover', ()=>{
//                         e.classList.add('animate');

//                         setTimeout(()=>{
//                         e.classList.remove('animate')
//                         },900)
//     })
// })
const titles = document.querySelectorAll(".main-title2");

titles.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("animate");

    setTimeout(() => {
      e.classList.remove("animate");
    }, 900);
  });
});


// Contact Data

// const email = document.querySelector("#email");
// const subject = document.querySelector("#subject");
// const fullName = document.querySelector("#fullName");
// const message = document.querySelector("#message");


// let formData = {
//     email: email.value,
//     fullName: fullName.value,
//     subject: subject.value,
//     message: message.value
// }

// const xhr = new XMLHttpRequest();

// xhr.open("/", "POST")