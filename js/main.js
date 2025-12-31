import { ToggleSideBar, TogglePickupDelivery } from "./header.js";
import { restTemplate } from "./templates.mjs";
import { getRestJson, getFavoJson, HeartBtnHandle, favoRest, getNearJson } from "./restService.mjs";
// handle menu-btn

// scroll buttons
function ScrollBtnHandle() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".scroll-btn");
    if (!btn) return;

    const carousel = btn.closest(".carousel");
    const container = carousel.querySelector(".scroll-container");

    const amount = container.clientWidth * 0.8;
    // container.clientWidth = the visible width of the scroll container

    container.scrollBy({
      left: btn.classList.contains("left") ? -amount : amount,
      behavior: "smooth",
    });
  });
}

// handling slideshow buttons

function SlideBtnHandle() {
  document.querySelectorAll(".rest-img-container").forEach((container) => {
    let slides = container.querySelectorAll(".rest-img");
    let index = 0;

    slides[index].classList.add("active");

    container.querySelector(".next").addEventListener("click", () => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    });

    container.querySelector(".prev").addEventListener("click", () => {
      slides[index].classList.remove("active");
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add("active");
    });
  });
}

async function setRestaurant() {
  const restArray = await getRestJson();
  const restContainer = document.querySelector(".rest-container");

  const html = restArray.map(restTemplate);
  restContainer.innerHTML = html.join("");
}

async function setFavo() {
  const favoArray = await getFavoJson();
  const favoContainer = document.querySelector(".favo-container");

  const html = favoArray.map(restTemplate);
  favoContainer.innerHTML = html.join("");
}

async function setNear() {
  const nearRest = await getNearJson();
  const nearContainer = document.querySelector(".near-container");

  const html = nearRest.map(restTemplate);
  nearContainer.innerHTML = html.join("");
  
}

async function init() {
  ToggleSideBar();
  TogglePickupDelivery();
  ScrollBtnHandle();
  await setRestaurant();
  await setFavo();
  await setNear();
  SlideBtnHandle();
  HeartBtnHandle();
}

init();
