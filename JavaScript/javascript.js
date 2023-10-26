

function predict() {
    let num = document.getElementById("inputBox");
    let randomNum = Math.floor((Math.random()*10)+1);
    let winner = document.getElementById("result");
    let randomNumberShow = document.getElementById("random");


    let enteredNum = num.value;

    if(randomNum==enteredNum) {
        result.textContent = "Right";
    }
    else {
        result.textContent = "Wrong";
    }
    randomNumberShow.textContent = "Random Number is " + randomNum;
} 