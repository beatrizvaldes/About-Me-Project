'use strict';

var askName = prompt('Are you ready to play a game? First of all, tell me your name');
var correctAnswers = 0;

// First question

var havePets = prompt('Do I have pets? (yes/no)');
console.log('Thinks that I have pets ' + havePets);

if(havePets.toLowerCase() === 'yes'){
  alert('You are right!');
  correctAnswers++;
}
else if (havePets.toLowerCase() === 'no'){
  alert('Sorry! You are wrong');
}
else {
  alert('You didn\'t answer yes or no, so you lost a point');
}

// Second Question

var likeHiking = prompt('Do you think I like hiking? (yes/no)');
console.log('Thinks that I like hiking ' + likeHiking);

if(likeHiking.toLowerCase() === 'yes'){
  alert('I hate hiking, so you are wrong');
}
else if (likeHiking.toLowerCase() === 'no'){
  alert('You are right, I hate hiking');
  correctAnswers++;
}
else {
  alert('You didn\'t answer yes or no, so you lost a point');
}

// Third Question

var favBand = prompt('Is The Rolling Stones the best band on Earth? (yes/no)');
console.log('Thinks The Rolling Stones is the best band on Earth ' + favBand);

if(favBand.toLowerCase() === 'yes'){
  alert('They are good, but not the best of the whoooooole world. Sorry, you are wrong');
}
else if (favBand.toLowerCase() === 'no'){
  alert('Very real my friend. I don\'t think they are the best band on Earth, so you are right in this one!');
  correctAnswers++;
}
else {
  alert('You didn\'t answer yes or no, so you lost a point');
}

// Fourth Question

var likeSeattle = prompt('Do I like Seattle weather? (yes/no)');
console.log('Thinks I like Seattle weather ' + likeSeattle);

if(likeSeattle.toLowerCase() === 'yes'){
  alert('I love the rain, so you guessed it right!');
  correctAnswers++;
}
else if (likeSeattle.toLowerCase() === 'no'){
  alert('Oh please! The summer here is amazing! I love Seattle weather so you are wrong!');
}
else {
  alert('You didn\'t answer yes or no, so you lost a point');
}

// Fifth Question

var favFood = prompt('Is pizza my favorite food? (yes/no)');
console.log('Thinks my favorite food is pizza ' + favFood);

if(favFood.toLowerCase() === 'yes'){
  alert('WROOOOONG! My favorite food is pasta!');
}
else if (favFood.toLowerCase() === 'no'){
  alert('DING DING! Correct! My favorite food is pasta ');
  correctAnswers++;
}
else {
  alert('You didn\'t answer yes or no, so you lost a point');
}

// Sixth Question

var guesses = 0;
var numAttempts = 3;
var countriesLived = Math.round(Math.random() * 10) + 1;
var countriesAnswer = prompt('In how many countries have I lived in?');

while(guesses !== numAttempts || countriesAnswer === countriesLived){
  if(countriesAnswer < countriesLived){
    countriesAnswer = prompt('Too low! In how many countries have I lived in? (' + (numAttempts-guesses)+ ' attempts left)');
  }
  else if(countriesAnswer > countriesLived){
    countriesAnswer = prompt('Too hi! In how many countries have I lived in? (' + (numAttempts-guesses)+ ' attempts left)');
  }

  if(parseInt(countriesAnswer) === countriesLived){
    alert('You guessed!');
    correctAnswers++;
    break;
  }

  guesses++;
}
console.log('This person thinks I have lived in ' + countriesAnswer + 'countries');


// Seventh question

var catNames = ['chiri', 'tuya'];
var catGuesses = 0;
var catAttempts = 6;
var catAnswer = '';

while(catGuesses !== catAttempts) {
  catAnswer = prompt('What is the name of one of my cats? (' + (catAttempts-catGuesses)+ ' attempts left)');

  if (catNames.includes(catAnswer.toLowerCase())) {
    alert('YAY!');
    correctAnswers++;
    break;
  }

  catGuesses++;

  if (catGuesses === catAttempts) {
    alert('Nooo, so sad! My cats are: ' + catNames.join(' & '));
    break;
  }
}
console.log('This person thinks my cat name is ' + catAnswer);

alert('Thanks for playing ' + askName + '! You got ' + correctAnswers + ' out of 7 questions correct!');
