// for local_site
const paths = {
    '/Itirod_project/project/index.html' : [catalog,"scripts/index.js"],
    '/catalog' : [catalog,"scripts/index.js"],
    '/create' : [create,"scripts/create.js"],
    '/item' : [item,"scripts/item.js"],
    '/login' : [log,null],
    '/register' : [reg,null]
};

// const paths = {
//     '/' : [catalog,"scripts/index.js"],
//     '/catalog' : [catalog,"scripts/index.js"],
//     '/create' : [create,"scripts/create.js"],
//     '/item' : [item,"scripts/item.js"],
//     '/login' : [log,null],
//     '/register' : [reg,null]
// };

async function onchangePage(url){

    let scriptContent = paths[url];
    if (scriptContent === undefined){
        return
    }
    content.innerHTML = scriptContent[0]

    let script = document.createElement("script");
    script.src = scriptContent[1];
    content.appendChild(script);
}

window.onpopstate = () => {
    onchangePage(window.location.pathname);
}

const content = document.getElementById("content")
onchangePage(window.location.pathname)

