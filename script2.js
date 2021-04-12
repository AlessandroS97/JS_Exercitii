let animal1 = {
  name: "Aki",
  type: "Dog",
  age: 5,
  race: "Shiba Inu",
  speak: function(){
      console.log('Bark! Bark! Bark!');
  },
  details: function(){
      console.log('Type: ' + animal1.type + ' , ' + 'Name: '+ animal1.name + ' , ' + 'Age: '+ animal1.age + ' , ' + 'Race: ' + animal1.race);
  },
  howOldIAm: function(){
      console.log('Varsta mea este: ' + animal1.age);
  },
}

console.log(animal1.speak());
console.log(animal1.details());
console.log(animal1.howOldIAm());

console.log('========================================');

let animal2 = {
  name: "Biiiird",
  type: "Parrot",
  age: 1,
  race: "Lovebird",
  friend: animal1,
  myFriendIs: function(){
      console.log(animal1);
  },
  amIYoungerThanFriend: function(){
      if ( animal2.age < animal1.age) {
          console.log('Adevarat');
      } else {
          console.log('Fals');
      }
  }
};
 
console.log('Prietenul meu este: ');
console.log(animal2.myFriendIs());

console.log('animal2 este mai mic ca animal1?');
console.log(animal2.amIYoungerThanFriend());