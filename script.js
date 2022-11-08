function initialization() {
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    let result = document.getElementById('result');

    return [number1,number2,result];
}

function add() {   
    let a = initialization();
    let number3 = a[0] + a[1];
    a[2].innerHTML = number3;
}

function sub() {
    let b = initialization();
    let number4 = b[0] - b[1];
    b[2].innerHTML = number4;
}

function multi() {
    let c = initialization();
    let number5 = c[0] * c[1];
    c[2].innerHTML = number5;
}

function div() {
    let d = initialization();
    if (number2 == 0) {
        d[2].innerHTML = 'Vui lòng nhập số khác 0'
    } else {
        let number6 =  d[0]/d[1];
        d[2].innerHTML = number6;
    }
}