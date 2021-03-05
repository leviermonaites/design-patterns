import Mercedes from './Brands/Mercedes.js';
import BMW from './Brands/BMW.js';
import Ferrari from './Brands/Ferrari.js';

// See, it's just a class with only one method, that based on the condition creates the desired class.

class CarFactory {
  constructor(brand, year) {
    return this.build(brand, year);
  }
  build(brand, year) {
    switch (brand) {
      case 'Mercedes': {
        return new Mercedes(year);
      }

      case 'BMW': {
        return new BMW(year);
      }

      case 'Ferrari': {
        return new Ferrari(year);
      }
    }
  }
}

// In order to abstract even more the process, we are going to use a function that call the build method.
const buildCar = (brand, year) => new CarFactory(brand, year);

const myCar = buildCar('Mercedes', 2000); // What a dream, huh?

console.log(myCar.year);
console.log(myCar.getValue());

myCar.year = 3; // Property well-protected.
console.log(myCar.year); // Expected output "2000".
