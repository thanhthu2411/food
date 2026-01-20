// import { ToggleSideBar, TogglePickupDelivery } from "./header.js";
import { restTemplate } from "./templates.mjs";
import { getRestJson, getFavoJson, HeartBtnHandle, favoRest, getNearJson,  SlideBtnHandle, ScrollBtnHandle } from "./restService.mjs";
// handle menu-btn

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
  // ToggleSideBar();
  // TogglePickupDelivery();
  // ScrollBtnHandle();
  await setRestaurant();
  await setFavo();
  await setNear();
  SlideBtnHandle();
  HeartBtnHandle();
}

init();
