function rndGen(max,min){
 return (Math.floor(Math.random() * (max-min+1) ) + min);
}
function askNum(){
  var x = parseInt(prompt("max"), 10);
  var y = parseInt(prompt("min"), 10);
  var rnd = rndGen(x,y); //the rand as a variable is for adding onto function quickly
  document.getElementById("result").innerHTML = rnd;
}   /* this link was for when I was trying to get askNum to work,
https://www.w3schools.com/code/tryit.asp?filename=G7GE6A5W7JNF  */
var task=[];
task[1]="Circuits";
task[2]="Probability";
task[3]="Calc";
task[4]="Chem";
task[5]="Physics";
task[6]="Java";
function rndTask(){
var n = rndGen(6,1);
alert("You should do " + task[n]);
}
//function changeTasks(){}
//this function should let you change the task though prompts if possible
//find out if this is possible

