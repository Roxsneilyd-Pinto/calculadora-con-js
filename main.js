const val1 = document.querySelector('#v1')
const val2 = document.querySelector('#v2')
const result = document.querySelector('#r')
let op;
document.querySelector('#suma').addEventListener('click', () => {
    op = '+';
});
document.querySelector('#resta').addEventListener('click', () => {
    op = '-';
});
document.querySelector('#multiplicacion').addEventListener('click', () => {
    op = '*';
});
document.querySelector('#division').addEventListener('click', () => {
    op = '/';
});

document.querySelector('#calcular').addEventListener('click', () => {
    var v1 = parseInt(document.querySelector('#v1').value);
    var v2 = parseInt(document.querySelector('#v2').value);
    let r;
    if (op == '+') {
        r = v1 + v2;
    } else if (op == '-') {
        r = v1 - v2;
    } else if (op == '*') {
        r = v1 * v2;
    } else if (op == '/') {
        r = v1 / v2;
    }
    document.querySelector('#r').value = r;
});

const isvalid = (elemento,type) => (elemento != type) ? true:false

