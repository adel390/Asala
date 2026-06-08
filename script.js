function checkMeatType() {
    
    var serviceSelect = document.getElementById("service");
    
   
    var meatOptions = document.getElementById("meat-options");

    var drinkChoice = document.getElementById("drink-choice");

     var drinklist = document.getElementById("drink-list");
    
    
    if (serviceSelect.value === "meat") {
        meatOptions.style.display = "block"; 
    } else {
        meatOptions.style.display = "none";  
    }
    }
    function checkDrinkType() {

var drinkChoice = document.getElementById("drink-choice");

     var drinklist = document.getElementById("drink-list");


      if (drinkChoice.value === "yes") {
        drinklist.style.display = "block"; 
    } else {
        drinklist.style.display = "none";  
    }
}
