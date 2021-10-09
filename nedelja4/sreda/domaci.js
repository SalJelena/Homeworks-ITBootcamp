//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.



let pokemoni = [

    {
        ime: 'Bulbasaure',
        vrsta: 'biljni',
        sposobnosti: ['napad', 'odbrana', 'otrov'],
        karakteristike: {
            napad: 4,
            odbrana: 4,
            brzina: 3

        }
    },

    {
        ime: 'Charizard',
        vrsta: 'vatreni',
        sposobnosti: ['plamen', 'vatra'],
        karakteristike: {
            napad: 6,
            odbrana: 4,
            brzina: 8
        }
    },

    {
        ime: 'Squirtle',
        vrsta: 'vodeni',
        sposobnosti: ['voda', 'specijalna odbrana'],
        karakteristike: {
            napad: 7,
            odbrana: 5,
            brzina: 2
        }
    },

    {
        ime: 'Jigglypuff',
        vrsta: 'leteci',
        sposobnosti: ['balon napad', 'sarm', 'takmicenje'],
        karakteristike: {
            napad: 2,
            odbrana: 2,
            brzina: 1
        }
    }
]




const divPokemoni = document.querySelector('.pokemoni')

const buttonPokretac = document.createElement('button')
buttonPokretac.className = 'pokretac'
buttonPokretac.textContent = 'Izaberi svog pokemona igraca'

divPokemoni.append(buttonPokretac)

const resetDugme = document.createElement('button')
resetDugme.className = 'reset-dugme'
resetDugme.textContent = 'RESET'

divPokemoni.append(resetDugme)

buttonPokretac.addEventListener('click',(event) =>{
   
    event.preventDefault();
    


    pokemoni.forEach(pokemon => {


        let divPrvi = document.createElement('div')
        divPrvi.className = 'prvi'
    
        let button1 = document.createElement('button')
        button1.className = 'buttonPrvi'
        button1.textContent = `${pokemon.ime}`
    
        divPrvi.appendChild(button1)
        divPokemoni.append(divPrvi)

       
         
       

        button1.addEventListener('click', (event) => {
            button1.textContent = ''
           
            let divPok = document.createElement('div')
            divPok.className = 'divPok'

            let divPar = document.createElement('p')
            divPar.className = 'divPar'
         
            divPar.textContent = `Ime: ${pokemon.ime}. Vrsta: ${pokemon.vrsta}. Sposobnosti: ${pokemon.sposobnosti}. Karakteristike - napad: ${pokemon.karakteristike.napad}, odbrana: ${pokemon.karakteristike.odbrana}, brzina: ${pokemon.karakteristike.brzina}`
           
            let buttonIzaberi = document.createElement('button')
            buttonIzaberi.textContent = 'Izaberi me!'
            buttonIzaberi.className = 'izaberi-button'

            button1.append(divPar,buttonIzaberi)
           
            divPrvi.append(divPok)
           
        })
        
                

    })
   
 
})


buttonPokretac.addEventListener('click',()=>{
    buttonPokretac.remove()
})


 
const divPokemoni2 = document.querySelector('.protivnik')

const buttonProtivnik = document.createElement('button')
buttonProtivnik.className = 'protivnik'
buttonProtivnik.textContent = 'Izaberi pokemona protivnika'

divPokemoni2.append(buttonProtivnik)




buttonProtivnik.addEventListener('click',()=>{


    pokemoni.forEach(pokemon => {


        let divDrugi = document.createElement('div')
        divDrugi.className = 'drugi'
    
        let button2 = document.createElement('button')
        button2.className = 'buttonDrugi'
        button2.textContent = `${pokemon.ime}`
    
        divDrugi.appendChild(button2)
        divPokemoni2.append(divDrugi)

        button2.addEventListener('click', () => {
            button2.textContent = ''

            let divPok2 = document.createElement('div')
            divPok2.className = 'divPok'

            let divPar2 = document.createElement('p')
            divPar2.className = 'divPar'

            divPar2.textContent = `Ime: ${pokemon.ime}. Vrsta: ${pokemon.vrsta}. Sposobnosti: ${pokemon.sposobnosti}. Karakteristike - napad: ${pokemon.karakteristike.napad}, odbrana: ${pokemon.karakteristike.odbrana}, brzina: ${pokemon.karakteristike.brzina}`

            let buttonIzaberi = document.createElement('button')
            buttonIzaberi.textContent = 'Izaberi me!'
            buttonIzaberi.className = 'izaberi-button'

            buttonIzaberi.addEventListener('click',()=>{
                
                let izabranik2 = document.createElement('p')
                izabranik2.textContent = `Izabrali ste za protivnika: ${pokemon.ime}`
                buttonIzaberi.append(izabranik2)
            })


            button2.append(divPar2, buttonIzaberi)
            divDrugi.append(divPok2)

    })
    
        })


      
    
})

buttonProtivnik.addEventListener('click',()=>{
    buttonProtivnik.remove()
})




        