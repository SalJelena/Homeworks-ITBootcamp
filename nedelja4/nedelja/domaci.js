/**
 *
 * 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
 * 
 * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
 *
 * 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
 */






//1. zadatak - Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.




const tabela = document.querySelector('.tabela')
const tableHead = document.querySelector('.table-row')
const tableData = document.querySelector('.table-row-data')

const btnDodajRed = document.createElement('button')
btnDodajRed.textContent = 'Dodaj red'
btnDodajRed.classname = 'btn'

tableHead.appendChild(btnDodajRed)

function dodajRed(tabela) {

    btnDodajRed.addEventListener('click', () => {

        let noviRed = tabela.insertRow(tabela.length)
        let data1 = noviRed.insertCell(0)

    })


}

dodajRed(tabela)





//2. zadatak - Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
//3. zadatak -  Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.

//Napomena: Uradila sam oba zadatka odjednom, u jednom ovde, da ne bi dolazilo do dva ispisa na stranici, ovako mi nekako bilo lakse. 




const divSabiranje = document.querySelector('.div-sabiranje')
const broj1 = document.querySelector('#broj-1')
const broj2 = document.querySelector('#broj-2')

const btnSabiranje = document.createElement('button')
btnSabiranje.textContent = 'Saberi'
btnSabiranje.classname = 'btn-sabiranje'

divSabiranje.appendChild(btnSabiranje)

const checkboxDugme = document.querySelector('#check-box')
checkboxDugme.checked = true

function sabiranjeBrojeva(broj1, broj2) {
    btnSabiranje.addEventListener('click', (event) => {

        let zbir = Number(broj1.value) + Number(broj2.value)
        let p = document.createElement('p')
        p.classname = 'zbirSabiranje'
        p.textContent = `Zbir dva broja je: ${zbir}`
        
            checkboxDugme.addEventListener('change', () => {
                if (checkboxDugme.checked == true) {               
                    divSabiranje.append(p)
                } else if (checkboxDugme.checked != true) {
                    p.remove()
                }

        })

        divSabiranje.append(p)

    })

}

sabiranjeBrojeva(broj1, broj2)




//GITHUB: https://github.com/SalJelena/JSDOM