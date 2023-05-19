
function calcularCuotas() {
    var precioContado = parseFloat(document.getElementById("precioContado").value);
    var precioCuotas = parseFloat(document.getElementById("precioCuotas").value);
    var inflacionMensual = parseFloat(document.getElementById("inflacionMensual").value);
    var cuotas = parseInt(document.getElementById("cuotas").value);

    var precioContadoCorregido = precioContado * Math.pow((1 + inflacionMensual / 100), cuotas);

    var ahorroContado = precioContadoCorregido - precioCuotas;
    var ahorroCuotas = precioCuotas - precioContadoCorregido;
    var porcentajeAhorroContado = (ahorroContado / precioContadoCorregido) * 100;
    var porcentajeAhorroCuotas = (ahorroCuotas / precioCuotas) * 100;
    var montoCuota = precioCuotas / cuotas;
    var tasaRecargo = ((precioCuotas - precioContado) / precioContado) * 100;
    var inflacionTotal = Math.pow((1 + inflacionMensual / 100), cuotas);

    var cuotasAjustadas = [];
    var cuotaActual = montoCuota;
    var sumatoriaCuotas = 0;
    for (var i = 0; i < cuotas; i++) {
        cuotasAjustadas.push(cuotaActual.toFixed(2));
        sumatoriaCuotas += cuotaActual;
        cuotaActual /= (1 + inflacionMensual / 100);
        cuotaActual = Math.round(cuotaActual * 100) / 100;
    }

    document.getElementById("respuesta").innerHTML = (precioCuotas < precioContadoCorregido) ? "La mejor opción es Pagar en cuotas." : "La mejor opción es Pagar al contado.";
    document.getElementById("montoCuota").innerHTML = "Monto de cada cuota: $" + montoCuota.toFixed(2);
    document.getElementById("tasaRecargo").innerHTML = "Tasa de recargo: " + tasaRecargo.toFixed(2) + "%";
    document.getElementById("inflacion").innerHTML = "Inflación mensual estimada: " + inflacionMensual + "%";
    document.getElementById("sumatoriaCuotas").innerHTML = "Sumatoria de las cuotas ajustadas a valor de hoy: $" + sumatoriaCuotas.toFixed(2);

    var seccion = document.getElementById("respuestaContainer");
    seccion.style.display = "block";

    var cuotasGrid = "<div class='cuotas-grid'>";
    for (var i = 0; i < cuotas; i++) {
        cuotasGrid += "<div class='cuota'><span class='cuota-label'>Cuota #" + (i + 1) + "</span><span class='cuota-amount'<br><br>$" + cuotasAjustadas[i] + "</span></div>";
    }
    cuotasGrid += "</div>";
    document.getElementById("cuotasAjustadas").innerHTML = "Cuotas ajustadas por la inflación acumulada mes a mes:<br><br>" + cuotasGrid;
}



