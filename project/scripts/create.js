// function addIngredient(){
//     let ingredientsList = document.querySelector('.cocktail-create__list');
//     let ingredientsItem = document.querySelector('.cocktail-create__li');
//     let newIngredientsItem = ingredientsItem.cloneNode(true);
//     ingredientsList.appendChild(newIngredientsItem);
// }
function addIngredient(){
    let ingredientsList = document.querySelector('.cocktail-create__list');
    let ingredientItem = document.createElement('li');
    ingredientItem.classList.add('cocktail-create__li');
    ingredientItem.innerHTML =
    `<div class="cocktail-create__item">
                            <select class="field_style cocktail-create__ingredient">
                                <option>Vodka</option>
                                <option>Beer</option>
                                <option>Cola</option>
                                <option>Ice</option>
                                <option>Tonic</option>
                                <option>White Rom</option>
                                <option>Black Rom</option>
                                <option>Lemon</option>
                                <option>Juice</option>
                                <option>Champagne</option>
                            </select>
                            <input class="field_style cocktail-create__value" type="number" placeholder="value">
                        </div>`;
    ingredientsList.appendChild(ingredientItem);
}

function submitCreate() {
    let name = document.getElementById('name_field').value;
    let description = document.getElementById('description_field').value;
    let ingredientsList = [];
    let ingredientsSelects = document.getElementsByClassName('cocktail-create__ingredient');
    let ingredientsValues = document.getElementsByClassName('cocktail-create__value');
    for (let i = 0; i < ingredientsSelects.length; i++) {
        let name = ingredientsSelects[i].options[ingredientsSelects[i].selectedIndex].value;
        let value = +ingredientsValues[i].value;
        ingredientsList.push(new Ingredient(name, value));
    }
    coffeeStorage.addCocktail(new Cocktail(name,null,description,ingredientsList));
}