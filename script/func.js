function func1() {
    var name = prompt("Please enter your name:");
    alert("Your name is " + name);
    console.log("lol" + name + " What a stupid name!");
}

function func2() {
    const currentYear = 2020;
    var birthYear = prompt("Please enter your birth year:");
    alert("Your age is " + (currentYear - birthYear));
}

function func3() {
    var sqSide = prompt("Please enter square side lenght:");
    alert("Square perimeter is " + (sqSide * 4));
}

function func4() {
    var circleRadius = prompt("Please enter circle radius:");
    alert("Square perimeter is " + ((circleRadius ^ 2) * 3.14159265359));
}

function func5() {
    var distance = prompt("Please enter distance between cities:");
    var time = prompt("Please enter how much time you have:");
    alert("In order to drive " + distance + "km in "
        + time + " hours your speed must be " + (distance / time) + "km/h");
}

function func6() {
    const exchangeRate = 1.11;
    var sum = prompt("Please enter money sum in euros:");
    alert("your sum in USD " + (sum * exchangeRate));

}

function func7() {
    const fileSize = 820;
    const GBtoMB = 1024;
    var flashSize = prompt("Please enter your flash size in GB:");
    var leftSpace = (flashSize * GBtoMB) % fileSize;
    alert("you can put " + (((flashSize * GBtoMB) - leftSpace) / fileSize) +
        " file(s) and have " + leftSpace + " MB free");

}

function func8() {
    var money = prompt("Please enter how much money you can spend");
    var price = prompt("Please enter how much money one chockolate bar costs");
    var leftMoney = money % price;
    alert("you can buy " + ((money - leftMoney) / price) +
        " chockolate bars and have " + leftMoney + " money left");
}

function func9() {
    var n = prompt("Please enter your number");


    alert((n % 10) * 100 + ((n - (n % 10)) % 100) + ((n - (n % 100)) % 1000) / 100);
}

function func10() {
    const depositRate = 0.05;
    const mounths = 2;
    var sum = prompt("Please enter how much money you want to put on deposit:")
    alert("After " + mounths + " you will get " + (sum * depositRate / mounths))

}