$('#validate').click(function() {

    var cambio = document.querySelector(".global-container");
    var desc = document.querySelector(".desc");
    var portada = document.querySelector(".portadaR")

    if ($('input[value="a1"]').is(':checked') && $('input[value="a2"]').is(':checked')) {
            cambio.classList.toggle("desaparecer");
            desc.classList.toggle("aparecer");
            portada.classList.toggle("aparecer");
        var respuesta = document.querySelector("#R1");
            respuesta.classList.toggle("aparecer");

    }
        else if ($('input[value="a1"]').is(':checked') && $('input[value="b2"]').is(':checked')) {
            cambio.classList.toggle("desaparecer");
            desc.classList.toggle("aparecer");
            portada.classList.toggle("aparecer");
        var respuesta = document.querySelector("#R2");
            respuesta.classList.toggle("aparecer");

        }
        else if ($('input[value="b1"]').is(':checked') && $('input[value="a2"]').is(':checked')) {
            cambio.classList.toggle("desaparecer");
            desc.classList.toggle("aparecer");
            portada.classList.toggle("aparecer");
        var respuesta = document.querySelector("#R3");
            respuesta.classList.toggle("aparecer");

        }
            else if ($('input[value="b1"]').is(':checked') && $('input[value="b2"]').is(':checked')) {
                cambio.classList.toggle("desaparecer");
                desc.classList.toggle("aparecer");
                portada.classList.toggle("aparecer");
            var respuesta = document.querySelector("#R4");
                respuesta.classList.toggle("aparecer");

            }

    else if (!$('input[name="p1"]').is(':checked')) {
        var aviso = document.getElementById('aviso');
    aviso.innerHTML = '<p>Aún no has contestado la pregunta 1</p>';
    }

    else if (!$('input[name="p2"]').is(':checked')) {
        var aviso = document.getElementById('aviso');
    aviso.innerHTML = '<p>Aún no has contestado la pregunta 2</p>';
    }
   
    });