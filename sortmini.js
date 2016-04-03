
function return_onclick(){
    window.location.href="startpage.html";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("picture", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("picture");
    document.getElementById(data).style.position = "relative";
    document.getElementById(data).style.left = "inherit";
    document.getElementById(data).style.top = "inherit";
    ev.target.appendChild(document.getElementById(data));
}
