var itemRadios = document.getElementsByName("lesson");

for (var i = 0; i < itemRadios.length; i++) {
	itemRadios[i].addEventListener("change", function() {

    var itemValue = this.value;
    var itemElement = document.getElementById(itemValue);
    var itemElements = document.getElementsByClassName("lesson");

    for (var j = 0; j < itemElements.length; j++) {
      if (itemElements[j] === itemElement) {
        itemElements[j].style.display = "block";
      } else {
        itemElements[j].style.display = "none";
      }
    }
  });
}