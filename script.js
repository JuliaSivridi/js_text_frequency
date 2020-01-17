$(function (){
	$('body').append('<div id="source"><textarea id="unsorted" cols=96 rows=12 value=""></textarea><br />'
		+'<button onclick="make()">&nbsp;&nbsp;go!&nbsp;&nbsp;</button></div>'
		+'<div id="result"></div>');
});

function make() {
	var unsorted = document.getElementById("unsorted").value;
	if (!unsorted) return;
	var sorted = unsorted.split(",").join("").split(".").join("").split(" ").sort();
	var words = [];
	for (i = 0; i < sorted.length; i++) {
		if (words[sorted[i]] === undefined) words[sorted[i]] = 0;
		words[sorted[i]] += 1;
	}
	var result = "<table><tr>";
	var brk = 0;
	for (let word in words) {
		result += "<td>"+ word +"<td>"+ words[word];
		brk += 1;
		if (brk % 6 == 0) result += "<tr>";
	} result += "</table>";
	$("#result").html("").append(result);
}