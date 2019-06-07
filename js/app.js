'use strict';

function askName() {
  return prompt('Are you ready to play a game? First of all, tell me your name');
}

var userName = askName();

var correctAnswers = 0; // this number is going to be increased every time the code of winning a point runs

// First question

function testQuestion(question) {
  if (question()) {
    correctAnswers++;
  }
}

testQuestion(question1);
testQuestion(question2);
testQuestion(question3);
testQuestion(question4);
testQuestion(question5);

function question1() {
  var havePets = prompt('Do I have pets? (yes/no)');
  console.log('Thinks that I have pets ' + havePets);

  if (havePets.toLowerCase() === 'yes'){
    alert('You are right!');
  }
  else if (havePets.toLowerCase() === 'no'){
    alert('Sorry! You are wrong');
  }
  else {
    alert('You didn\'t answer yes or no, so you lost a point');
  }

  return (havePets.toLowerCase() === 'yes');
}

// Second Question

function question2() {
  var likeHiking = prompt('Do you think I like hiking? (yes/no)');
  console.log('Thinks that I like hiking ' + likeHiking);

  if(likeHiking.toLowerCase() === 'yes'){
    alert('I hate hiking, so you are wrong');
  }
  else if (likeHiking.toLowerCase() === 'no'){
    alert('You are right, I hate hiking');
  }
  else {
    alert('You didn\'t answer yes or no, so you lost a point');
  }

  return (likeHiking.toLowerCase() === 'no');
}

// Third Question

function question3() {
  var favBand = prompt('Is The Rolling Stones the best band on Earth? (yes/no)');
  console.log('Thinks The Rolling Stones is the best band on Earth ' + favBand);

  if(favBand.toLowerCase() === 'yes'){
    alert('They are good, but not the best of the whoooooole world. Sorry, you are wrong');
  }
  else if (favBand.toLowerCase() === 'no'){
    alert('Very real my friend. I don\'t think they are the best band on Earth, so you are right in this one!');
  }
  else {
    alert('You didn\'t answer yes or no, so you lost a point');
  }

  return (favBand.toLowerCase() === 'no');
}

// Fourth Question

function question4() {
  var likeSeattle = prompt('Do I like Seattle weather? (yes/no)');
  console.log('Thinks I like Seattle weather ' + likeSeattle);

  if(likeSeattle.toLowerCase() === 'yes'){
    alert('I love the rain, so you guessed it right!');
  }
  else if (likeSeattle.toLowerCase() === 'no'){
    alert('Oh please! The summer here is amazing! I love Seattle weather so you are wrong!');
  }
  else {
    alert('You didn\'t answer yes or no, so you lost a point');
  }

  return (likeSeattle.toLowerCase() === 'yes');
}

// Fifth Question

function question5() {
  var favFood = prompt('Is pizza my favorite food? (yes/no)');
  console.log('Thinks my favorite food is pizza ' + favFood);

  if(favFood.toLowerCase() === 'yes'){
    alert('WROOOOONG! My favorite food is pasta!');
  }
  else if (favFood.toLowerCase() === 'no'){
    alert('DING DING! Correct! My favorite food is pasta ');
  }
  else {
    alert('You didn\'t answer yes or no, so you lost a point');
  }

  return (favFood.toLowerCase() === 'no');
}

// Sixth Question

var guesses = 0;
var numAttempts = 3;
var countriesLived = Math.round(Math.random() * 10) + 1; // The +1 is in case the random rounds to 0. Can't be 0 countries
var countriesAnswer = prompt('In how many countries have I lived in?');

while(guesses !== numAttempts || countriesAnswer === countriesLived){
  if(countriesAnswer < countriesLived){
    countriesAnswer = prompt('Too low! In how many countries have I lived in? (' + (numAttempts-guesses)+ ' attempts left)');
  }
  else if(countriesAnswer > countriesLived){
    countriesAnswer = prompt('Too hi! In how many countries have I lived in? (' + (numAttempts-guesses)+ ' attempts left)');
  }

  if(parseInt(countriesAnswer) === countriesLived){ // parseInt turns the string in the input into a number so it can be evaluated
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

alert('Thanks for playing ' + userName + '! You got ' + correctAnswers + ' out of 7 questions correct!');
