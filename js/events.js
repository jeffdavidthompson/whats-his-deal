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
//  page, the DOM must be modified to overwrite the dest text
//  box with an "img" element.
//
function allowDrop(ev) {
  // normally, the default action a web page takes for a drag
  //  made onto it is to add the item dropped. This function
  //  call turns off that default behavior.
  ev.preventDefault();
}

function drag(ev) {
  // the data being dragged
  // We use "text"
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  // normally, the default action a web page takes for a drag
  //  made onto it is to add the item dropped. This function
  //  call turns off that default behavior.
  ev.preventDefault();
  var objPasted = ev.dataTransfer;
  var elTarget = ev.target;

  if(objPasted.files.length > 0) {
    // just take the first file
    var firstFile = objPasted.files[0];

    // only allow image files
    if(! firstFile.type.match("image.*")) {
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

    // check if the FileReader API is supported
    if(! window.FileReader) {
      return;
    }

    var reader = new FileReader();

    reader.onload = (function(elTarget) {
      return function(ev) {
        if( elTarget.hasAttribute("mutexid")) {
          var elVisible = document.getElementById(elTarget.getAttribute("mutexid"));

          elVisible.src = ev.target.result; // file contents are on new "ev"
          elVisible.setAttribute("visibility", "visible");
          elVisible.setAttribute("display", "block");
          elVisible.style.display = "block";

          elTarget.setAttribute("visibility","hidden");
          elTarget.setAttribute("display", "none");
          elTarget.style.display = "none";
        }
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


//
//  IIFE code to set up the page's event listeners
//
(function() {
  var elTextBox = document.getElementById("textBox");

  if(elTextBox.addEventListener) {
    elTextBox.addEventListener('dragover', allowDrop, false);
    elTextBox.addEventListener('drop', drop, false);
    elTextBox.addEventListener('dragstart', drag, false);
    }

  var elImgBox = document.getElementById("imgBox");
  if(elImgBox.addEventListener) {
    elImgBox.addEventListener('dragover', allowDrop, false);
    elImgBox.addEventListener('drop', drop, false);
    elImgBox.addEventListener('dragstart', drag, false);
  }


}());

