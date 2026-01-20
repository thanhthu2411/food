export async function getRestJson() {
  let data = [];

  const response = await fetch("./js/restaurant.json");
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");

  return data;
}

export async function getFavoJson() {
  let data = await getRestJson();

  let favoRest = data.filter((rest) => rest.rating.score > 4.5);

  return favoRest;
}

export async function getNearJson() {
  let data = await getRestJson();

  let nearRest = data.filter((rest) => rest.distanceMiles <= 1.0);

  return nearRest;
}


// show messages funtion
function showMessage(mes) {
  const mesContainer = document.querySelector(".message-container");
  mesContainer.textContent = mes;

  mesContainer.classList.add("mes-shown");

  setTimeout(() => {
    mesContainer.classList.remove("mes-shown");
  }, 4000);
}

export let favoRest = JSON.parse(localStorage.getItem("favoRest")) || {};

export function HeartBtnHandle() {
  const heartBtns = document.querySelectorAll(".heart-btn");

  heartBtns.forEach((btn) => {
    const svg = btn.querySelector("svg");
    const id = btn.dataset.id;

    if (favoRest[id]) {
      svg.classList.add("clicked");
    }

    btn.addEventListener("click", () => {
      if (favoRest[id]) {
        delete favoRest[id];
        svg.classList.remove("clicked");
        showMessage("Removed from your favorite list");
      } else {
        favoRest[id] = true;
        svg.classList.add("clicked");
        showMessage("Added to your favorite list");
      }

      localStorage.setItem("favoRest", JSON.stringify(favoRest));
    });
  });
}

// scroll buttons
export function ScrollBtnHandle() {
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
export function SlideBtnHandle() {
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
