
let input = prompt("Welcome! (Type anything to star or 'q' to quit)");
let act = [];

while (input !== 'q') {
    input = prompt("What would you like to do?");
    if (input === 'new') {
        let guess = prompt("write the activities you want to do:");
        act.push(guess);
    } else if (input === 'list') {
        for (let i = 0; i < act.length; i++) {
            console.log(`${i} : ${act[i]}`);
        }
    } else if (input === 'delete'){ 
        const clear = parseInt(prompt("write the item that you want to delete"));
        act.splice(clear, 1);
        console.log(clear,"has been deleted");
    } else if (input === 'quit') {
        console.log("goodbye!!")
        break;
    } else {
        console.log("invalid action")
    }
}
console.log("OK, YOU QUIT!")
