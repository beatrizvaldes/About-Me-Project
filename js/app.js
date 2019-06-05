'use strict';

var havePets = prompt('Do I have pets? (yes/no)');
console.log('Thinks that I have pets ' + havePets); 

if(havePets.toLowerCase() === "yes"){
    alert('You are right!')
}
else if (havePets.toLowerCase() === "no"){
    alert('Sorry! You are wrong');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var likeHiking = prompt('Do you think I like hiking? (yes/no)');
console.log('Thinks that I like hiking ' + likeHiking); 

if(likeHiking.toLowerCase() === "yes"){
    alert('I hate hiking, so you are wrong')
}
else if (likeHiking.toLowerCase() === "no"){
    alert('You are right, I hate hiking');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var favBand = prompt('Is The Rolling Stones the best band on Earth? (yes/no)');
console.log('Thinks The Rolling Stones is the best band on Earth ' + favBand); 

if(favBand.toLowerCase() === "yes"){
    alert('They are good, but not the best of the whoooooole world. Sorry, you are wrong')
}
else if (favBand.toLowerCase() === "no"){
    alert('Very real my friend. I don\'t think they are the best band on Earth, so you are right in this one!');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var likeSeattle = prompt('Do I like Seattle weather? (yes/no)');
console.log('Thinks I like Seattle weather ' + likeSeattle); 

if(likeSeattle.toLowerCase() === "yes"){
    alert('I love the rain, so you guessed it right!')
}
else if (likeSeattle.toLowerCase() === "no"){
    alert('Oh please! The summer here is amazing! I love Seattle weather so you are wrong!');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}


var favFood = prompt('Is pizza my favorite food? (yes/no)');
console.log('Thinks my favorite food is pizza ' + favFood); 

if(favFood.toLowerCase() === "yes"){
    alert('WROOOOONG! My favorite food is pasta!')
}
else if (favFood.toLowerCase() === "no"){
    alert('DING DING! Correct! My favorite food is pasta ');
}
else {
    alert('You didn\'t answer yes or no, so you lost a point');
}

alert('Thanks for playing!');