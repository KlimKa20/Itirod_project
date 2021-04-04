const create =
    `<link rel="stylesheet" type="text/css" href="styles/create.css"/>
     <link rel="stylesheet" type="text/css" href="styles/ingredients.css"/>
     <div class="create-container">
        <div class="cocktail-fill__container">
            <img class="cocktail-fill__image" src="image/empty-cup.png" alt="glass">
        </div>
        <form class="cocktail-create__form" onsubmit="submitCreate();return false;">
            <input id="name_field" class="field_style" type="text" placeholder="Name" required>
            <div class="cocktail-create__select_block">
                <ul class="cocktail-create__list">
                    <li class="cocktail-create__li">
                        <div class="cocktail-create__item">
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
                            <input class="field_style cocktail-create__value" type="number" placeholder="value" oninput="isright(this);buildImg();" required>
                        </div>
                    </li>
                </ul>
                <button type="button" class="btn_add" onclick="addIngredient()">+</button>
            </div>
            <textarea id="description_field" class="field_style cocktail-create-textarea" placeholder="Description"></textarea>
            <button class="btn_create" type="submit">Create</button>
        </form>
    </div>
    `