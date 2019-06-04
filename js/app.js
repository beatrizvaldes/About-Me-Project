'use strict';

var havePets = prompt('Do I have pets?');
console.log(havePets); 

if(havePets === "yes"){
    alert('You are right!')
}
else if (havePets === "no"){
    alert('Sorry! You are wrong');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var likeHiking = prompt('Do you think I like hiking?');
console.log(likeHiking); 

if(likeHiking === "yes"){
    alert('I hate hiking, so you are wrong')
}
else if (likeHiking === "no"){
    alert('You are right, I hate hiking');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var favBand = prompt('Is The Rolling Stones the best band on Earth?');
console.log(favBand); 

if(favBand === "yes"){
    alert('They are good, but not the best of the whoooooole world. Sorry, you are wrong')
}
else if (favBand === "no"){
    alert('Very real my friend. I don\'t think they are the best band on Earth, so you are right in this one!');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var likeSeattle = prompt('Do I like Seattle weather?');
console.log(likeSeattle); 

if(likeSeattle === "yes"){
    alert('I love the rain, so you guessed it right!')
}
else if (likeSeattle === "no"){
    alert('Oh please! The summer here is amazing! I love Seattle weather so you are wrong!');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var favFood = prompt('Is pizza my favorite food?');
console.log(favFood); 

if(favFood === "yes"){
    alert('WROOOOONG! My favorite food is pasta!')
}
else if (favFood === "no"){
    alert('DING DING! Correct! My favorite food is pasta ');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}

alert('Thanks for playing!');