let convert = require('./main.js');
var assert = require('assert');

describe('changing inventory tests', function(){
    describe('addition test', function(){
        it('should be 150 when adding 50 to apple and banana', function(){
            var myInventory = convert.addToInventory(["apple", "banana"], [50, 50]);
            assert.equal(150, myInventory["apple"]);
        });
    });
    describe('subtraction test', function(){
        convert.fillArray();
        var myInventory2 = convert.subtractFromInventory(["water", "milk", "chicken"], [70, 70, 49]);
        it('should be 30 when subtracting 70 from water, 0 subtracting 70 from milk, \n and 1 subtracting 49 from chicken', function(){
            assert.equal(30, myInventory2["water"]);
            assert.equal(0, myInventory2["milk"]);
            assert.equal(1, myInventory2["chicken"]);
         });
    });
});
