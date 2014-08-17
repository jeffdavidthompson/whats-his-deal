//
//  What's His Deal
//
//    by Lily George, Hannah Won and Charles Gust
//

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
}

function drag(ev) {
  // the data being dragged
  // We use "Text"
  ev.dataTransfer.setData("Text", ev.target.id);
}

function setElementView(elSwitch, bVisible) {
  if (bVisible) {
    elSwitch.style.visibility = "visible";
    elSwitch.style.display = "block";
    elSwitch.setAttribute("visibility", "visible");
    elSwitch.setAttribute("display", "block");
  } else {
    elSwitch.style.visibility = "hidden";
    elSwitch.style.display = "none";
    elSwitch.setAttribute("visibility", "hidden");
    elSwitch.setAttribute("display", "none");
  }
}

function swapMutexElements(elOld) {
  if (elOld.hasAttribute("mutexid")) {
    var elNew = document.getElementById(elOld.getAttribute("mutexid"));
    setElementView(elOld, false);
    setElementView(elNew, true);
    return elNew;
  } else {
    return elOld;
  }
}

function drop(ev) {
  // normally, the default action a web page takes for a drag
  //  made onto it is to add the item dropped. This function
  //  call turns off that default behavior.
  ev.preventDefault();
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

//
//  IIFE code to set up the page's event listeners
//
(function() {
  addDragListenersToId("textBox");
  addDragListenersToId("imgBox");
}());

