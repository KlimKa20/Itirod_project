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
    addComment(user, text, time)
}

function addComment(user, text, time) {
    let listComments = document.querySelector(".comments_list")
    let item = document.createElement('li');
    item.classList.add('comments_item');
    let itemInfo = document.createElement('div');
    itemInfo.classList.add('comment_info');
    let itemCreator = document.createElement('p');
    itemCreator.textContent = user;
    let itemTime = document.createElement('time');
    itemTime.textContent = time;
    itemInfo.appendChild(itemCreator);
    itemInfo.appendChild(itemTime)
    item.appendChild(itemInfo)
    let itemText = document.createElement('p');
    itemText.classList.add('comment_content');
    itemText.textContent = text;
    item.appendChild(itemText);
    listComments.appendChild(item);
}

function fillStar(mark) {
    let input = document.getElementsByClassName('star-rating');
    input[5 - mark].checked = true;
}

async function cocktailDetail() {
    let id = getURLParam('id');
    let cocktail = await cocktailStorage.getCocktailById(id);
    if (cocktail === undefined) {
        onNextPage('/Itirod_project/project/notFound')
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
    let amount = 0;
    let list = document.getElementById("ingredient_list");
    let nameIngredients = cocktail.ingredients
    for (let ingredient in nameIngredients) {
        let item = document.createElement('li');
        item.classList.add('content__item');
        let itemName = document.createElement('span');
        itemName.classList.add('content__ingredient');
        itemName.textContent = ingredient + ": ";
        let itemValue = document.createElement('span');
        itemValue.classList.add('content__precent');
        itemValue.textContent = cocktail.ingredients[ingredient];
        item.appendChild(itemName);
        item.appendChild(itemValue);
        list.appendChild(item);
        amount += +nameIngredients[ingredient];
    }
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
    let creator = document.getElementById("creator");
    creator.textContent = cocktail.addedBy;
    for (let comment of await cocktailStorage.getAllComments(id)) {
        addComment(comment.user, comment.value, comment.date)
    }
}

cocktailDetail();