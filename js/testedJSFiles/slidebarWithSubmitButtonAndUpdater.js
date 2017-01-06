/*This is the html for a slidebar with its submit button

<input type="range" min="1" max="100" value="1" step="1" class="slidebarClassName" onchange="showValue(this.value)"/>
<span id="spanID">Put initial message here. </span>
<button class="buttonClassName">Submit</button><br><br>

*/

//Load value from slide bar
$(document).on("click", '.buttonClassName', function() {
	var value = $(".slidebarClassName").val();
	console.log("Value = " + value);
})

//Display current value of slidebar
function showValue(newValue) {
	document.getElementById("spanID").innerHTML="Updated Value: " + newValue + " ";
}