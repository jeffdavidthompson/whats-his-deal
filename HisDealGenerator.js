

//getElementByID for all the elements to be updated
var elanalyze = document.getElementById("analyze");
var eltextbox = document.getElementById("textBox");
var elhisDeal = document.getElementById("hisDeal");

//Set up individiual Event Listeners
elanalyze.addEventListener("click", runSubmit, false);


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
  "He's just a philosophy major.",
  "He wants to feminist but doesn't know how.",
  "That word does not mean what he thinks it means.",
  "He's preoccupied with conflict in the Middle East.",
  "He started studying Buddhism.",
  "He saw 'Fight Club' for the first time last night.",
  "He's ashamed of his love of musical theater.",
  "He spent all his money buying up Twinkies when Hostess filed for bankruptcy.",
  "He's not into gaming as much as you are and that intimidates him.",
  "He is immune to social pressure.",
  "Male privilege. What else?",
  "He's doesn't really understand CSS.",
  "Someone caught a pic of him sleeping during class and he's kinda embarassed about it.",
  "He has an unhealthy relationship with his phone",
  "He thinks his therapist is about to fire him.",
  "He thinks you're trying to sell him Amway.",
  "His pants shrunk in the wash.",
  "He didn't get your last text."
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

//Function for when user clicks "submit"
//If input is given, it selects a random phrase from the hisDealsList array.
//If user does not enter any information, it selects a random phrase from hisDealsEmpty array.

function runSubmit() {
  var hisDealResult = hisDealsList[Math.floor(Math.random() * hisDealsList.length)];
  var hisDealEmpty = hisDealsEmpty[Math.floor(Math.random() * hisDealsEmpty.length)];
  if (eltextbox.textContent != "") {
    elhisDeal.textContent = hisDealResult;
  } else {
    elhisDeal.textContent = hisDealEmpty;
  }
};

