
function create() {
    var e;
    e = document.createElement("br");
    document.body.appendChild(e);

    e = document.createElement("input");
    e.setAttribute("type", "text");
    e.value = window.innerWidth;
    document.body.appendChild(e);

    e = document.createElement("input");
    e.setAttribute("type", "number");
    document.body.appendChild(e);

}