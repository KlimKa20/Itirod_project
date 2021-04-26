function setMark(mark) {
    let user = localStorage.getItem("user");
    if (user === "null") {
        alert('Необходимо авторизироваться');
        return;
    }
    let id = getURLParam('id');
    cocktailStorage.setMark(id, user, mark.value)
}

async function leaveComment() {
    let user = localStorage.getItem("user");
    if (user === "null") {
        alert('Необходимо авторизироваться');
        return;
    }
    let id = getURLParam('id');
    let field = document.querySelector('.comment_form-text_textarea')
    let text = field.value;

    field.value = ""
    let time = new Date().toISOString().slice(0, 10)
    cocktailStorage.setComments(id, user, text, time)

    let listComments = document.querySelector(".comments_list")
    let item = document.createElement('comment-item');
    item.user = user
    item.date = time
    item.content = text
    listComments.prepend(item);
}


function fillStar(mark) {
    let input = document.getElementsByClassName('star-rating');
    input[5 - mark].checked = true;
}

function createListIngredients(nameIngredients) {
    let amount = 0;
    let list = document.getElementById("ingredient_list")
    for (let ingredient in nameIngredients) {
        let item = document.createElement('li');
        item.classList.add('content__item');
        let itemName = document.createElement('span');
        itemName.classList.add('content__ingredient');
        itemName.textContent = ingredient + ": ";
        let itemValue = document.createElement('span');
        itemValue.classList.add('content__precent');
        itemValue.textContent = nameIngredients[ingredient];
        item.appendChild(itemName);
        item.appendChild(itemValue);
        list.appendChild(item);
        amount += +nameIngredients[ingredient];
    }
    return amount
}

function buildImg(amount, nameIngredients) {
    let currentAmount = amount
    let container = document.querySelector(".cocktail__name-block");
    for (let ingredient in nameIngredients) {
        let ingredientItem = document.createElement('div');
        ingredientItem.classList.add('cocktail-ingredient');
        ingredientItem.classList.add(ingredient.toLowerCase());
        ingredientItem.setAttribute('style', `height:${96 * currentAmount / amount}%`);
        currentAmount -= +nameIngredients[ingredient]
        container.appendChild(ingredientItem);
    }
}

async function cocktailDetail() {
    let id = getURLParam('id');
    let cocktail = await cocktailStorage.getCocktailById(id);
    if (cocktail === undefined) {
        onNextPage('/notFound')
        return;
    }
    let mark;
    let user = localStorage.getItem("user");
    if (user !== "null") {
        mark = await cocktailStorage.getMark(id, user)
        if (mark !== undefined) {
            fillStar(mark);
        }
    }
    let name = document.querySelector(".cocktail__name");
    name.textContent = cocktail.name;
    let amount = createListIngredients(cocktail.ingredients);
    buildImg(amount, cocktail.ingredients)
    let creator = document.getElementById("creator");
    creator.textContent = cocktail.addedBy;
    let listComments = document.querySelector(".comments_list")
    for (let comment of await cocktailStorage.getAllComments(id)) {
        let item = document.createElement('comment-item');
        item.user = comment.user
        item.date = comment.date
        item.content = comment.value
        listComments.appendChild(item);
    }
}

cocktailDetail();