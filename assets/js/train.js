$(document).ready(function() {



    //Setting Variables

    var destination;

    var nextTrainName;

    var lastTrainName;

    var newTrainTime;

    var lastTrainTime;

    var frequency;

    var minutesAway;







    //current time display function (moment.js)



    // Code for uploading new train data to the database



    // Code for Friebase data row adding in html document



    //code for submit button new train info search


})


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-YKhfPEy-Ok3RQzp2zJSCFuv2x13vH4c",
    authDomain: "bootcamp-fa86c.firebaseapp.com",
    databaseURL: "https://bootcamp-fa86c.firebaseio.com",
    projectId: "bootcamp-fa86c",
    storageBucket: "bootcamp-fa86c.appspot.com",
    messagingSenderId: "86878239138",
    appId: "1:86878239138:web:33ebf0d7896043ea4f9afb",
    measurementId: "G-DRB3ZRKH7Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var destination = "";
var nextTrainName = "";
var lastTrainName = "";
var newTrainName = "";
var lastTrainName = "";
var frequency = "";
var minutesAway = "";


// Capture Button Click
$("#submitButton").on("click", function(event) {
    event.preventDefault();
    console.log(this)
        // Grabbed values from text boxes
    trainName = $("#trainNameInput").val().trim();
    console.log(trainName)
    destination = $("#destinationInput").val().trim();
    console.log(destination)
    firstTrainTime = $("#firstTrainTimeInput").val().trim();
    console.log(firstTrainName)
    frequency = $("#frequencyInput").val().trim();
    console.log(frequency)


    // Code for handling the push
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});