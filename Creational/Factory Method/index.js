class Mammal {
  constructor(species, gender) {
    this.species = species;
    this.gender = gender;
  }

  speak() {
    throw new Error('Class must be implemented in sub-classes');
  }
}

class Person extends Mammal {
  constructor(species, name, gender, surname, career) {
    super(species, gender);
    this.name = name;
    this.surname = surname;
    this.career = career;
  }

  speak() {
    console.log('Hello');
  }
}

class Monkey extends Mammal {
  constructor(species, gender) {
    super(species, gender);
  }

  speak() {
    console.log('UUH! UUH!'); // I think it could be better.
  }
}

class Invasor extends Mammal {
  constructor() {
    super();
  }
}

const p1 = new Person(
  'Human Being',
  'Levi',
  'Male',
  'Ermonaites',
  'Web Developer'
);
p1.speak();

const monkey = new Monkey('Animal', 'Male');
monkey.speak();

const invasor = new Invasor(); // Just to show the error when the method is not implemented.
invasor.speak();
