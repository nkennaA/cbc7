var inventory = {};
let convert = {};
convert.fillArray = function() {
    inventory["water"] = 100,
    inventory["soda"] = 100,
    inventory["detergent"] = 50,
    inventory["apple"] = 100,
    inventory["banana"] = 100,
    inventory["tomato"] = 100,
    inventory["bread"] = 50,
    inventory["butter"] = 50,
    inventory["milk"] = 50,
    inventory["chicken"] = 50;
};
convert.fillArray();
convert.addToInventory = function(itmesArray, numbersArray) {
    //put the list of items you want to increase their inventory in an array, 
    //and the number of items you wish to add in the same order
    if (itmesArray.length != numbersArray.length) {
        console.log("Items array and numbers array must be the same length so the numbers match the items");
        return;
    }
    for(var i = 0; i < numbersArray.length; i++) {
        if(!(itmesArray[i] in inventory)) {
            console.log(itmesArray[i] + " ßis not an item in our inventory");
            return;
        } else {
            inventory[itmesArray[i]] += numbersArray[i];
        }
    }
    for(let item in inventory) {
        console.log(item + ":" + inventory[item]);
    }
    return inventory;
}

convert.subtractFromInventory = function(itmesArray, numbersArray) {
    //put the list of items you want to increase their inventory in an array, 
    //and the number of items you wish to add in the same order
    if (itmesArray.length != numbersArray.length) {
        console.log("Items array and numbers array must be the same length so the numbers match the items");
        return;
    }
    for(var i = 0; i < numbersArray.length; i++) {
        if(!(itmesArray[i] in inventory)) {
            console.log(itmesArray[i] + " is not an item in our inventory");
            return;
        } else {
            inventory[itmesArray[i]] = inventory[itmesArray[i]] - numbersArray[i];
            if(inventory[itmesArray[i]] <= 0) {
                var leftOvers = inventory[itmesArray[i]]*-1;
                inventory[itmesArray[i]] = 0;
                console.log("You could only buy " + (numbersArray[i] - leftOvers) + "\n" + itmesArray[i] + "s. " + itmesArray[i]+"s are now out of stock.");
            }
        }
    }
    for(let item in inventory) {
        console.log(item + ":" + inventory[item]);
    }
    return inventory;
}

function alertOutOfStock() {
    for(let item in inventory) {
        if(inventory[item] === 0) {
            console.log(item + "s are out of stock!")
        }
    }
}

module.exports = convert;