// Episode 1
//
// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();

// 'My name is Keith'

// Episode 2
//
// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());

// 3

// Episode 3
//
// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();

// 1: Ducks
// 2: Dogs
// 3: Lions

// Episode 4
//
// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

//  'Suspects include: Jay, Val, Harvey, Rick'
//  'Suspect three is: Keith'

// Episode 5
//
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());

// 'Poirot'

// Episode 6
//
// var murderer = 'rick';
//
// var outerFunction = function() {
//   var murderer = 'marc';
//
//   var innerFunction = function() {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log('the murderer is ', murderer);

// 'the murderer is '
// 'rick'

// Episode 7 - Make up your own episode/s!
//
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var murderer = "Reese";
var discovered_by = "Joo"
var murdered = {
  name: "Barney the Dinosaur",
  with: "Shovel",
  where: "Dining Room"
}

var outerFunction = function() {
  murderer = "Darren";

  var innerFunction = function() {
    murderer = "Zsolt";
  }
  var discovered_by = "Jeremy Remner"
  innerFunction();
}
murdered.name = "Batman"
murdered.with = "Candlestick"
outerFunction();
console.log(murderer + " murdered " + murdered.name + "! " + "Killed with a " + murdered.with + " in the " + murdered.where + "! " + discovered_by + " found them!");
