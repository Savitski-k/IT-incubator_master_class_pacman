
let x = 1;
let y = 1;
let deltaX = 1;
let deltaY = 0;

let appleX = 1;
let appleY = 3;

let counter = 0;


window.onkeypress = function () {

    if (event.key === "w") {

        deltaX = 0;
        deltaY = -1;

    }

    if (event.key === "d") {
        deltaX = 1;
        deltaY = 0;

    }

    if (event.key === "a") {
        deltaX = -1;
        deltaY = 0;

    }

    if (event.key === "s") {
        deltaX = 0;
        deltaY = 1;
    }
    tickLogic();
}

let tickLogic = function () {

    let newX = x + deltaX;
    let newY = y + deltaY;


    if (newX < 4 && newX > 0) {
        x = newX;
    }

    if (newY < 4 && newY > 0) {
        y = newY;
    }

    if (x === appleX && y === appleY) {
        counter++;
        score.innerText = counter;
        while (appleX === x && appleY === y) {
            appleX = Math.floor(Math.random() * 3) + 1;
            appleY = Math.floor(Math.random() * 3) + 1;
        }

        let nextAppleStep = "x" + appleX + "y" + appleY;
        window[nextAppleStep].append(apple);

    }

    let nextStep = "x" + x + "y" + y;
    window[nextStep].append(pacman);

}

