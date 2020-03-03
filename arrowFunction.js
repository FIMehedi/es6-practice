// Without parameter & single expression
const name = () => "Fokrul Islam Mehedi";
console.log(name());

// single parameter & single expression
const doubleIt = num => num * 2;
console.log(doubleIt(12));


// Multi parameter & single expression
const add = (x, y) => x + y;
console.log(add(3, 4));

// Multi parameter & multi expression
const Math = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
}
console.log(Math(5, 2));

