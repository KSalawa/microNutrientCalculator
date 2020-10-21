class ingredient {
    constructor(name, kcal, fat, carb, protein, calories) {
        this._name = name;
        this._kcal = kcal;
        this._fat = fat;
        this._carb = carb;
        this._protein = protein;
        this._calories = calories;
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
    get calories(){
        return this._calories;
    }
/*
    calculateCalories(weight) {
        return this._calories = (this._kcal * (weight / 100));
    }
*/
    calculateCaloriesfromFat(weight) {
        return (Math.floor(this.fat * (weight * 0.09)));
    }
    calculateCaloriesfromCarb(weight) {
        return (Math.floor(this.carb * (weight * 0.04)));
    }
    calculateCaloriesfromProtein(weight) {
        return (Math.floor(this.protein * (weight * 0.04)));
    }
/*    
    totalCalories(calories){
        this._calories.push(calories);
    }
 */   
}
//ingredients below
const olives = new ingredient('Olives', 162, 17, 0, 1);
const pesto = new ingredient('Pesto', 312, 27.3, 10.6, 4.8);
const feta = new ingredient('Peta', 303, 26.1, 0.7, 16.2);
const cream = new ingredient('Cream', 467, 50.5, 1.6, 1.5);
const butter = new ingredient('Butter', 745, 82, 0.6, 0.6);
const chicken = new ingredient('Chicken', 196, 10.9, 0, 24.4);

//logs total calories from 100g of olives
//console.log(olives.calculateCaloriesfromCarb(100)+ olives.calculateCaloriesfromFat(100)+ olives.calculateCaloriesfromProtein(100));

/*
300g Olives 
190g pesto 
400g feta 
600g cream 
250g butter 
1200 chicken 
*/


console.log(olives.calculateCaloriesfromFat(300));
console.log(olives.calculateCaloriesfromCarb(300));
console.log(olives.calculateCaloriesfromProtein(300));