// //llamada de prueba

// $.ajax({
//     url: 'https://geoportal.valencia.es/geoportal-services/api/v1/salidas-metro.html?estacion=18',
//     method: 'GET',
//     success: function(response) {
//         // Handle the API response here
//         $('iframe').attr("src",response);
//     },
//     error: function(xhr, status, error) {
//         // Handle errors here
//         console.error(status, error);
//     }
// });

//AÑADIR ESTACIONES AL DATALIST DESPLEGABLE
$(document).ready(function() {
    const stops = require('./data_json/stops.json');
    console.log($("datalist#estaciones"));
    
    stops.forEach(stop => {
        var opt = document.createElement("option");
        opt.value = stop.stop_name;
        opt.id = stop.stop_id;
        opt.text = stop.stop_name;
        $("datalist#estaciones").append(opt);
    });
    $("#buscar").on("click", () => {
        if ($("input#estaciones").value && $("input#estaciones").value != "" && $("input#estaciones").value != null && $("input#estaciones").value != 0) {
            //hay estación
            const est = stops.filter((stop) => {
                return stop.stop_id == $("input#estaciones").value
            });
            if(est != 0 && est != null && est != ""){
                $("#titulo").html(est.stop_name);
                var urlInfo = '<iframe src="https://geoportal.valencia.es/geoportal-services/api/v1/salidas-metro.html?estacion='+ $("input#estaciones").value +'" frameborder="0" style="display:block; width:100vw; height:100vh;"></iframe>';
                $("#infoparada").html(urlInfo);
            } else {
                alert("No se ha seleccionado ninguna estación");
            }
        } else {
            alert("No se ha seleccionado ninguna estación");
        }
    });
        
});





