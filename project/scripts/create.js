function isright(obj) {
    if (obj.value > 100) obj.value = 100;
    if (obj.value < 1) obj.value = 1;
}

function addIngredient() {
    const maxIngredients = 5
    let ingredientsList = document.querySelector('.cocktail-create__list');
    let ingredientItem = document.createElement('li');
    let fields = document.getElementsByClassName('cocktail-create__li')
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
                            <input class="field_style cocktail-create__value" type="number" placeholder="value" oninput="isright(this);buildImg();" max="1000" required>
                            <button type="button" class="btn_del" onclick="removeIngredient(event)">-</button>
                        </div>`;
    ingredientsList.appendChild(ingredientItem);


    if (maxIngredients === fields.length) {
        let addButton = document.querySelector('.btn_add');
        addButton.style.display = 'none';
    }
}

function removeIngredient(event) {
    const maxIngredients = 5
    let items = document.getElementsByClassName('cocktail-create__li');
    if (items.length === maxIngredients) {
        let addButton = document.querySelector('.btn_add');
        addButton.style.display = 'block';
    }
    let item = event.srcElement.closest(".cocktail-create__li");
    item.parentNode.removeChild(item);
    buildImg();
}

async function submitCreate() {
    let user = localStorage.getItem("user");
    let name = document.getElementById('name_field').value;
    let description = document.getElementById('description_field').value;
    let ingredientsList = {};
    let ingredientsSelects = document.getElementsByClassName('cocktail-create__ingredient');
    let ingredientsValues = document.getElementsByClassName('cocktail-create__value');
    for (let i = 0; i < ingredientsSelects.length; i++) {
        let name = ingredientsSelects[i].options[ingredientsSelects[i].selectedIndex].value;
        if (ingredientsList[name] === undefined) {
            ingredientsList[name] = +ingredientsValues[i].value;
        } else {
            ingredientsList[name] += +ingredientsValues[i].value;
        }
    }
    let res = await cocktailStorage.addCocktail(new Cocktail(name, user, description, ingredientsList));
    if (res) {
        onNextPage('/catalog')
    }
}

function buildImg() {
    let oldIgredients = document.getElementsByClassName("cocktail-ingredient")
    while (oldIgredients.length !== 0) {
        oldIgredients[0].parentNode.removeChild(oldIgredients[0]);
    }
    let nameIngredients = document.getElementsByClassName('cocktail-create__ingredient');
    let valueIngredients = document.getElementsByClassName('cocktail-create__value');
    let amount = 0;
    for (let item of valueIngredients) {
        amount += +item.value;
    }
    if (amount === 0) {
        alert("Нет ингредиентов")
        return
    }
    let currentAmount = amount
    let container = document.querySelector(".cocktail-fill__container");
    for (let i = 0; i < nameIngredients.length; i++) {
        let ingredientItem = document.createElement('div');
        ingredientItem.classList.add('cocktail-ingredient');
        ingredientItem.classList.add(nameIngredients[i].options[nameIngredients[i].selectedIndex].value.toLowerCase());
        ingredientItem.setAttribute('style', `height:${88 * currentAmount / amount}%`);
        currentAmount -= valueIngredients[i].value
        container.appendChild(ingredientItem);
    }
}