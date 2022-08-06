document.querySelector('h1').innerHTML="The best Hooney that you have test"; 


//document.getElementsByTagName("") -- it give back a ray of elements - like in a list, so you cannot apply properties
//document.getElementsByTagName("li")[1].style.color = "orange"; --this one will change the collor since where choosing an element from the array 

//document.getElemnetsByClassName("btn"); -- this one is in plural for that reon it is going to giveme back an array
//document.getElementById("title"); -- this is one so it is just as element
//document.querySelector() -- tis is more especifique
//document.queryselector("#title"); -- this is similar as we choose elements in css
//document.queryselector(" li a"); -- this case we are selecting something very specifique a link that has an ancher link 
//document.queryselectorAll("#list .item"); - in this way we are selecting all the elements that suficcies that query 
//document.queryselectorAll("#list .item"); -because it chooses a group - it gives back a list 


//document.querySelector("button").classList.add("invisible"); here the invisible class is added that you need to make in CSS
//document.querySelector("button").classList.remove("invisible"); here we are taking away that class 
//document.querySelector("button").classList.toggle("invisible");here the classs will toggle depending if it is class is alredy apply or not
// for the style of somenthig we can go to CSS and for the behavour is the JS





// var numberOfBottles = 99;
// while(numberOfBottles >= 0 ){
//     var bottleWord  = "bottle";
//     if (numberOfBottles === 1){
//         bottleWord = "bottles"
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer, ");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

//    if (numberOfBottles === 0){
//         console.log("No more bottles of beer into the wall")
//    }
// }



// function fibonacciGenerator (n) {
//     //Do NOT change any of the code above 👆
        
//         //Write your code here:
//         var output = [];

//         if(n === 1){
//             output = [0];
//         }else if (n === 2){
//             output = [0, 1]
//         }
//         else{
//             output = [0 , 1]

//             for (var i = 2; i < n; i ++ ){
                
//                 output.push(output[output.length-2] + output[output.length -1]);
                
//             }
//         }
        
        
        
        
        
        
        
//         //Return an array of fibonacci numbers starting from 0.
        
//     //Do NOT change any of the code below 👇
//     }