// function addIngredient(){
//     let ingredientsList = document.querySelector('.cocktail-create__list');
//     let ingredientsItem = document.querySelector('.cocktail-create__li');
//     let newIngredientsItem = ingredientsItem.cloneNode(true);
//     ingredientsList.appendChild(newIngredientsItem);
// }

function addIngredient() {
    let ingredientsList = document.querySelector('.cocktail-create__list');
    let ingredientItem = document.createElement('li');
    ingredientItem.classList.add('cocktail-create__li');
    ingredientItem.innerHTML =
        `<div class="cocktail-create__item">
                            <select class="field_style cocktail-create__ingredient" onchange="buildImg();">
                                <option>Vodka</option>
                                <option>Beer</option>
                                <option>Cola</option>
                                <option>Ice</option>
                                <option>Tonic</option>
                                <option>White-Rom</option>
                                <option>Black-Rom</option>
                                <option>Lemon</option>
                                <option>Juice</option>
                                <option>Champagne</option>
                            </select>
                            <input class="field_style cocktail-create__value" type="number" placeholder="value" oninput="buildImg();" max="1000">
                        </div>`;
    ingredientsList.appendChild(ingredientItem);
}

async function submitCreate() {
    let user = firebase.auth().currentUser;
    let username;
    if (user != null) {
        username = user.email;
    }
    let name = document.getElementById('name_field').value;
    let description = document.getElementById('description_field').value;
    let ingredientsList = {};
    let ingredientsSelects = document.getElementsByClassName('cocktail-create__ingredient');
    let ingredientsValues = document.getElementsByClassName('cocktail-create__value');
    for (let i = 0; i < ingredientsSelects.length; i++) {
        let name = ingredientsSelects[i].options[ingredientsSelects[i].selectedIndex].value;
        let value = +ingredientsValues[i].value;
        ingredientsList[name] = value;
    }
    let res = await coffeeStorage.addCocktail(new Cocktail(name, username, description, ingredientsList));
    if (res){
        document.location.href = "../index.html";
    }
}

function buildImg(){
    let oldIgredients = document.getElementsByClassName("cocktail-ingredient")
    while (oldIgredients.length !== 0) {
        oldIgredients[0].parentNode.removeChild(oldIgredients[0]);
    }
    let nameIngredients = document.getElementsByClassName('cocktail-create__ingredient');
    let valueIngredients = document.getElementsByClassName('cocktail-create__value');
    let amount =0;
    for (let item of valueIngredients) {
        amount += +item.value;
    }
    let currentAmount = amount
    let container =document.querySelector(".cocktail-fill__container");
    for (let i = 0; i < nameIngredients.length; i++){
        let ingredientItem = document.createElement('div');
        ingredientItem.classList.add('cocktail-ingredient');
        ingredientItem.classList.add(nameIngredients[i].options[nameIngredients[i].selectedIndex].value.toLowerCase());
        ingredientItem.setAttribute('style',  `height:${88*currentAmount/ amount}%`);
        currentAmount -= valueIngredients[i].value
        container.appendChild(ingredientItem);
    }
}