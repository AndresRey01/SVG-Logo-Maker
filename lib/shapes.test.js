// Importing Shape classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes")

// Unit testing -> testing for a triangle with a blue background to render
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = ('yellow');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('purple');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});