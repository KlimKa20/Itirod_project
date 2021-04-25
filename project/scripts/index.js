async function fillGrid(catalog) {
    let grid = document.getElementById("grid__container");
    for (let item of catalog) {
        let cocktail = document.createElement("cocktail-item");
        cocktail.ingredients = item.item.ingredients;
        cocktail.marks = item.item.marks;
        cocktail.name = item.item.name;
        cocktail.href = `/item?id=${item.id}`
        grid.appendChild(cocktail);
    }
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
        catalog.sort((a, b) => b.item.marks - a.item.marks);
        catalog = catalog.slice(0, 5);
    }
    let sort = getURLParam('sort');
    if (sort != null) {
        switch (sort) {
            case 'name':
                catalog.sort((a, b) => ('' + a.item.name.toLowerCase()).localeCompare(b.item.name.toLowerCase()));
                break;
            case 'rating':
                catalog.sort((a, b) => b.item.marks - a.item.marks);
                break;
            case 'date':
                catalog.sort((a, b) => b.item.createDate - a.item.createDate);
                break;
        }
    }
    await fillGrid(catalog)
}

fillCatalog()

