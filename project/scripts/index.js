function createImage(item) {
    let imageContainer = document.createElement("figure");
    imageContainer.classList.add("grid__cocktail-img")
    let picture = document.createElement("img");
    picture.classList.add("grid__img");
    picture.src = "image/empty-cup.png";
    picture.alt = "image_item";
    imageContainer.appendChild(picture)


    let nameIngredients = item.ingredients;
    let amount = 0;

    for (let ingredient in nameIngredients) {
        amount += +nameIngredients[ingredient];
    }
    let currentAmount = amount
    for (let ingredient in nameIngredients) {
        let ingredientItem = document.createElement('div');
        ingredientItem.classList.add('cocktail-ingredient');
        ingredientItem.classList.add(ingredient.toLowerCase());
        ingredientItem.setAttribute('style', `height:${53 * currentAmount / amount}%`);
        currentAmount -= +nameIngredients[ingredient]
        imageContainer.appendChild(ingredientItem);
    }

    let name = document.createElement("figcaption");
    name.classList.add("grid__text");
    name.textContent = item.name;
    imageContainer.appendChild(name);
    return imageContainer;
}

async function fillCatalog() {
    let catalog = await cocktailStorage.getAllCocktail();
    let grid = document.getElementById("grid__container");
    for (let item of catalog) {
        let cocktail = document.createElement("a");
        let cocktailContainer = document.createElement("div");
        cocktailContainer.classList.add("grid__cocktail-container")
        let imageContainer = createImage(item);

        cocktailContainer.appendChild(imageContainer);
        let ratingContainer = document.createElement("div");
        ratingContainer.classList.add("rating-result");
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("span");
            if (true) {
                star.classList.add("active");
            }
            ratingContainer.appendChild(star)
        }
        cocktailContainer.appendChild(ratingContainer);
        cocktail.appendChild(cocktailContainer);
        cocktail.setAttribute("href", "view/item.html");
        grid.appendChild(cocktail);
    }
}

fillCatalog()
