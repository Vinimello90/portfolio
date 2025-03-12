const buttonElements = document.querySelectorAll(".project__toggle");

function handleProjectDescVisibility(evt) {
  const projectInfoElements = document.querySelectorAll(".project__info");

  projectInfoElements.forEach((element) => {
    if (element !== evt.target.parentNode) {
      element.classList.remove("project__info_display");
    } else {
      evt.target.parentNode.classList.toggle("project__info_display");
    }
  });
}

buttonElements.forEach((element) => {
  element.addEventListener("click", handleProjectDescVisibility);
});
