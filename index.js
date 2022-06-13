document.querySelector('h1').innerHTML="The best Hooney that you have test"; 









var numberOfBottles = 99;
while(numberOfBottles >= 0 ){
    var bottleWord  = "bottle";
    if (numberOfBottles === 1){
        bottleWord = "bottles"
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer, ");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

   if (numberOfBottles === 0){
        console.log("No more bottles of beer into the wall")
   }
}



function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output = [];

        if(n === 1){
            output = [0];
        }else if (n === 2){
            output = [0, 1]
        }
        else{
            output = [0 , 1]

            for (var i = 2; i < n; i ++ ){
                
                output.push(output[output.length-2] + output[output.length -1]);
                
            }
        }
        
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }