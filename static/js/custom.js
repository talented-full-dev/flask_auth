function showSnackbar(param) {
  var snackbarHTML = document.querySelectorAll(".snackbar"),
    element;
  for (element of snackbarHTML) {
    // Check if param is an Event or string
    if (
      param instanceof Event &&
      param.currentTarget.hasAttribute("data-text")
    ) {
      element.innerHTML = param.currentTarget.getAttribute("data-text");
    } else if (typeof param == "string" && !Utils.is_empty(param)) {
      element.innerHTML = param;
    }

    element.classList.add("snackbar-show");

    setTimeout(function () {
      element.classList.remove("snackbar-show");
    }, 3000);
  }
}
// Uses
// Opcion 1: Mostrara el texto dentro del HTML del snackbar
showSnackbar();
// Opcion 1: Mostrara el texto del atributo data-text del disparador
document
  .querySelector("#snackbar-trigger")
  .addEventListener("click", showSnackbar);
