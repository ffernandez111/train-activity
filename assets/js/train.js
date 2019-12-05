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



    // Code for Firebase data row adding in html document



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
    firstTrainTime = $("#firstTrainInput").val().trim();
    console.log(firstTrainTime)
    frequency = $("#frequencyInput").val().trim();
    console.log(frequency)


    // Code for handling the push
    firebase.database().ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        nextArrival: nextArrival,
        minutesAway: minutesAway,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

    // 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trainName = childSnapshot.val().trainName;
        var destination = childSnapshot.val().destination;
        var frequency = childSnapshot.val().frequency;
        var nextArrival = childSnapshot.val().nextArrival;
        var minutesAway = childSnapshot.val().minutesAway;

        // train Info
        console.log(trainName);
        console.log(destination);
        console.log(frequency);
        console.log(nextArrival);
        console.log(minutesAway);


        var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

        var empMonths = moment().diff(moment(empStart, "X"), "months");
        console.log(empMonths);

        var empBilled = empMonths * empRate;
        console.log(empBilled);

        // Create the new row
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(destination),
            $("<td>").text(frequency),
            $("<td>").text(nextArrival),
            $("<td>").text(empRate),
            $("<td>").text(empBilled)
        );

        // Append the new row to the table
        $("#scheduleTable > tbody").append(newRow);
    });


});