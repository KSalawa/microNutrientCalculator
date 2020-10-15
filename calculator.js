/*
300g Olives 162kcal 17g 0 1
190g pesto 312 27.3 10.6 4.8
400g feta 303 26.1 0.7 16.2
600g cream 467 50.5 1.6 1.5
250g butter 745 82 0.6 0.6
1200 chicken 196 10.9 0 24.4
*/

const ingredient = (name, weight, kcal, fat, carb, protein) => {
    return {
        name: name,
        weight: weight,
        kcal: kcal,
        fat: fat,
        carb: carb,
        protein: protein,
    }
    
};

const olives = ingredient('olives', 300, 162,0,1);
const pesto = ingredient('pesto', 312, 27.3, 10.6, 4.8);
const feta = ingredient('feta', 303, 26.1, 0.7, 16.2);
const cream = ingredient('cream', 467, 50.5, 1.6, 1.5);
const butter = ingredient('butter', 745, 82, 0.6, 0.6);
const chicken = ingredient('chicken', 196, 10.9, 0, 24.4);

console.log(olives, pesto, feta, cream, butter, chicken);

const caloriesPerNutrient = () => {

};

