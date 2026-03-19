const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("click",toggleSideBar);

menuBtn.addEventListener("click",toggleSideBar);

closeBtn.addEventListener("click",toggleSideBar);

function toggleSideBar(event)
{
    event.stopPropagation();
    sidebar.classList.toggle("active");
}
