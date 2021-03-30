async function fillCatalog(){
    let catalog = await coffeeStorage.getAllCocktail();
    let grid = document.getElementById("grid__container");
    // catalog.forEach()
    for (let item of catalog) {
        let cocktail = document.createElement("a");
        let cocktailContainer = document.createElement("div");
        let imageContainer = document.createElement("figure");
        imageContainer.classList.add("grid__cocktail-img")
        let picture = document.createElement("img");
        picture.classList.add("grid__img");
        picture.src = "image/empty-cup.png";
        let name = document.createElement("figcaption");
        name.classList.add("grid__text");
        name.textContent = item.name;
        imageContainer.appendChild(picture);
        imageContainer.appendChild(name);
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
