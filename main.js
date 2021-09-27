let op;
    document.querySelector('#suma').addEventListener('click', () =>{
        op = '+';
    });
    document.querySelector('#resta').addEventListener('click', () =>{
        op = '-';
    });
    document.querySelector('#multiplicacion').addEventListener('click', () =>{
        op = '*';
    });
    document.querySelector('#division').addEventListener('click', () =>{
        op = '/';
    });
    
    document.querySelector('#calcular').addEventListener('click', () =>{
        const v1 = parseInt(document.querySelector('#v1').value);
        const v2 = parseInt(document.querySelector('#v2').value);
        let r;
        if(op == '+'){
            r = v1 + v2;
        }else if( op == '-'){
            r = v1 - v2;
        }else if(op == '*'){
            r = v1 * v2;
        }else if(op == '/'){
            r = v1 / v2;
        }
        document.querySelector('#r').innerHTML = r;
    });
