/*
Haley Yerxa
04/29/2019
Greeting
Creates a greeting depending on time of day
*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';

} else if (hourNow > 12) {
    greeting = 'Good afternoon!';

} else if (hourNow > 0) {
    greeting = 'Good morning!';

} else {
    greeting = '';
}

document.getElementById('greeting').innerHTML = greeting + " Welcome to my website! Here you can find all you need to know about me."; // adds greeting to HTML element