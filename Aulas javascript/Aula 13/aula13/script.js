
//exemplo de for simples
// let i=2;
// for(let x=0; x<=10; x++){
//     console.log(`o valor da interaçao e ${x} o x mais ele mesmo ${i++}`);
// }


// exemplo de for in
// let Pessoas = {
//     nome: 'steven universo',
//     idade: '90',
//     heroi: 'capitao',
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);
// }

// console.log(Pessoas);



// let frutas = ["melancia","manga", "banana", "uva"];

// for(let nomeFrutas of frutas){ //for of
//     console.log(nomeFrutas);
// }

// for(let x=0; x< frutas.length; x++){ //como seria um for do for off acima
//     console.log(`o nome da fruta eh ${frutas[x]}`);
// }


let Herois = [{
        identidade: 'steven roger',
        heroi: 'capitao america',
    
    },
    {
        identidade: 'peter',
        heroi: 'homem aranha',
    
    }
];

// let marvel = Herois[0].identidade;
// console.log(marvel);

Herois.push({identidade: "clark", heroi:"superman"});

for(let marvel of Herois){
    // console.log(marvel);
    for(let m in marvel){
        console.log(marvel[m]);
    }
}