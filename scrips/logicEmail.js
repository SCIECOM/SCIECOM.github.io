var boton = document.getElementById("Enviar")
boton.addEventListener('click', seend);
function seend() {
    var text = document.getElementById("mensaje")
    var email = 'sem.sciecom@gmail.com'
    var malito_link = 'mailto:' + email + '?subject=' + 'Quiero Informarme&body=%20' + text.value
    window = window.open(malito_link, 'emailWindow')

    var boton = document.getElementById("Enviar")
    boton.onclick = function () {
        text.remove()
    }

    if (window && window.open && !window.closed)
        window.close()
}
