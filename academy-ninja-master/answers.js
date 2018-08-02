<script>
//Setting and Swapping
var myNumber = 42;
var myName = "Nayrb";
[myNumber, myName] = [myName, myNumber];
console.log(myNumber);
console.log(myName);

//Print -52 to 1066
for(var i=-52; i<=1066; i++){
	console.log(i);
}

//Don't Worry Be Happy
function beCheerful(){
	console.log("good morning!")
}
for(var i=0; i<=98; i++){
	beCheerful();
}
//Multiples of Three- but not All
for(var i = -300; i <= 0; i+ 3) {

	if(i == -3 || i == -6) {
		continue;
	}
}
console.log(i);

// Printing Integars with While from 2000 to 5280
var num = 2000
while(num < 5281){
	console.log(num);
	num++;
}

//You Say It's Your Birthday
function birthday(num1,num2){
var day = 5
var month = 1
if(num1 == day|| num1 == month){
	if(num2 == day || num2 == month){
	console.log("How did you know?")
	}
}
else 
{
	console.log("Just another day...")
}
}
birthday(7,1);

//Leap Year
function leapyear(year){
	if(year % 4 == 0 && year % 100 != 0 && year % 400 = 0){
		console.log(year + " is a leap year.")
	}
	}
	else{
		console.log(year + " is not a leap year.")
	}

leapyear(2020);

//Print and Count
for(var i = 512; i < 4097; i++){
	if(i % 5 == 0){
		console.log(i);
	}

}

//Multiples of Six
var num = 0
while(num <60001){
	num++
	if(num % 6 == 0){

		console.log(num)

	}
}

//Counting, the Dojo Way
for(var i = 1; i < 101; i++){
	if(i % 5 == 0){
		console.log("coding")
		continue;
	}
	if(i % 10 == 0){
		console.log("dojo")
		continue;
	}
	console.log(i);
}

//What Do You Know?

</script>