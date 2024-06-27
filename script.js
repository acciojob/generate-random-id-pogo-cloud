function makeid(l) {
  // write your code here
	let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = "";
    for (let i = 0; i < l; i++) {
        let index = Math.floor(Math.random() * character.length);
        str += character[index];
    }
    return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
