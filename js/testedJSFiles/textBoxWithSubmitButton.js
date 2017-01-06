/*This is the html for a textbox and its submit button

Please enter your text here:<br>
<input type="text" id="textBox"><br>
<button class="textBox"()">Submit</button><br><br>

*/

//Load value from text, then log it
$(document).on("click", '.textBox', function() {
	var x = document.getElementById("textBox").value;
	console.log("Value = " + x);
})