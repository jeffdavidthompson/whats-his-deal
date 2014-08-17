//getElementByID for all the elements to be updated
var elanalyze = document.getElementById("analyze");
var eltextbox = document.getElementById("textBox");
var elhisDeal = document.getElementById("hisDeal");

//List of possible output messages for what his deal is
var hisDealsList = [
  "He's just constipated.",
  "He's self-conscious about his receding hairline.",
  "He's been in love with you for the past fifteen years.",
  "He's high.",
  "You remind him of his mom.",
  "Lol! Autocorrect.",
  "Sports things happened.",
  "That's actually a question he's been asking himself for years.",
  "He's just a philosophy major with daddy issues.",
  "He wants to feminist but doesn't know how.",
  "That word does not mean what he thinks it means.",
  "He's preoccupied with thinking about conflicts in the Middle East.",
  "He started studying Buddhism.",
  "He saw 'Fight Club' for the first time last night.",
  "He accidentally the whole thing.",
  "He spent all his money buying up Twinkies when Hostess filed for bankruptcy.",
  "He's not into gaming as much as you are and that intimidates him.",
  "He thinks he's immune to social pressure but he's actually just a jerk.",
  "Male privilege, probably.",
  "He doesn't really understand CSS.",
  "Someone caught a pic of him sleeping during class and he's kinda embarassed about it.",
  "He has an unhealthy relationship with his phone.",
  "He bought a lottery ticket and really thinks he'll win this time.",
  "He thinks you're trying to sell him Amway.",
  "He's a business major. He'll grow out of it.",
  "His pants shrunk in the wash.",
  "He's just not that into you. :(",
  "He chose to ignore your last text.",
  "He's jealous of your Github profile.",
  "He's trying to hide how much he wants you to tweet something funny he said.",
  "He's waiting for the right time to tell you that he's your long lost brother.",
  "He's still sore about the time you ate the last french fry off his plate even though he said you could have it.",
  "He's really paranoid about 'Game of Thrones' spoilers.",
  "He forgot about Dre.",
  "He doesn't know he's beautiful.",
  "He thought of a perfect commit message but he already pushed his code.",
  "He's a food truck chaser."
];

//List of possible output messages if no input entered
var hisDealsEmpty = [
  "Error: You didn't enter anything so he must be a ghost. Deal with it.",
  "Error: You didn't enter anything and that's your problem.",
  "Error: I didn't catch that. Try entering something.",
  "Error: If you need validation, you won't get it here. Try entering something.",
  "Error: This would work a lot better if you actually entered something.",
  "Error: If you could enter something, that would be great."
];

//Randomly assigns an output message from a list.
var hisDealResult = hisDealsList[Math.floor(Math.random() * hisDealsList.length)];
var hisDealEmpty = hisDealsEmpty[Math.floor(Math.random() * hisDealsEmpty.length)];

//Object for submission button
var button = {
  hidden: false,

  hide: function() {
    if (!button.hidden) {
      elanalyze.style.visibility = "hidden";
      button.hidden = false;
    }
  },

  show: function() {
    if (button.hidden) {
      elanalyze.style.visibility = "visible";
      button.hidden = true;
      return button.hidden;
    }
  },
}

//Object for user's text entry
var input = {
  isEmpty: true,

  //Changes isEmpty vcalue to false. Assumes user is not typing spaces.
  userType: function(onkeypress) {
    input.isEmpty = false;
  },

  //Checks if text box is empty. If yes, displays randomly selected error message
  //if not empty, displays a random selection from a list of hisDeals
  runSubmit: function() {
    if (input.isEmpty) {
      elhisDeal.textContent = hisDealEmpty;
    } else {
      elhisDeal.textContent = hisDealResult;
    }
  },
}

//Set up individiual Event Listeners
eltextbox.addEventListener("keypress", input.userType, false);
elanalyze.addEventListener("click", input.runSubmit, false);
elanalyze.addEventListener("click", button.hide, false);

