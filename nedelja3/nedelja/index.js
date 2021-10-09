//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
console.log(`---------------zadatak 1------------`)

//Imam dva resenje za ovaj zadatak!!



console.log(`------resenje 1 prvi zadatak----`)

{  
    
    function deljiviSa5(niz){
        let temp = []    //imam promenjivu niz u koji cu da push
      
    for(let i = 0; i < niz.length; i++){
       if(niz[i] % 5 == 0 || niz[i] == 5)

       temp.push(niz[i])           
      
    }     
    console.log(temp)   // f-ja ispisuje
}


let niz = [15,2,3,4,5,45,40,105,44,25]

deljiviSa5(niz)

}


console.log(`------resenje 2 prvi zadatak----`)


{
let niz1 = [15,2,3,4,5,45,40,105,44,25]

function deljiviSa5 (niz){
    let noviNiz = niz.filter((broj)=>{    //filter
            return broj % 5 == 0
    })
    console.log(noviNiz)  // posto pise zadatak da f-ja ispisuje
}



deljiviSa5(niz1)

}





//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
    // * Ime 
    // * Vrsta 
    // * Sposobnosti (niz sposobnosti pokemona) 
    // * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

    //(Napraviti niz od ovih objekata)

console.log(`---------------zadatak 2------------`)



let pokemon1 = {
    ime: 'Bulbasaure',
    vrsta: 'biljni',
    sposobnosti: ['napad', 'odbrana', 'otrov'],
    karakteristike: {
        napad: 4,
        odbrana: 4,
        brzina: 3

    }
}

let pokemon2 = {
    ime: 'Charizard',
    vrsta: 'vatreni',
    sposobnosti: ['plamen', 'vatra'],
    karakteristike: {
        napad: 6,
        odbrana: 4,
        brzina: 8
    }
}

let pokemon3 = {
    ime: 'Squirtle',
    vrsta: 'vodeni',
    sposobnosti: ['voda', 'specijalna odbrana'],
    karakteristike: {
        napad: 7,
        odbrana: 5,
        brzina: 2
    }
}

let pokemon4 = {
    ime: 'Jigglypuff',
    vrsta: 'leteci',
    sposobnosti: ['balon napad', 'sarm', 'takmicenje'],
    karakteristike: {
        napad: 2,
        odbrana: 2,
        brzina: 1
    }
}


let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]

console.log(pokemoni)





//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

console.log(`---------------zadatak 3------------`)



function samoSposobnosti(niz){

    let temp = []
    for(let i = 0; i < niz.length; i++){
        temp.push(niz[i].sposobnosti.join())   // lepse mi izgleda sa join u jedan niz
    }

    return temp
}

console.log(samoSposobnosti(pokemoni))





//4. Sortirati pokemone po brzini, rastuće.
console.log(`---------------zadatak 4------------`)


function sortPokemona (niz){

    let sortedNiz = niz.sort((a, b) => 
        a.karakteristike.brzina - b.karakteristike.brzina );

    return sortedNiz

}

console.log(sortPokemona(pokemoni))







//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.
console.log(`---------------zadatak 5------------`)


//Ovo je jedno moje improvizovano resenje, ali isprobam i radi pa je valjda dobro. 



function najjaciPokemon(niz){
    
    let temp = []
    let max = []

    for(let i = 0; i < niz.length; i++){
        max.push(niz[i].karakteristike.napad)
    }
    
    max = Math.max.apply(Math, max)

       for(let j=0; j<niz.length;j++){

        if(niz[j].karakteristike.napad == max){
            temp.push(niz[j])
           

       }
      
     }

     return temp


  
}


console.log(`Pobednik je pokemon: `)
console.log(najjaciPokemon(pokemoni))










