function checkMeatType() {
    var serviceSelect = document.getElementById("service");
    
    var meatOptions = document.getElementById("meat-options");
    
    if (serviceSelect.value === "meat") {
        meatOptions.style.display = "block"; 
    } else {
        meatOptions.style.display = "none";     
    }
}
