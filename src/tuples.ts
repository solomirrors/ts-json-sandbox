const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];
const cola : Drink = ['brown', true, 40]
const sprite : Drink = ['clear', true, 40];
const coffee : Drink = ['black', false, 0]

const carSpecsTuples: [number, number] = [400, 3354]
const carSpecsObject = {
    horsePower: 400,
    mass: 3354
}

export {drink}