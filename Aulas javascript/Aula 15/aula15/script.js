//typeof verifica o tipo da variavel

// let m = 5;

// //console.log(typeof m); // verificando o tipo da variavel

// if (typeof m === 'number'){
//     console.log('o dado informado eh um number ' +m);
// }else{
//     console.log('o dado informado nao eh um number ' +m)
// }


window.onload =function(){
    // alert("ola podo do js");
    const botao = document.getElementById('btn');
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa");

    botao.addEventListener('click', function(){
        caixa.innerHTML += " "+ txtBox.value +' ';// envia o valor text box para div
})

}