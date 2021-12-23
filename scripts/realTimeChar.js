const buttonMayus = document.getElementById("buttonMayus"),
  buttonMinus = document.getElementById("buttonMinus"),
  input = document.querySelector(".input"),
  output = document.querySelector(".output"),
  copyButton = document.querySelector(".copy"),
  copyText = document.querySelector(".copy-text"),
  copyCheckIcon = document.querySelector(".copy svg");

function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}
function removeClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

function realtimeChar(e) {
  let realTimeValue = e.target.value;

  output.value = convertToMayuscOrMinusc(realTimeValue);
}

function convertToMayuscOrMinusc(string) {
  if (buttonMayus.classList.contains("button--active")) {
    return string.toUpperCase();
  } else if (buttonMinus.classList.contains("button--active")) {
    return string.toLowerCase();
  }
}

function activeButtonMayusc() {
  addClass(buttonMayus, "button--active");
  removeClass(buttonMinus, "button--active");
  resetCopyVisual();
  let inputValue = input.value;
  output.value = inputValue.toUpperCase();
}
function activeButtonMinusc() {
  addClass(buttonMinus, "button--active");
  removeClass(buttonMayus, "button--active");
  resetCopyVisual();
  let inputValue = input.value;
  output.value = inputValue.toLowerCase();
}

function copyVisual() {
  if (copyText.classList.contains("hidden")) {
    removeClass(copyText, "hidden");
    addClass(copyCheckIcon, "hidden");
  }
}
function resetCopyVisual() {
  if (copyCheckIcon.classList.contains("hidden")) {
    addClass(copyText, "hidden");
    removeClass(copyCheckIcon, "hidden");
  }
}

function copySucces() {
  output.focus();
  document.execCommand("selectAll");
  document.execCommand("copy");
}
function outputScrollTop() {
  if (output.scrollTop > 0) {
    output.scrollTo(0, 0);
  }
}

input.addEventListener("input", realtimeChar);
input.addEventListener("input", resetCopyVisual);

buttonMayus.addEventListener("click", activeButtonMayusc);
buttonMinus.addEventListener("click", activeButtonMinusc);
copyButton.addEventListener("click", copyVisual);
copyButton.addEventListener("click", copySucces);
copyButton.addEventListener("click", outputScrollTop);
