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

    generateCalories(weight) {
        let sumCalories = [];
        let calculateCaloriesTotalArr = [];
   
            calculateCaloriesTotalArr.push((Math.floor(this.fat * (weight * 0.09))))
            calculateCaloriesTotalArr.push((Math.floor(this.carb * (weight * 0.04))))
            calculateCaloriesTotalArr.push(Math.floor(this.protein * (weight * 0.04)))
    
            sumCalories = calculateCaloriesTotalArr.reduce(function(a, b){
        return Math.round(a+b);
             }, 0);
                 return sumCalories;
    };
}

//ingredients below
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
console.log(`Pesto chicken calories by ingredients:
`)
console.log(`300g of Olives: ${olives.generateCalories(300)}`);
console.log(`190f of Pesto: ${pesto.generateCalories(190)}`);
console.log(`400g of Feta: ${feta.generateCalories(400)}`);
console.log(`600g of Cream: ${cream.generateCalories(600)}`);
console.log(`250g of Butter: ${butter.generateCalories(250)}`);
console.log(`1,2kg of chicken: ${chicken.generateCalories(1200)}`);
console.log(`
Total calories: ${olives.generateCalories(300)+pesto.generateCalories(190)+feta.generateCalories(400)+cream.generateCalories(600)+butter.generateCalories(250)+chicken.generateCalories(1200)}`)
