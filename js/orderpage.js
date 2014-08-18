//getElementByID for all the elements to be updated
var elbuybutton = document.getElementById("buybutton");
var elbuyer = document.getElementById("name");
var elorderthanks = document.getElementById("orderthanks");

//Object for submission button
var buybutton = {
  hidden: false,

  hide: function(onclick) {
    if (!buybutton.hidden) {
      elbuybutton.style.visibility = "hidden";
      buybutton.hidden = false;
    }
  },

  show: function(onclick) {
    if (buybutton.hidden) {
      elbuybutton.style.visibility = "visible";
      buybutton.hidden = true;
      return buybutton.hidden;
    }
  },
}

//User Object
var buyer = {
  name: elbuyer.value,

  //Displays thank you message to user
  thanks: function(onclick) {
    buyer.name = elbuyer.value,
    elorderthanks.textContent = "Thank you, " + buyer.name + " for your order!";
  },
}

//Set up individiual Event Listeners
elbuybutton.addEventListener("click", buyer.thanks, false);
elbuybutton.addEventListener("click", buybutton.hide, false);
