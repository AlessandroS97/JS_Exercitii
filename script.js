class User {
  constructor(nume, prenume, varsta, hobbies) {
    this.nume = nume;
    this.prenume = prenume;
    this.varsta = varsta;
    this.hobbies = hobbies;
  }
}

const alessandro = new User("Alessandro", "Ciobanu", 24, [
  "Front-end Developer",
]);
const marina = new User("Marina", "Ciobanu", 20, ["Cantatul", "Sportul"]);
const dominik = new User("Dominic", "Balis", 6, ["gaming", "gaming"]);
const diego = new User("Diego", "Balis", 17, ["Football", "Echitatie"]);
const mihai = new User("Dalte", "Mihai", 56, ["Statul degeaba"]);

let users = [];
users.push(alessandro);
users.push(marina);
users.push(dominik);
users.push(diego);
users.push(mihai);

console.log("Printam toti userii cu prenumele Mihai: ");
for (let i = 0; i < users.length; i++) {
  if (users[i].prenume === "Mihai") {
    console.log(users[i]);
  }
}

console.log("=============================");

console.log("Printam toti userii cu o varsta mai mare de 18 ani: ");
for (let i = 0; i < users.length; i++) {
  if (users[i].varsta > 18) {
    console.log(users[i]);
  }
}

console.log("=============================");

console.log("Printam toti userii care au ca hobby Front-end Developer");
for (let i = 0; i < users.length; i++) {
  if (users[i].hobbies.includes("Front-end Developer")) {
    console.log(users[i]);
  }
  // if(users[i].hobbies[i] === 'Front-end Developer'){
  //     console.log(users[i]);
}

console.log("=============================");

let toatePrenumele = "";
for (let i = 0; i < users.length; i++) {
  toatePrenumele += users[i].prenume + ",";
}
console.log(toatePrenumele);
