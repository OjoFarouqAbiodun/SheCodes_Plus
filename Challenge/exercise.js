function isWindy(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}

console.log(isWindy(2, "imperial"));
console.log(isWindy(20, "metric"));

let userSpeed = prompt("What speed is it?");
let userUnit = prompt("In what unit? (metric or imperial)");

console.log(isWindy(userSpeed, userUnit));