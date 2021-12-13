


window.onload=function(){
    function tabuada(numero){
        let tabuada = 0;

        if( typeof numero != 'number'){
            alert("digite um valor numerico valido");
        }else {
            if(numero <1 || numero > 10 ){
                alert("digite um valor entre 1 e 10");
            }else{
                    console.log('tabuada do ' +numero);
                while(tabuada <= 10){
                    
                    console.log(`${numero} x ${tabuada} = ${(numero * tabuada)}`);
                    tabuada++;
                }


            }
        }


    }

    tabuada(2);
}

