//getElementByID for all the elements to be updated
var elbuybutton = document.getElementById("buybutton");
var elbuyer = document.getElementById("name");
var elorderthanks = document.getElementById("orderthanks");

//Object for submission button
var buybutton = {
  clickCount: 0,

  clickit: function() {
    if (buybutton.clickCount == 0) {
      // the current button is the Buy Now button, change it to logo
      this.innerHTML = "<a href='index.html'><img src='images/logo.png' border-color='white' border-width='2px' height=50></a>";
      elbuybutton.removeEventListener("click", buyer.thanks, false);
      elbuybutton.removeEventListener("click", buybutton.clickit, false);
    } else {
      // the current button is the logo button, reload index
    }
    buybutton.clickCount++;
  },
}

//User Object
var buyer = {
  name: elbuyer.value,

  //Displays thank you message to user
  thanks: function(onclick) {
    var sThanksMsg = "Thank you";

    buyer.name = elbuyer.value;
    if (buyer.name.length > 0 ) {
      sThanksMsg = sThanksMsg + ", " + buyer.name;
    }
    sThanksMsg = sThanksMsg + " for your order!";

    elorderthanks.textContent = sThanksMsg;
  },
}

//Set up individiual Event Listeners
elbuybutton.addEventListener("click", buyer.thanks, false);
elbuybutton.addEventListener("click", buybutton.clickit, false);
