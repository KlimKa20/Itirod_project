class CocktailItem extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <a href="${this.href}">
            <div class="grid__cocktail-container">
                <figure class="grid__cocktail-img">
                    <img class="grid__img" src="image/empty-cup.png" alt="image_item">
                </figure>
                <div class="rating-result">
                </div>
            </div>
        </a>`
        this.fillMarks()
        this.formImage()
    }

    fillMarks() {
        let ratingContainer = this.querySelector(".rating-result");
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("span");
            if (i + 0.5 <= this.marks) {
                star.classList.add("active");
            }
            ratingContainer.appendChild(star)
        }
    }

    formImage() {
        let imageContainer = this.querySelector(".grid__cocktail-img");

        let nameIngredients = this.ingredients;
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
        name.textContent = this.name;
        imageContainer.appendChild(name);
    }

}

customElements.define("cocktail-item", CocktailItem);