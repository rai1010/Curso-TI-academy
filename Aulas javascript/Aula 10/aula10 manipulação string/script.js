let nome = "Marcelo da Silva";

let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."


// console.log(nome.match('m'));

// console.log(nome.search(/m/i));//     /m/i é para fazer buscar ignorando o case sensitive
// console.log(nome[0])


// let strOutra = str.replace(/i/gi,`y`); //o g faz alterar globalmente o i pelo y e o i apos o g faz alterar ignorando o case sensitive

// console.log(strOutra);

// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(/Gato/gi));

// let num = Number('100');

// console.log(num.toString());// converte number em string

let str2 = "         Lorem, ipsum dolor sit amet consectetur adipisicing elit."


// documento.write(str.trim()+ "<br>");

// console.log(str);
// console.log(str2.trim());// trim remove os espaços

// let num = Number("oio");
// console.log((num));//NaN significa not an number(quando aparece isso é pq nao foi possivel coverter numero pra string)

let valor = 2.4545461;


console.log(valor.toLocaleString('pt-Br',{style: 'currency', currency: 'BRL'})); // converte o valor para moeda especificada

