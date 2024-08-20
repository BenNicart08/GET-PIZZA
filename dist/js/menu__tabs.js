const menutabs = document.querySelectorAll(".menu__tab");
const menucontents = document.querySelectorAll(".menuList__details");

menutabs.forEach((menutab) => {
  menutab.addEventListener("click", () => {
    removeActiveTab();
    menutab.classList.add("active");
    const mactiveContent = document.querySelector(`#${menutab.id}-content`);
    removeActiveContent();
    mactiveContent.classList.add("active");
  });
});

function removeActiveTab() {
  menutabs.forEach((menutab) => {
    menutab.classList.remove("active");
  });
}

function removeActiveContent() {
  menucontents.forEach((menucontent) => {
    menucontent.classList.remove("active");
  });
}
