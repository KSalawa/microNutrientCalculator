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
//ingredients list 
const olives = ingredient('olives', 300, 162, 17, 0, 1);
const pesto = ingredient('pesto', 190, 312, 27.3, 10.6, 4.8);
const feta = ingredient('feta', 400, 303, 26.1, 0.7, 16.2);
const cream = ingredient('cream', 600, 467, 50.5, 1.6, 1.5);
const butter = ingredient('butter', 250, 745, 82, 0.6, 0.6);
const chicken = ingredient('chicken', 1200, 196, 10.9, 0, 24.4);
const allIngredients = [olives, pesto, feta, cream, butter, chicken]


const fatKcal = [];

for (i = 0; i < allIngredients.length; i++) {
    fatKcal.push(allIngredients[i].fat * 9 * (allIngredients[i].weight / 100));
};

const carbKcal = [];

for (i = 0; i < allIngredients.length; i++) {
    carbKcal.push(allIngredients[i].carb * 4 * (allIngredients[i].weight / 100));
};

const proteinKcal = [];

for (i = 0; i < allIngredients.length; i++) {
    proteinKcal.push(allIngredients[i].protein * 4 * (allIngredients[i].weight / 100));
};



//console.log(fatTotal);

//add up fat array
const totalFat = fatKcal.reduce(function(a, b){
    return Math.round(a+b);
}, 0);
const totalCarb = carbKcal.reduce(function(a, b){
    return Math.round(a+b);
}, 0);
const totalProtein = proteinKcal.reduce(function(a, b){
    return Math.round(a+b);
}, 0);

console.log(`Today's ingredients:
`)

for (i = 0; i < allIngredients.length; i++) {
    console.log(allIngredients[i].name);
};

console.log(`
Total calories from fat ${totalFat}.`);
console.log(`Total calories from carb ${totalCarb}.`);
console.log(`Total calories from protein ${totalProtein}.`);
console.log(`Calories in whole meal : ${totalFat+totalCarb+totalProtein}, calories in one portion: ${Math.round((totalFat+totalCarb+totalProtein) / 7)}.`)
