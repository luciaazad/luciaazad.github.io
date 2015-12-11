var myAlert = alert("You are now to view my assignment!");
console.log(myAlert);

function addBoth(){
  var okay = alert("Sorry, I have decided to use both cinnamon AND butter.");
}


function addWords(){
  var other = alert("Good stuff right there!");
}


var lesson = new Array();

lesson[0] = "You are now a master";
lesson[1] = "Go ahead and fight";
lesson[2] = "Here is a rose for your trouble";
lesson[3] = "Good luck";

var length = lesson.length;

console.log(length);

for(count=0; count < length; count+=1){
  console.log(lesson[count]);
}

var left = 10;
var right = 5;

if(left == 100){
  console.log("Good One");
}
if(left != 10){
  console.log("Excellent");
}
else{
  console.log("Alright");
}

var dogs;

var dogs = 5
var dogs = dogs+5

console.log(dogs);
