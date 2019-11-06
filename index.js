function createName(name) {
  console.log(`Good Day.. ${name}`);
}
const nameA = "Roby";
const nameB = "Afrizal";

createName(`${nameA} ${nameB} Palmendha!`);

console.log("-------Next Sample--------");

const checkAge = function(age) {
  if (age >= 20) {
    console.log("You are old enough");
  } else if (age < 20 && age >= 0) {
    console.log("You are still young");
  } else {
    console.log("You are not born yet");
  }
};
checkAge(15);
checkAge(27);
checkAge(-4);

console.log("-------Next Sample--------");

const addMarks = (text, mark, times) => {
  let newText = text;

  for (let i = 0; i <= times; i++) {
    newText += mark;
  }
  console.log(newText);
};
addMarks("Selamat Pagi Semua..", "!", 5);
addMarks("How are you today", "?", 3);

console.log("-------Next Sample--------");

const showNameWithAge = (name = "Unidentified", age = 20) => {
  const nameWithAge = `${name} is ${age} years old`;
  return nameWithAge;
};
const afrizal = showNameWithAge("Afrizal", 25);

console.log(showNameWithAge("Roby", 15));
console.log(afrizal);
