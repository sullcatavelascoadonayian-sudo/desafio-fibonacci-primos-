document.getElementById("btnCalcular").addEventListener("click", function(){

    let cantidad = parseInt(document.getElementById("cantidad").value);

    if(cantidad <= 0 || isNaN(cantidad)){

        document.getElementById("resultado").innerHTML =
        "⚠️ Ingrese una cantidad válida";

        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let resultado = "";

    let total = 0;

    for(let i = 1; i <= cantidad; i++){

        resultado +=
        "💰 Mes " + i +
        " → Ahorro: <span>Bs. " + b + "</span>";

        if(esPrimo(b)){

            resultado +=
            " 🔐 Cantidad Prima";

        }

        resultado += "<br><br>";

        total += b;

        c = a + b;

        a = b;

        b = c;
    }

    resultado +=
    "<hr><br>" +
    "💵 TOTAL AHORRADO: <span>Bs. " + total + "</span>";

    document.getElementById("resultado").innerHTML = resultado;

});

function esPrimo(numero){

    if(numero < 2){
        return false;
    }

    let contador = 0;

    for(let i = 1; i <= numero; i++){

        if(numero % i == 0){

            contador++;

        }

    }

    if(contador == 2){

        return true;

    }else{

        return false;

    }

}