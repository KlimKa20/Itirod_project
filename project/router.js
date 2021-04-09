// for local_site
// const paths = {
//     '/Itirod_project/project/index.html': [catalog, "scripts/index.js"],
//     '/Itirod_project/project/catalog': [catalog, "scripts/index.js"],
//     '/Itirod_project/project/create': [create, "scripts/create.js"],
//     '/Itirod_project/project/item': [item, "scripts/item.js"],
//     '/Itirod_project/project/login': [log, null],
//     '/Itirod_project/project/reg': [reg, null],
//     '/Itirod_project/project/notFound': [notFound, null]
// };

const paths = {
    '/': [catalog, "scripts/index.js"],
    '/catalog': [catalog, "scripts/index.js"],
    '/create': [create, "scripts/create.js"],
    '/item': [item, "scripts/item.js"],
    '/login': [log, null],
    '/reg': [reg, null],
    '/notFound': [notFound, null]
};

function getPath(url) {
    let index = url.indexOf('?');
    if (index !== -1) {
        return url.slice(0, index);
    }
    return url;
}

async function onchangePage(url) {
    let path = getPath(url)
    let scriptContent = paths[path];
    if (scriptContent === undefined) {
        onNextPage('/notFound')
        return
    }
    content.innerHTML = scriptContent[0]

    let script = document.createElement("script");
    if (scriptContent[1] != null) {
        script.src = scriptContent[1];
        content.appendChild(script);
    }
}

window.onpopstate = () => {
    onchangePage(window.location.pathname);
}
window.onload = function () {
    authObject.isAuth();
};
const content = document.getElementById("content")

const onNextPage = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    onchangePage(pathname);
}
onchangePage(window.location.pathname)

