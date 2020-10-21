
/*
function myFunction() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownImg')) {
    var dropdownHamburger = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdownHamburger.length; i++) {
      var openDropdown = dropdownHamburger[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

/*
var deButton = document.querySelector("h2");

function doeFormNeerEnOp(){
  let hetFormulier = document.querySelector("form");
  hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);
*/

/*
var menuKnop = document.querySelector("dropdownImg");

function menuOpEnNeer(){
  let hetMenu = document.querySelector("form");

hetMenu.classList.toggle(toonMenu);
}

menuKnop.addEventListener("click", menuOpEnNeer);
*/

var menuKnop = document.querySelector(".dropdownImg");
var hetMenu = document.querySelector(".dropdownContent");

function maakMenuZichtbaar() {
  hetMenu.classList.toggle("anders");
  
}

menuKnop.addEventListener("click", maakMenuZichtbaar);

/*var hamburgerKnop = document.querySelector("#hamburgerknop");
var menuZelf = document.querySelector(".hamburgermenu");

function menuUitKlappen() {
  menuZelf.classList.toggle("toonMenu");
}

hamburgerKnop.addEventListener("click", menuUitKlappen); */



