// 1. Copy and paste your prototype in here and refactor into class syntax.

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.


class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

class CubeMaker extends CuboidMaker {
    constructor(length) {
        super(length, length, length);
    }
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 6 * this.length * this.length;
    }
}

let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

let cube = new CubeMaker(3);

console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 54