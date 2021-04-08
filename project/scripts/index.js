async function fillGrid(catalog) {
    let grid = document.getElementById("grid__container");
    for (let item of catalog) {
        let marks = await getMarks(item)
        let cocktail = document.createElement("cocktail-item");
        cocktail.ingredients = item.item.ingredients;
        cocktail.marks = marks;
        cocktail.name = item.item.name;
        cocktail.onclick = function () {
            onNextPage(`/Itirod_project/project/item?id=${item.id}`)
        }
        grid.appendChild(cocktail);
    }
}

async function sortRating(catalog) {
    let temp = []
    for (const a of catalog) {
        temp.push({obj: a, value: await getMarks(a)});
    }
    temp.sort((a, b) => b.value - a.value)
    catalog = []
    for (const a of temp) {
        catalog.push(a.obj);
    }
    return catalog
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
        catalog = await sortRating(catalog);
        catalog = catalog.slice(0, 5);
    }
    let sort = getURLParam('sort');
    if (sort != null) {
        switch (sort) {
            case 'name':
                catalog.sort((a, b) => ('' + a.item.name.toLowerCase()).localeCompare(b.item.name.toLowerCase()));
                break;
            case 'rating':
                catalog = await sortRating(catalog);
                break;
            case 'date':
                catalog.sort((a, b) => b.item.createDate - a.item.createDate);
                break;
        }
    }
    await fillGrid(catalog)
}

fillCatalog()

