// Problem-1: kilometerToMeter

function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var meter1 = kilometerToMeter (0.6);
console.log(meter1);


// Problem-2: budgetCalculator

function budgetCalculator(watch, mobile, laptop){
    
    // Declare the cost of each products, given the value of price
    var watchCost = watch * 50;   
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;

    // Calcualte total cost of electronics
    var totalCost= (watchCost + mobileCost + laptopCost);
    return totalCost;
}

var watch= 8;
var mobile = 6;
var laptop = 2;
var sum = budgetCalculator(8, 8, 2);
console.log(sum);


// Problem-3: hotelCost

function hotelCost(days) {

    var totalCost = 0;
    if (days <=10) {
    totalCost = days * 100;
    }
    else if (days <= 20){
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondPart= remaining * 80;
    totalCost = firstPart + secondPart;
    }
    else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}

var count = hotelCost(15);
console.log(count);


// Problem:4 - megaFriend

var friends = ['Taz', 'Sumaiya', 'Tumpa', 'Shorna', 'Ruba'];
var maxWord = friends[0];

function megaFriends(){
    for (var i=1; i < friends.length; i++){
        var element = friends[i];
        if (element.length > maxWord.length){
            maxWord = element;
        }
        return maxWord;
    }
}
var largestName = megaFriends(friends);
console.log(largestName);


