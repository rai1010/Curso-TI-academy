let nomes = ["suelem", "marcelo", "rafael", "jose", "marcos"];

const coisaNomes = (name, novoNome, index )=>{

    console.log("quantidade de elementos do array...: ", name.length);
    console.log(`voce escolheu o idice ${index} que é o elemento ${name[index]}`);
    console.log(`o nome ${novoNome} foi inserido no array`);
    name.push(novoNome);
    console.log("a quantidade de elementos atual do array e de..: ", name.length);
}

coisaNomes(nomes, "marinei", 4);
coisaNomes(nomes, "dulceneia",2);