class ingredient {
    constructor(name, kcal, fat, carb, protein) {
        this._name = name;
        this._kcal = kcal;
        this._fat = fat;
        this._carb = carb;
        this._protein = protein
    }
    get name(){
        return this._name;
    }
    get kcal(){
        return this._kcal;
    }
    get fat(){
        return this._fat;
    }
    get carb(){
        return this._carb;
    }
    get protein(){
        return this._protein;
    }

    calculateCalories(weight) {
        return this._kcal * (weight / 100);
    }
    
    calculateCaloriesfromFat(weight) {
        return Math.floor(this._fat * (weight * 0.09));
    }
    calculateCaloriesfromCarb(weight) {
        return Math.floor(this._carb * (weight * 0.04));
    }
    calculateCaloriesfromProtein(weight) {
        return Math.floor(this._protein * (weight * 0.04));
    }
}

const olives = new ingredient('Olives', 162, 17, 0, 1);
const pesto = new ingredient('Pesto', 312, 27.3, 10.6, 4.8);
const feta = new ingredient('Peta', 303, 26.1, 0.7, 16.2);
const cream = new ingredient('Cream', 467, 50.5, 1.6, 1.5);
const butter = new ingredient('Butter', 745, 82, 0.6, 0.6);
const chicken = new ingredient('Chicken', 196, 10.9, 0, 24.4);



/*
300g Olives 
190g pesto 
400g feta 
600g cream 
250g butter 
1200 chicken 
*/


