function birthDayWish(friendName = "Friend") {
   return `Happy Birth Day to you ${friendName}!`;
    
}

console.log(birthDayWish());

let name = "Fokrul Islam Mehedi"

function profileName(name) {
    if (name.length < 10) {
        return name;
    } else {
        return name.slice(0,10) + "...";
    }
}

console.log(profileName(name));
