//
//  What's His Deal
//
//    by Lily George, Hannah Won and Charles Gust
//

function setElementView(el, bVisible) {
  if (bVisible) {
    el.style.visibility = "visible";
    el.style.display = "block";
    el.setAttribute("visibility", "visible");
    el.setAttribute("display", "block");
  } else {
    el.style.visibility = "hidden";
    el.style.display = "none";
    el.setAttribute("visibility", "hidden");
    el.setAttribute("display", "none");
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

