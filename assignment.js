

//task-1:
function kilometerToMeter(km) {
    var meterReached = km * 1000;

    return meterReached


}









//task-2:




function budgetCalculator(numberOfGhori, numberOfPhone, numberOfLaptop) {
    var ghori = 50;//50tk
    var phone = 100;//100tk
    var laptop = 500;//500tk
    var totalBudget = ((ghori * numberOfGhori) + (phone * numberOfPhone) + (laptop * numberOfLaptop));

    return totalBudget;
}














//task-3:

function hotelCost(days) {
    if (days <= 10) {
        var totalCost = days * 100;

        return totalCost;
    } else if (days <= 20) {
        var firstpart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        var totalCost = firstpart + secondPart;

        return totalCost;

    } else {
        var firstpart = 100 * 10;
        var secondPart = 80 * 10;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        var totalCost = firstpart + secondPart + thirdPart;

        return totalCost

    }


}





//task-4:

function megaFriend(frnds) {
    var max = frnds[0];
    for (var i = 0; i < frnds.length; i++) {
        var element = frnds[i];
        if (element.length > max.length) {
            max = element;
        }
    }
    return max;
}

