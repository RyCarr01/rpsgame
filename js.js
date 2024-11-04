function getComputerChoice() {
    return Math.random()
}

let x = getComputerChoice()

console.log(x)

if (x <= 0.33) {
    console.log("x")

}   else if (x >= 0.331 && x <= 0.77) {
    console.log("y")

}   else if (x >= 0.771) {
    console.log("z")

}   else {
    console.log("shouldnt happen")

}