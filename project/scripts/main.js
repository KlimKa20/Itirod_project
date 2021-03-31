function getURLParam(param) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let value = urlParams.get(param);
    return value;
}

function setFilter(filter) {
    let sort = getURLParam('sort');
    let url = `index.html?filter=${filter}`;
    if (sort != null) {
        url += `&sort=${sort}`;
    }
    document.location.href = url;
}

function setSort(sort) {
    let filter = getURLParam('filter');
    let url = `index.html?sort=${sort}`;
    if (filter != null) {
        url += `&filter=${filter}`;
    }
    document.location.href = url;
}

async function searchBar() {
    let field = document.querySelector(".search__input");
    let text = field.value.trim().toLowerCase();

    let catalog = await cocktailStorage.getAllCocktail();

    for (let id in catalog) {
        let coffeeName = catalog[id].name.toLowerCase();
        if (coffeeName.includes(text)) {
            document.location.href = `view/item.html?id=${catalog[id].id}`;
            return;
        }
    }

    field.value = "";
    alert("Ничего не найдено ");
}