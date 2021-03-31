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

async function searchBar(page) {
    let field = document.querySelector(".search__input");
    let text = field.value.trim().toLowerCase();
    if(page){
        document.location.href = `../index.html?searchBar=${text}`;
    }
    else {
        document.location.href = `index.html?searchBar=${text}`;
    }
}

function getMarks(item){
    if (item.item.marks.length === 0){
        return 0;
    }
    let marks = Object.values(item.item.marks);
    return marks.reduce((a, b) => (a + b)) / marks.length;
}
// async function searchBar() {
//     let field = document.querySelector(".search__input");
//     let text = field.value.trim().toLowerCase();
//
//     let catalog = await cocktailStorage.getAllCocktail();
//
//     for (let item of catalog) {
//         let coffeeName = item.item.name.toLowerCase();
//         if (coffeeName.includes(text)) {
//             document.location.href = `view/item.html?id=${item.id}`;
//             return;
//         }
//     }
//
//     field.value = "";
//     alert("Ничего не найдено ");
// }