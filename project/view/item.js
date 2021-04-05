const item =
    `   <link rel="stylesheet" type="text/css" href="styles/item.css"/>
        <link rel="stylesheet" type="text/css" href="styles/ingredients.css"/>
        <article class="cocktail__container">
        <div class="cocktail__img-container">
            <figure class="cocktail__name-block">
                <figcaption class="cocktail__name">Name</figcaption>
                <img class="cocktail__img" src="image/empty-cup.png" alt="item_picture">
            </figure>
            <div class="rating-area">
                <input type="radio" id="star-5" name="rating" value="5" onclick="setMark(this);">
                <label for="star-5" title="Оценка «5»"></label>
                <input type="radio" id="star-4" name="rating" value="4" onclick="setMark(this);">
                <label for="star-4" title="Оценка «4»"></label>
                <input type="radio" id="star-3" name="rating" value="3" onclick="setMark(this);">
                <label for="star-3" title="Оценка «3»"></label>
                <input type="radio" id="star-2" name="rating" value="2" onclick="setMark(this);">
                <label for="star-2" title="Оценка «2»"></label>
                <input type="radio" id="star-1" name="rating" value="1" onclick="setMark(this);">
                <label for="star-1" title="Оценка «1»"></label>
            </div>
        </div>
        <div class="content__container">
            <p class="content__field">recipe</p>
            <ul id="ingredient_list" class="content__field content__list">
            </ul>
            <p class="content__field">Created by: <span id="creator">somebody</span></p>
        </div>
    </article>
    <figure class="ensuing_consequences">
        <img class="ensuing_consequences__img" src="image/alcohol.jpg" alt="Пикник">
        <figcaption class="ensuing_consequences__text">Алкоголь вредит вашему здоровью!</figcaption>
    </figure>
    <section class="comments_block">
        <form class="comment_form">
            <textarea class="comment_form-text_textarea" placeholder="Enter your comment"></textarea>
            <button class="comment_create-button">Create</button>
        </form>
        <ul class="comments_list">
            <li class="comments_item">
                <div class="comment_info">
                    <p>aaa@mail.com</p>
                    <time>2021-03-08</time>
                </div>
                <p class="comment_content">dgdfgdfg</p>
            </li>
        </ul>
    </section>
    `