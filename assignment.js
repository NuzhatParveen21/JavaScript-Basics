// https://github.com/NuzhatParveen21/JavaScript-Basics

// Problem-1: kilometerToMeter

function kilometerToMeter(kilometer) {

    // Alert for negative value
    if (kilometer == 0 || kilometer == null || kilometer < 0) {
        return "Distance can't be negative, string 0 or null."
    }
    var meter = kilometer * 1000;   //converting distance into meter
    return meter;
}
var meter1 = kilometerToMeter(0.6);
console.log(meter1);


// Problem-2: budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    // Alert for null value
    if (watch, mobile, laptop == null) {
        return "Product quantity can't be null"
    }

    // Declare the cost of each products, given the value of price
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;

    // Calcualte total cost of electronics
    var totalCost = (watchCost + mobileCost + laptopCost);
    return totalCost;
}

var watch = 8;
var mobile = 6;
var laptop = 2;
var sum = budgetCalculator(8, 6, 2);
console.log(sum);


// Problem-3: hotelCost

function hotelCost(days) {
    // Alert for less than 1 day
    if (days < 1) {
        return "Days can't be less than 1";
    }
    var totalCost = 0;

    // Calculation of total hotel cost from 1st-10th days
    if (days <= 10) {
        totalCost = days * 100;
    }

    // Calcualtion for total hotel cost from 11th -20th days
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }

    // Calculation for total hotel cost from 21st to rest of the days
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}

var count = hotelCost(22);
console.log(count);


// Problem:4 - megaFriend

function megaFriend(string, index){
    if (index == 0){
        longestWord = string;
    } else{
        if(string.length > longestWord.length){
            longestWord = string;
        }
    }
}
var names = ['Taz', 'Sumaiya', 'Tumpa', 'Shorna', 'Ruba'];
var longestWord = null;
names.forEach(megaFriend)
console.log(longestWord);


