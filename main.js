function changeInfo(link) {
    closeLeft(); //Colapsa el menu de la izquierda
    //Carga el contenido de la pagina
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("Text").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", link);
    xhttp.send();
}

function closeLeft() {
    //Colapsa el menu de la izquierda
    document.getElementById("leftb").style.display = "none";
    //Ajusta el tamaño del resto de la pagina
    document.getElementById("mid").style.marginLeft = "0%";
    document.getElementById("mid").style.width = "100%";
}