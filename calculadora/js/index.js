alert('Bienvenido usuario');

let confirmacion = false;

do {
    do {
        operacion = prompt('Indica la operació que desea realizar, + , - , * , /');
        switch (operacion) {
            case '+':
                confirmacion = true;
                break;
            case '-':
                confirmacion = true;
                break;
            case '*':
                confirmacion = true;
                break;
            case '/':
                confirmacion = true;
                break;
            default:
                alert('Has introducido un mal operador, pruebe de nuevo');
        }

    } while (confirmacion == false);

let numerosMalos = false;

    do {
        operadores = prompt('Indica los dos numeros separados por un espacio que con los que quieras operar');
        numeros = operadores.split(' ');

        numeros[0] = Number(numeros[0]);
        numeros[1] = Number(numeros[1]);

        if (isNaN(numeros[0]) || isNaN(numeros[1])) {
            alert('Has introducido mal uno o los dos operadores, vuelve a intentarlo');
        }  else {
            numerosMalos == true;
            
            switch (operacion) {
                case '+':
                    alert(numeros[0] + numeros[1]);
                    break;
                case '-':
                    alert(numeros[0] - numeros[1]);
                    break;
                case '*':
                    alert(numeros[0] * numeros[1]);
                    break;
                case '/':
                    alert(numeros[0] / numeros[1]);
                    break;
            }
            nuevaOperacion = prompt('Desea realizar una nueva operacion: "si" para seguir, "no" para salir');
            break;
        }
        
    } while (numerosMalos == false);

} while (nuevaOperacion ==  'si')
