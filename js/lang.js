const lang = document.getElementById("lang");
const en = document.querySelectorAll(".en");
const jp = document.querySelectorAll(".jp");

const toggleText = document.getElementById("checkbox");

var i_lang = window.lang;

jp.forEach((element) => {
  element.style.display = "none";
});

lang.addEventListener("change", function() {
  if(this.checked) {
    en.forEach((element) => {
      element.style.display = "none";
    });
    jp.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    en.forEach((element) => {
      element.style.display = "block";
    });
    jp.forEach((element) => {
      element.style.display = "none";
    });
  }

  if (this.checked) {
    toggleText.textContent = "日本語";
  } else {
    toggleText.textContent = "English";
  }
});
