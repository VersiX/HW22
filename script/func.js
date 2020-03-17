function func1() {
    let name = prompt("Please enter your name:");
    console.log("hahahaha " + name + " What a stupid name! lol");
    alert("Hello " + name);

}

function func2() {
    const currentYear = 2020;
    let birthYear = prompt("Please enter your birth year:");
    alert("Your age is " + (currentYear - birthYear));
}

function func3() {
    let sqSide = prompt("Please enter square side lenght:");
    alert("Square perimeter is " + (sqSide * 4));
}

function func4() {
    let circleRadius = prompt("Please enter circle radius:");
    alert("Circle lenght is " + ((circleRadius ^ 2) * Math.PI));
}

function func5() {
    let distance = prompt("Please enter distance between cities:");
    let time = prompt("Please enter how much time you have:");
    alert("In order to drive " + distance + "km in "
        + time + " hours your speed must be " + (distance / time) + "km/h");
}

function func6() {
    const exchangeRate = 1.11;
    let sum = prompt("Please enter money sum in euros:");
    alert("your sum in USD " + (sum * exchangeRate));

}

function func7() {
    const fileSize = 820;
    const GBtoMB = 1024;
    let flashSize = prompt("Please enter your flash size in GB:");
    let leftSpace = (flashSize * GBtoMB) % fileSize;
    alert("you can put " + (((flashSize * GBtoMB) - leftSpace) / fileSize) +
        " file(s) and have " + leftSpace + " MB free");

}

function func8() {
    let money = prompt("Please enter how much money you can spend");
    let price = prompt("Please enter how much money one chockolate bar costs");
    let leftMoney = money % price;
    alert("you can buy " + ((money - leftMoney) / price) +
        " chockolate bars and have " + leftMoney + " money left");
}

function func9() {
    let n = prompt("Please enter your number");


    alert((n % 10) * 100 + ((n - (n % 10)) % 100) + ((n - (n % 100)) % 1000) / 100);
}

function func10() {
    const depositRate = 0.05;
    const mounths = 2;
    let sum = prompt("Please enter how much money you want to put on deposit:")
    alert("After " + mounths + " you will get " + (sum * depositRate / mounths))

}