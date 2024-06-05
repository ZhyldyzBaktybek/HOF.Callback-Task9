//Callback function which is linked to "index.html" file

//Settle variables to hold the intervalID
//and also a counter
let intervalID;
let counter = 0;

//Function to start the counter
let startCounter  = function() {
    intervalID = setInterval(() => {
        counter++;
        console.log(counter);
        //Using setTimeout to increment counter by 1 second
    }, 1000 );
};

//Stop counter function is to clear the interval
function stopCounter() {
    clearInterval(intervalID);
    //intervalID is undefinied to indicate that the counter is stopped
    intervalID = undefined;
    console.log("Counter stopped.");
};

//setting variables for buttons in order to run either functions
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

//Attach click event listeners to the "start" button
startButton
.addEventListener("click", startCounter);
//Attach click event listeners to the "stop" button
stopButton
.addEventListener("click", stopCounter);
