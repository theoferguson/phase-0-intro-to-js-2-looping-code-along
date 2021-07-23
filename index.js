// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(gifts, event) {
    const messages = [];
    for (let c = 0; c < gifts.length; c++) {
        messages.push(`Thank you for the ${gifts[c]}, a wonderful ${event} gift!`);
        debugger;
    }
    return messages;
}

writeCards(gifts, "birthday");


function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt--);
    }
}

countDown(10);