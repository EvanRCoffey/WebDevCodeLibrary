/*This is the html for three checkboxes and their submit button

<input type="checkbox" id="id1" value="val1" checked>val1<br>
<input type="checkbox" id="id2" value="val2" checked>val2<br>
<input type="checkbox" id="id3" value="val3" checked>val3<br>

<button class="buttonClass">Submit</button><br><br>

jQuery is also needed
<!--jQuery link-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

*/

//When button is clicked, get the checkbox values
$(document).on("click", '.buttonClass', function() {
	//Variables hold true if its box was checked, false if not
	var checkbox1 = document.getElementById("id1").checked;
	var checkbox2 = document.getElementById("id2").checked;
	var checkbox3 = document.getElementById("id3").checked;
	//Holds an array of booleans for the checkbox values
	var checkboxes = [checkbox1, checkbox2, checkbox3];
}