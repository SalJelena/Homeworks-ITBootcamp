/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.

*/

let brzinaPuza = 3
let visinaDrvetaP = 100
let dan = 0
let visinaDrvetaKrajnja = 150;


while (brzinaPuza <= visinaDrvetaP) {
    visinaDrvetaP++
    dan++
    brzinaPuza = brzinaPuza + 3
    console.log(`Dan ${dan}: Puz je presao ${brzinaPuza}, visina drveta ${visinaDrvetaP}`);

}

console.log(`Puz se popeo na drvo za ${dan} dana`);





/*
2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara

*/

let kupac = 'student'
let danUnedelji = 'subota'
let iznos = 5500
let popust;
let vikendPopust;

switch (kupac) {
    case 'zaposleni':
        popust = (iznos*5)/100
        if ((danUnedelji == 'ponedeljak' || danUnedelji == 'utorak' || danUnedelji == 'sreda' || danUnedelji == 'cetvrtak' || danUnedelji == 'petak') && iznos >= 5000) {
            console.log(`Popust je ostvarenih od 5%, i on iznosi ${popust}`);
        } else if ((danUnedelji == 'subota' || danUnedelji == 'nedelja') && iznos >= 5000){
            vikendPopust = (iznos - popust) * 5 / 100
            console.log(`Popust je ostvaren 5%, i dodatnih vikend 5%, i popust iznosi ${vikendPopust}`);
        }else{
            console.log(`Nazalost, nema popusta.`);
        }

        break;
    case 'student':
        popust = (iznos*20)/100
        if ((danUnedelji == 'ponedeljak' || danUnedelji == 'utorak' || danUnedelji == 'sreda' || danUnedelji == 'cetvrtak' || danUnedelji == 'petak') && iznos >= 3000) {

            console.log(`Popust je ostvarenih od 20%, i on iznosi ${popust}`);
        } else if ((danUnedelji == 'subota' || danUnedelji == 'nedelja') && iznos >= 5000) {
            vikendPopust = (iznos - popust) * 5 / 100
            console.log(`Popust je ostvaren 20%, i dodatnih vikend 5%, i popust iznosi ${vikendPopust}`);
        }else{
            console.log(`Nazalost, nema popusta.`);
        }
        break;

    case 'penzioner':
        popust = (iznos*30)/100
        if ((danUnedelji == 'ponedeljak' || danUnedelji == 'utorak' || danUnedelji == 'sreda' || danUnedelji == 'cetvrtak' || danUnedelji == 'petak') && iznos >= 2000) {

            console.log(`Popust je ostvarenih od 30%, i on iznosi ${popust}`);
        } else if ((danUnedelji == 'subota' || danUnedelji == 'nedelja') && iznos >= 5000) {
            vikendPopust = (iznos - popust) * 5 / 100
            console.log(`Popust je ostvaren 10%, i dodatnih vikend 5%, i popust iznosi ${vikendPopust}`);
        }else{
            console.log(`Nazalost, nema popusta.`);
        }
        break;
    case 'firme':
        popust = (iznos*10)/100
        if ((danUnedelji == 'ponedeljak' || danUnedelji == 'utorak' || danUnedelji == 'sreda' || danUnedelji == 'cetvrtak' || danUnedelji == 'petak') && iznos >= 10000) {

            console.log(`Popust je ostvarenih od 10%, i on iznosi ${popust}`);
        } else if ((danUnedelji == 'subota' || danUnedelji == 'nedelja') && iznos >= 5000) {
            vikendPopust = (iznos - popust) * 5 / 100
            console.log(`Popust je ostvaren 10%, i dodatnih vikend 5%, i popust iznosi ${vikendPopust}`);
        }else{
            console.log(`Nazalost, nema popusta.`);
        }
        break;


    default:
        console.log(`Nazalost, nema popusta.`);
        break;
}


