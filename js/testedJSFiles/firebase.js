///////////////////////////////////////////////////////////////

/*HTML for Firebase Javascript Link

<script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>

*/

//Initialize Firebase - get this info from Firebase
var config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	storageBucket: "",
	messagingSenderId: ""
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

//Store variableName in a JSON property called JSONPropertyName
database.ref().set({
    JSONPropertyName: variableName
});

//Replace ".set({})" with ".push({})" to add new entries instead of overwriting the original

///////////////////////////////////////////////////////////////

//loads values from firebase into variables for use in javascript
database.ref().on('child_added', function(snapshot) {
	
    var data = snapshot.val();
    var var1 = data.var1;
    var var2 = data.var2;
    var var3 = data.var3;
    //etc...
}