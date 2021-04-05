function getURLParam(param) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let value = urlParams.get(param);
    return value;
}

function setFilter(filter) {
    let sort = getURLParam('sort');
    let url = `/Itirod_project/project/catalog?filter=${filter}`;
    if (sort != null) {
        url += `&sort=${sort}`;
    }
    onNextPage(url)
}

function setSort(sort) {
    let filter = getURLParam('filter');
    let url = `/Itirod_project/project/catalog?sort=${sort}`;
    if (filter != null) {
        url += `&filter=${filter}`;
    }
    onNextPage(url)
}

async function searchBar() {
    let field = document.querySelector(".search__input");
    let text = field.value.trim().toLowerCase();
    onNextPage(`/Itirod_project/project/catalog?searchBar=${text}`);
}

function getMarks(item) {
    let marks = Object.values(item.item.marks);
    if (marks.length === 0) {
        return 0;
    }
    let mm = []
    marks.forEach((item) => {
        mm.push(item.value)
    })
    return mm.reduce((a, b) => (a + b)) / marks.length;
}
