AOS.init();

let heaerVisible = false;
document.getElementById("menu").addEventListener("click", function(){

    if(heaerVisible === false) {
        document.getElementById("header").style.height = "220px";
        heaerVisible = true;
    }

    else {
        document.getElementById("header").style.height = "50px";
        heaerVisible = false;
    }
});