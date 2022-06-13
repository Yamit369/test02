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
