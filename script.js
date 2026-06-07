// دالة (Function) بتشتغل لما المستخدم يغير اختياره (دجاج أو لحمة)
function checkMeatType() {
    // بنجيب القائمة اللي اختار منها المستخدم
    var serviceSelect = document.getElementById("service");
    
    // بنجيب الديف (Box) اللي فيه خيارات اللحمة (بلدي/روماني)
    var meatOptions = document.getElementById("meat-options");
    
    // جملة شرطية بسيطة: إذا اختار "لحمة" بنظهر الخيارات، غير هيك بنخفيها
    if (serviceSelect.value === "meat") {
        meatOptions.style.display = "block"; // block يعني إظهار
    } else {
        meatOptions.style.display = "none";  // none يعني إخفاء
    }
}