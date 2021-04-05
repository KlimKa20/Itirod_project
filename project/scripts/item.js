
function setMark(mark){
    let user = authObject.user;
    if (user == null) {
        alert('Необходимо авторизироваться');
        return;
    }
    let id = getURLParam('id');
    cocktailStorage.setMark(id,user.email,mark.value)
}

async function cocktailDetail() {
    let id = getURLParam('id');
    let cocktail = await cocktailStorage.getCocktailById(id);
    if (cocktail === undefined){
        onNextPage('/Itirod_project/project/notFound')
        return;
    }
    let name =document.querySelector(".cocktail__name");
    name.textContent = cocktail.name;
    let amount = 0;
    let list = document.getElementById("ingredient_list");
    let nameIngredients = cocktail.ingredients
    for (let ingredient in nameIngredients){
        let item =document.createElement('li');
        item.classList.add('content__item');
        let itemName =document.createElement('span');
        itemName.classList.add('content__ingredient');
        itemName.textContent = ingredient + ": ";
        let itemValue =document.createElement('span');
        itemValue.classList.add('content__precent');
        itemValue.textContent = cocktail.ingredients[ingredient];
        item.appendChild(itemName);
        item.appendChild(itemValue);
        list.appendChild(item);
        amount += +nameIngredients[ingredient];
    }
    let currentAmount = amount
    let container =document.querySelector(".cocktail__name-block");
    for (let ingredient in nameIngredients) {
        let ingredientItem = document.createElement('div');
        ingredientItem.classList.add('cocktail-ingredient');
        ingredientItem.classList.add(ingredient.toLowerCase());
        ingredientItem.setAttribute('style', `height:${96*currentAmount / amount}%`);
        currentAmount -= +nameIngredients[ingredient]
        container.appendChild(ingredientItem);
    }
    let creator = document.getElementById("creator");
    creator.textContent = cocktail.addedBy;
}

cocktailDetail();