/*let num = 5;

function test(){
    if (true){
        let num = 10;
    }
    return num;
}
test();
console.log(num);*/

/*function sumar (a,b){
    if ((a>0) && (b>0)){
        return a + b;
    }
}*/

/*let a = 2;
let b = '3';

console.log(a + b);*/

let day = 'Martes';
let message = '';

switch (day) {
    case 'Lunes':
        message = 'Es Lunes';
    case 'Martes':
        message = 'Es Martes';
    case 'Miercoles':
        message = 'Miercoles';

    default:
        message ='Es otro dia de la semana';
}

console.log(message);