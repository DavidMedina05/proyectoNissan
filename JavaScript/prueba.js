let input;
let act = [];

input = prompt("Welcome!!, (Type anything to start or type 'q' or 'quit' to exit)");
while (input !== 'q' && input !== 'quit') {
    input = prompt("What would you like to do? (Type new, list, delete or 'quit'");

    switch (input) {
        case 'new':
            let guess = prompt("write the activities you want to do:");
            act.push(guess);
            break;
        case 'list':
            for (let i = 0; i < act.length; i++) {
                console.log(`${i} : ${act[i]}`);
            }
            break;
        case 'delete':
            const clear = parseInt(prompt("write the item that you want to delete"));
            act.splice(clear, 1);
            console.log(clear, "has been deleted");
            break;
        case 'quit':
        case 'q':
            console.log("goodbye!!");
            break;
        default:
            console.log("invalid action");
            break;
    }
}
console.log("OK, YOU QUIT!");
