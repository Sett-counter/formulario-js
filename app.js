document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoa = parseInt(document.getElementById("campoa").value)
    const campob = parseInt(document.getElementById("campob").value)

    if(campob > campoa){
        document.getElementById("mensagem").innerHTML = "formulario valido, o campo B é maior que campo A"
        document.getElementById("mensagem").style.color = "green"
    } else {
        document.getElementById('mensagem').innerHTML = "formulario invalido, o campo B não é maior que o campo A"
        document.getElementById('mensagem').style.color = "red"
    }
});