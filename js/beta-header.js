function navFunc() {
  var context = document.querySelector("#headernav");

  //Hamburger clicking - open & close dropdown menu
  context.querySelector(".nav__hmb").addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.toggle("active");
    context.querySelector(".nav__core").classList.toggle("active");

    
    if(context.querySelector(".nav__core:not(.active)")) {
      //Closing / resetting the megamenu when closing the main menu
      if(context.querySelector(".nav__sub__item.active") && context.querySelector(".nav__core__link--sub.active")) {
        context.querySelector(".nav__sub.active").classList.remove("active");
        context.querySelector(".nav__sub__item.active").classList.remove("active");
        context.querySelector(".nav__core__link--sub.active").classList.remove("active");
        context.querySelector('.nav__sub').style.minHeight = 0+'px'
      }
    }
  })

  //Adding the click event to each header item (first level) to open & close its relative sub-menu
  context.querySelectorAll(".nav__core__link--sub").forEach(element => {
    element.addEventListener("click", function(e) {
      e.preventDefault();

      let elementNum = element.dataset.presub;
      let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

      if(element.classList.contains("active")) {
        //If the user clicks on an already active item
        context.querySelector(".nav__sub").classList.remove("active");
        context.querySelector('.nav__sub__item[data-sub="'+elementNum+'"]').classList.remove("active");
        context.querySelector('.nav__core__link--sub[data-presub="'+elementNum+'"]').classList.remove("active");
        context.querySelector('.nav__sub').style.minHeight = 0+'px'
      } else {
        //Else if the user clicks on an item which isn't active, and...
        if(context.querySelector(".nav__sub__item.active") && context.querySelector(".nav__core__link--sub.active")) {
          context.querySelector(".nav__sub.active").classList.remove("active");
          context.querySelector(".nav__sub__item.active").classList.remove("active");
          context.querySelector(".nav__core__link--sub.active").classList.remove("active");
          context.querySelector('.nav__sub').style.minHeight = 0+'px'
        }

        //...close the currently opened item and open the clicked item
        element.classList.add("active");
        context.querySelector(".nav__sub").classList.add("active");
        context.querySelector('.nav__sub__item[data-sub="'+elementNum+'"]').classList.add("active");

        //Properly sizing the sub item's content on mobile
        if(deviceWidth < 769) {
          let headerCoreHeight = context.querySelector(".nav__core").clientHeight;
          context.querySelector('.nav__sub').style.minHeight = headerCoreHeight+"px";
        }
        //Adjusting the nav__sub box sizes on bigger devices
        if(deviceWidth >= 769) {
          let subActiveXoffset = context.querySelector(".nav__core__link--sub.active").getBoundingClientRect().left
          let subActiveWidth = context.querySelector(".nav__core__link--sub.active").getBoundingClientRect().width
          console.log(context.querySelector(".nav__sub.active"))
          let subActiveFinalLeft = parseInt(subActiveXoffset - 200 + subActiveWidth)
          context.querySelector(".nav__sub.active").style.left = subActiveFinalLeft+"px"
          console.log(subActiveFinalLeft)
        }
      }
    })
  });

  //Megamenu navigation - closing the current sublevel when touching the Back button
  context.querySelector(".nav__sub__exit").addEventListener("click", () => {
    context.querySelector(".nav__sub.active").classList.remove("active");
    context.querySelector(".nav__sub__item.active").classList.remove("active");
    context.querySelector(".nav__core__link--sub.active").classList.remove("active");
    context.querySelector('.nav__sub').style.minHeight = 0+'px';
  })

}
navFunc();