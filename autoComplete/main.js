var finalPetString;
const originalSubmitString = document.getElementById("suggestedBox").innerHTML;
function compareString(e) {
    var petsList = ["cats", "dogs", "penguins"]
    var currentPetString = document.getElementById("petBox").value;
    if (e.keyCode === 13) {
        return;
    } else {
        for (var i = 0; i < 3; i++) {
            var pet = petsList[i];
            if (currentPetString == pet.slice(0, currentPetString.length) && currentPetString.length > 0) {
                finalPetString = pet;
                break;
            }
        }
        if (finalPetString) {
            document.getElementById("suggestedBox").innerHTML = originalSubmitString + finalPetString;
        } else {
            document.getElementById("suggestedBox").innerHTML = originalSubmitString + "no pets from list suggested";
        }
    }
}
document.addEventListener("keyup", function(e) {
    compareString(e);
});

document.getElementById("suggestedBox").addEventListener("click", function(){
    if(finalPetString){
        document.getElementById("petBox").value = finalPetString;
    }
});