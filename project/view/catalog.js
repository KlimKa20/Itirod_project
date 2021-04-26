const catalog =
   `<link rel="stylesheet" type="text/css" href="styles/index.css"/>
    <div class="sort-selection">
        <ul>
            <li>
                <a href="#">SORT</a>
                <ul>
                    <li><a href="#" onClick="setSort('name');return false;">NAME</a></li>
                    <li><a href="#" onClick="setSort('rating');return false;">RATING</a></li>
                    <li><a href="#" onClick="setSort('date');return false;">DATE</a></li>
                </ul>
            </li>
            <li>
                <a class="sort-select" href="#">FILTER</a>
                <ul>
                    <li><a href="#" onClick="setFilter('top');return false;">TOP</a></li>
                    <li><a href="#" onClick="setFilter('all');return false;">ALL</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div id="grid__container" class="grid__container">
    </div>
    <figure class="ensuing_consequences">
        <img class="ensuing_consequences__img" src="image/alcohol.jpg" alt="Пикник"/>
            <figcaption class="ensuing_consequences__text">Алкоголь вредит вашему здоровью!</figcaption>
    </figure>`
