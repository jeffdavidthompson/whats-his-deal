//getElementByID for all the elements to be updated
var elanalyze = document.getElementById("analyze");
var eltextbox = document.getElementById("textBox");
var elImage = document.getElementById("imgBox");
var elhisDeal = document.getElementById("hisDeal");

//List of possible output messages for what his deal is
var listHisDeals = [
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
var listHisDealsEmpty = [
  "Error: You didn't enter anything so he must be a ghost. Deal with it.",
  "Error: You didn't enter anything and that's your problem.",
  "Error: I didn't catch that. Try entering something.",
  "Error: If you need validation, you won't get it here. Try entering something.",
  "Error: This would work a lot better if you actually entered something.",
  "Error: If you could enter something, that would be great."
];

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

  //Randomly assigns an output message from a list.
  setContent: function(list) {
    return list[Math.floor(Math.random() * list.length)];
  },

  //Checks if text box is empty. If yes, displays randomly selected error message
  //if not empty, displays a random selection from a list of hisDeals
  runSubmit: function() {
    if (input.isEmpty && (elImage.src.length == 0)) {
      elhisDeal.textContent = input.setContent(listHisDealsEmpty);
    } else {
      elhisDeal.textContent = input.setContent(listHisDeals);
    }
  },
}

//
// The code for Drag and Drop of images is derived from source code at:
//
//    http://www.w3schools.com/html/html5_draganddrop.asp
//
// The w3schools code only provided for dragging an image from
//  one part of a page to another part of the same page, and did so
//  using the deprecated HTML event handlers
//
// In order to support Drag from another source to the web
//  page, a hidden IMG is used that is mutually exclusive in visibility
//  with the original textinput box.
//
//
function allowDrop(ev) {
  // normally, the default action a web page takes for a drag
  //  made onto it is to open the item dropped in a new page.
  //  This function call turns off that default behavior.
  ev.preventDefault();
  ev.stopPropagation();
}

function drag(ev) {
  // the data being dragged
  // We use "Text"
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  // normally, the default action a web page takes for a drag
  //  made onto it is to add the item dropped. This function
  //  call turns off that default behavior.
  ev.preventDefault();
  ev.stopPropagation();
  var objPasted = ev.dataTransfer;
  var elTarget = ev.target;

  if (objPasted.files.length > 0) {
    // just take the first file
    var firstFile = objPasted.files[0];

    // only allow image files
    if (! firstFile.type.match("image.*")) {
      return;
    }

    //
    // Some browsers treat displaying a user provided URL as
    // a security vulnerability, so instead, copy the image
    // into the web page, rather than link to it.
    //
    // The code that does this is derived from:
    // http://www.html5rocks.com/en/tutorials/file/dndfiles/
    // by Eric Bidelman
    //
    // The Bidelman example was for a filereader to generate thumbnails of
    //  multiple images, instead of what it is being used for here to safely
    //  load and display an image, and then swap it with a text box that has
    //  been marked as "mutex", or mutually exclusive [visibility] with another
    //  id.

    // check if the FileReader API is supported
    if(! window.FileReader) {
      return;
    }

    var reader = new FileReader();

    reader.onload = (function(elTarget) {
      return function(ev) {
        var elNew = swapMutexElements(elTarget);

        // should verify newEl is an image before assigning "src"
        elNew.src = ev.target.result; // file contents are on new "ev"
      };
    })(elTarget);

    // Read in the image file as a data URL
    reader.readAsDataURL(firstFile);
  } else {
    // just move the text
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  }
}

function addDragListenersToId(idListening) {
  var elListening = document.getElementById(idListening);

  if (elListening.addEventListener) {
    elListening.addEventListener('dragover', allowDrop, false);
    elListening.addEventListener('drop', drop, false);
    elListening.addEventListener('dragstart', drag, false);
  }
}

//  IIFE code to set up the page's event listeners
addDragListenersToId("textBox");
addDragListenersToId("imgBox");

//Set up individiual Event Listeners
eltextbox.addEventListener("keypress", input.userType, false);
elanalyze.addEventListener("click", input.runSubmit, false);
elanalyze.addEventListener("click", button.hide, false);


