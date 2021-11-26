toggle = document.getElementById("navbarToggler");
content = document.getElementById("navbarContent");

toggle.addEventListener("click", function () {
  setIcon();
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
});

function setIcon() {
  let close_icon = document.createElement("i");
  close_icon.classList.add("fa");
  close_icon.classList.add("fa-times");
  close_icon.classList.add("fa-2x");
  let menu_icon = document.createElement("i");
  menu_icon.classList.add("fa");
  menu_icon.classList.add("fa-bars");
  menu_icon.classList.add("fa-2x");

  if (content.style.display === "none") {
    toggle.textContent = "";
    toggle.appendChild(close_icon);
  } else {
    toggle.textContent = "";
    toggle.appendChild(menu_icon);
  }
}
