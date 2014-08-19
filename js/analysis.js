
//	http://stackoverflow.com/questions/767759/occurrences-of-substring-in-a-string

//inputString = "hey gurl wutz up :)";

countEmotes = function() {
	var inputString = document.getElementById("textBox").value;
	targetString = ":)";
	alert(inputString.split(targetString, -1).length-1);
}





