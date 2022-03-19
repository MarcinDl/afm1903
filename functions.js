const sayHello = () => { return "Hello"}; //zwraca nam console.log
const sayHello2 = () => "Hello";  //zwraca nam console.log
function sayHello3() {
    return "hello"
}
console.log(sayHello() + ", Marcin")
console.log(sayHello2() + ", Marcin")
console.log(sayHello3() + ", Marcin")

module.exports = {
    sayHello,
    sayHello2,
    sayHello3
}
console.log("plik functions.js został załadownay prawidłowo");