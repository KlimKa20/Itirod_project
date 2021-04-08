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
        ingredientItem.setAttribute('style', `height:${54 * currentAmount / amount}%`);
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
    let searchBar = getURLParam('searchBar');
    let fullCatalog = await cocktailStorage.getAllCocktail();
    let catalog = []
    if (searchBar != null) {
        for (let item of fullCatalog) {
            let coffeeName = item.item.name.toLowerCase();
            if (coffeeName.includes(searchBar)) {
                catalog.push(item);
            }
        }
    } else {
        catalog = fullCatalog
    }
    let filter = getURLParam('filter');
    if (filter === "top") {
        let temp = []
        for (const a of catalog) {
            temp.push({obj: a, value: await getMarks(a)});
        }
        temp.sort((a, b) => b.value - a.value)
        catalog = []
        for (const a of temp) {
            catalog.push(a.obj);
        }
        catalog = catalog.slice(0, 5);
    }
    let sort = getURLParam('sort');
    if (sort != null) {
        switch (sort) {
            case 'name':
                catalog.sort((a, b) => ('' + a.item.name.toLowerCase()).localeCompare(b.item.name.toLowerCase()));
                break;
            case 'rating':
                let temp = []
                for (const a of catalog) {
                    temp.push({obj: a, value: await getMarks(a)});
                }
                temp.sort((a, b) => b.value - a.value)
                catalog = []
                for (const a of temp) {
                    catalog.push(a.obj);
                }
                break;
            case 'date':
                catalog.sort((a, b) => b.item.createDate - a.item.createDate);
                break;
        }
    }
    let grid = document.getElementById("grid__container");
    for (let item of catalog) {
        let cocktail = document.createElement("a");
        let cocktailContainer = document.createElement("div");
        cocktailContainer.classList.add("grid__cocktail-container")
        let imageContainer = createImage(item.item);

        cocktailContainer.appendChild(imageContainer);
        let ratingContainer = document.createElement("div");
        ratingContainer.classList.add("rating-result");
        let marks = await getMarks(item)
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("span");
            if (i + 0.5 <= marks) {
                star.classList.add("active");
            }
            ratingContainer.appendChild(star)
        }
        cocktailContainer.appendChild(ratingContainer);
        cocktail.appendChild(cocktailContainer);
        cocktail.onclick = function () {
            onNextPage(`/Itirod_project/project/item?id=${item.id}`)
        }
        grid.appendChild(cocktail);
    }
}

fillCatalog()

