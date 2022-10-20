let suma = (a, b) => a+b;
let resta = (a, b) => a-b;
let producto = (a, b) => a*b;
let division = (a, b) => a/b;

let operar = function(){
    let numerosMalos = false;

    operadores = prompt('Indica los dos numeros separados por un espacio que con los que quieras operar');
    numeros = operadores.split(' ');

    numeros[0] = Number(numeros[0]);
    numeros[1] = Number(numeros[1]);
    
    do {

        if (isNaN(numeros[0]) || isNaN(numeros[1])) {
            alert('Has introducido mal uno o los dos operadores, vuelve a intentarlo');
        }  else {
            return numeros;
        }
    } while (numerosMalos == false);
};

function operandor() {
    let confirmacion = false;
    do {
        operacion = prompt('Indica la operació que desea realizar, + , - , * , /');
        switch (operacion) {
            case '+':       
                confirmacion = true;
                return operacion;
            case '-':
                confirmacion = true;
                return operacion;
            case '*':
                confirmacion = true;
                return operacion;
            case '/':
                confirmacion = true;
                return operacion;
            default:
                alert('Has introducido un mal operador, pruebe de nuevo');
        }
        
    } while (confirmacion == false);


}

// ======== pagina =============

alert('Bienvenido usuario');

operandor();

do {
   
    operar();
    switch (operacion) {
        case '+':
            alert(suma(numeros[0], numeros[1]));
            break;
        case '-':
            alert(resta(numeros[0], numeros[1]));
            break;
        case '*':
            alert(producto(numeros[0], numeros[1]));
            break;
        case '/':
            alert(division(numeros[0], numeros[1]));
            break;
    }
    nuevaOperacion = prompt('Desea realizar una nueva operacion: "si" para seguir, "no" para salir');
       
    console.log(nuevaOperacion);

} while (nuevaOperacion ==  'si')

