interface Shape {
    area(): number;
}

interface ThreeDimShape extends Shape {
    volume(): number;
}

type ShapeResult = {
    shape: string;
    value: number;
};

type MultiDimShape = ThreeDimShape | Shape;

class Square implements Shape {
    private length: number;

    constructor(length: number) {
        this.length = length;
    }

    area(): number {
        return Math.pow(this.length, 2);
    }
}

class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        const trimmedArea = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        return parseFloat(trimmedArea);
    }
}

class Sphere implements ThreeDimShape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        const trimmedArea = (4 * Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        return parseInt(trimmedArea);
    }

    volume(): number {
        const trimmedVolume = (
            (4 / 3) *
            (Math.PI * Math.pow(this.radius, 3))
        ).toFixed(2);
        return parseFloat(trimmedVolume);
    }
}

class ShapeDisplay {
    private shapes: MultiDimShape[];

    constructor(shapes: MultiDimShape[]) {
        this.shapes = shapes;
    }

    showAreas(): void {
        const result: ShapeResult[] = [];

        for (const shape of this.shapes) {
            result.push({
                shape: shape.constructor.name, // Gets the shape class name
                value: shape.area(),
            });
        }
        
        this.displayResult('Area', result);
    }

    showVolumes(): void {
        const result: ShapeResult[] = [];

        for (const shape of this.shapes) {
            if ((shape as ThreeDimShape).volume) {
                result.push({
                    shape: shape.constructor.name,
                    value: (shape as ThreeDimShape).volume(),
                });
            }
        }

        this.displayResult('Volume', result);
    }

    displayResult(title: string, result: ShapeResult[]) {
        console.log(title.toUpperCase());
        console.log('-'.repeat(title.length));

        for (const res of result) {
            console.log(`${title} of ${res.shape}: ${res.value} cm^3`);
        }

        console.log('\n');
    }
}

const myShapes = [new Square(2), new Circle(4), new Square(8), new Sphere(12)];

const myShapeDisplay = new ShapeDisplay(myShapes);

myShapeDisplay.showAreas();
myShapeDisplay.showVolumes();
