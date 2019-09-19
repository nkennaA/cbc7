const maxTime = 10000;
var interval;
function beginCountDown(number){
    var num = parseInt(number);
    console.log(number);
    var timePerNumber = maxTime / num;
    interval = setInterval(function(){
        document.getElementById("number").innerHTML = num;
        console.log(num);
        num -= 1;
        if(num === -1){
            console.log("num is zero");
            clearInterval(interval);
        }
    }, timePerNumber);
};
document.addEventListener("keyup", function(e){
    console.log("here")
    if(e.keyCode === 13) {
        if(interval){
            clearInterval(interval);
        }
        var thisNumber = document.getElementById("enteredNumber").value;
        document.getElementById("number").innerHTML = thisNumber.toString();
        document.getElementById("number").style.fontSize = "xx-large";
        console.log(thisNumber);
        beginCountDown(thisNumber);
    }
});