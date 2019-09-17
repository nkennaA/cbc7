
var groveryObject = {
    inventory : {},
    fillArray : function() {
        this.inventory["water"] = 100,
        this.inventory["soda"] = 100,
        this.inventory["detergent"] = 50,
        this.inventory["apple"] = 100,
        this.inventory["banana"] = 100,
        this.inventory["tomato"] = 100,
        this.inventory["bread"] = 50,
        this.inventory["butter"] = 50,
        this.inventory["milk"] = 50,
        this.inventory["chicken"] = 50;
    },
    addToInventory : function(itmesArray, numbersArray) {
        //put the list of items you want to increase their inventory in an array, 
        //and the number of items you wish to add in the same order
        if (itmesArray.length != numbersArray.length) {
            console.log("Items array and numbers array must be the same length so the numbers match the items");
            return;
        }
        for(var i = 0; i < numbersArray.length; i++) {
            if(!(itmesArray[i] in this.inventory)) {
                console.log(itmesArray[i] + " ßis not an item in our inventory");
                return;
            } else {
                this.inventory[itmesArray[i]] += numbersArray[i];
            }
        }
        for(let item in this.inventory) {
            console.log(item + ":" + this.inventory[item]);
        }
        return this.inventory;
    },
    subtractFromInventory : function(itmesArray, numbersArray) {
        //put the list of items you want to increase their inventory in an array, 
        //and the number of items you wish to add in the same order
        if (itmesArray.length != numbersArray.length) {
            console.log("Items array and numbers array must be the same length so the numbers match the items");
            return;
        }
        for(var i = 0; i < numbersArray.length; i++) {
            if(!(itmesArray[i] in this.inventory)) {
                console.log(itmesArray[i] + " is not an item in our inventory");
                return;
            } else {
                this.inventory[itmesArray[i]] = this.inventory[itmesArray[i]] - numbersArray[i];
                if(this.inventory[itmesArray[i]] <= 0) {
                    var leftOvers = this.inventory[itmesArray[i]]*-1;
                    this.inventory[itmesArray[i]] = 0;
                    console.log("You could only buy " + (numbersArray[i] - leftOvers) + "\n" + itmesArray[i] + "s. " + itmesArray[i]+"s are now out of stock.");
                }
            }
        }
        for(let item in this.inventory) {
            console.log(item + ":" + this.inventory[item]);
        }
        return this.inventory;
    },
    alertOutOfStock : function() {
        for(let item in this.inventory) {
            if(this.inventory[item] === 0) {
                console.log(item + "s are out of stock!")
            }
        }
    }
};

groveryObject.fillArray();

let convert = {
    groceries : groveryObject 
};

module.exports = convert;