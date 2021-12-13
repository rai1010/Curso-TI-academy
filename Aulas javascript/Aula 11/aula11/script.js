// function Pessoa(nome){

//     this.nome = nome;

    
// }

// let NovaPessoa = new Pessoa("jose");
// let OutraPessoa = new Pessoa("juanita");


// // console.log(NovaPessoa.nome);

// Pessoa.prototype.msg = function(){
    
//         alert("ola " + this.nome);

// }

// NovaPessoa.msg();
// OutraPessoa.msg();
// console.log(NovaPessoa);


let Pessoa2 = {
    'nome':'',
    'idade':''
}

// console.log(Pessoa2);

// Pessoa2.__proto__.msg = function(){
//     alert("ola "+ Pessoa2.nome);
// }


// let P = Pessoa2;
// P.nome = 'marcelo';
// P.msg();
// console.log(P);


let Pessoa3 = [
    {
        'nome' : 'marcelo',
        'idade' : 36,
        'sexo' : 'm'
    },
    {
        'nome' : 'Suelem',
        'idade' : 30,
        'sexo' : 'm'
    },
    {
        'nome' : 'bankai',
        'idade' : 30,
        'sexo' : 'm'
    }
]

let NovaPessoa = Pessoa3;

console.log(`existem ${Pessoa3.length} cadastrada` );

// console.log(NovaPessoa[1].nome);