
//while
// let loop= 0;
// let cores = ["verde ", "vermelho"];

// while(loop < cores.length){

//     console.log(cores[loop]);
//     loop++;
// }


let teste=0;

do{

    teste = Number(prompt("digite o para sair"));
    switch(teste){
        case 0:
            alert("saindo do sistema");
        break;

        case 1:
            alert("cadastrando");
        break;

        case 2:
            alert("consultando");
        break;

        default:
            alert("opcao invalida");
        break;
    }

}while(teste != 0);