//getElementByID for all the elements to be updated
var elbuybbutton = document.getElementById("buybutton");
var elname = document.getElementById("name");
var elorderthanks = document.getElementByID("orderthanks");

//Object for submission button
var buybutton = {
  hidden: false,

  hide: function() {
    if (!buybutton.hidden) {
      elanalyze.style.visibility = "hidden";
      buybutton.hidden = false;
    }
  },

  show: function() {
    if (buybutton.hidden) {
      elanalyze.style.visibility = "visible";
      buybutton.hidden = true;
      return buybutton.hidden;
    }
  },
}

//User Object
var user = {
  var userName = elname.name,

  //Displays thank you message to user
  thanks: function(onclick) {
    elorderthanks = "Thank you, " + user.name + "for your order!";
  },
}

//Set up individiual Event Listeners
elbuybutton.addEventListener("click", user.thanks, false);
elbuybutton.addEventListener("click", buybutton.hide, false);

