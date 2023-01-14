//if condition
// syntax
// if(condition){
// the block was ececuted	
// }
let age=parseInt(prompt("enter your age"));

if(16<=age && age<50){
	console.log( "you go the eligible");
}
else if (16>age && confirm("to sign in paraent")) {
	 
 	 console.log( "your age is eligible");
}
 else {
   console.log( "your age is not eligible");
}

//else if
// let time=parseInt(prompt("enter your time"));

// if (time>5 && time < 12) {
//   console.log( "Good morning");
// } 
// else if (time>12 && time < 15) {
//   console.log( "Good afternoon");
// } 
// else if (time>15 && time < 18) {
//   console.log( "Good evening");
// } 
// else {
//   console.log ("Good night");
// }

//switch case

// var day=2;
// 		switch(day)
// 		{ 
// 			case 1:
// 				console.log("monday")
// 			break;
			
// 			case 2:
// 				console.log("tuesday")
// 			break;
			
// 			case 3:
// 				console.log("wednesday")
// 			break;
			
// 			case 4:
// 				console.log("thusday")
// 			break;
			
// 			case 5:
// 				console.log("friday")
// 			break;
			
// 			default:
// 				console.log("my day")
// 			break;
// 		}
// 		var month=6;