///////////////////////////////////////////////////////////////

/*HTML for Firebase Javascript Link

<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>

*/

//Initialize Firebase
var config = {
	apiKey: "AIzaSyCv0S2EdbATulqYjCFBKIOzHx9qrlIqujw",
	authDomain: "first-firebase-project-b8ab1.firebaseapp.com",
	databaseURL: "https://first-firebase-project-b8ab1.firebaseio.com",
	storageBucket: "first-firebase-project-b8ab1.appspot.com",
	messagingSenderId: "616419121369"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

//Store variableName in a JSON property called JSONPropertyName
database.ref().set({
    JSONPropertyName: variableName
});

///////////////////////////////////////////////////////////////
