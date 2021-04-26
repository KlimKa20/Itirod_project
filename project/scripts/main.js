function getURLParam(param) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let value = urlParams.get(param);
    return value;
}

function setFilter(filter) {
    let sort = getURLParam('sort');
    let url = `/catalog?filter=${filter}`;
    if (sort != null) {
        url += `&sort=${sort}`;
    }
    onNextPage(url)
}

function setSort(sort) {
    let filter = getURLParam('filter');
    let url = `/catalog?sort=${sort}`;
    if (filter != null) {
        url += `&filter=${filter}`;
    }
    onNextPage(url)
}

async function searchBar() {
    let field = document.querySelector(".search__input");
    let text = field.value.trim().toLowerCase();
    onNextPage(`/catalog?searchBar=${text}`);
}

async function getMarks(id) {
    let marks = await cocktailStorage.getAllMarks(id);
    if (marks.length === 0) {
        return 0;
    }
    return marks.reduce((a, b) => (a + b)) / marks.length;
}
