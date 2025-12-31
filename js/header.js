

export function ToggleSideBar() {
    const menuBtn = document.querySelector(".menu-btn");
    const sideBar = document.querySelector(".sidebar-container");
    const closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
        sideBar.classList.toggle("open");
    })

    closeBtn.addEventListener("click", () => {
        sideBar.classList.remove("open");
    })
}

export function TogglePickupDelivery() {
    const btns = document.querySelectorAll(".seg-btn");

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");
        })
    })
}