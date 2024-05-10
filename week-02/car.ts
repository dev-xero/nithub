class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    get getBrand(): string {
        return this.brand;
    }

    set setBrand(newBrand: string) {
        this.brand = newBrand;
    }

    move() {
        console.log('Move called.');
    }
}

const k1 = new Car('Mustang');
k1.setBrand = 'Ferrari';

console.log(k1.getBrand);
k1.move();
