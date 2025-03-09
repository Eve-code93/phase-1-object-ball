console.log('Simple debugging example running.');

debugger; // Execution will pause here if you are debugging

let x = 99;
debugger;
console.log(x);

// Define the function BEFORE calling it
function gameObject() {
    return { name: "Chess", type: "Board Game" };
}

console.log(gameObject()); // Now this will work

debugger;
