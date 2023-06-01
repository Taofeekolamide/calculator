function clearEquation() {
    document.getElementById("show").value = "";
}

function dis(cam) {
    document.getElementById("show").value += cam;
}

function eva() {
    var a = document.getElementById("show").value;
    var p = eval(a)
    document.getElementById("show").value = p
}