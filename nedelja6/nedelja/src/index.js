/**
Zadatak
Treba implementirati simulaciju kupovine.

U kupovini najpre postoje grupe proizvoda (ProductGroup), svaka grupa ima sledeca polja:
    - title (naziv grupe, string koji nije prazan)
    - vat (Value Added Tax ili na srpskom PDV, decimalni broj veci od nule manji od 100
        predstavlja visinu PDV-a izrazenog u procentima koju ima svaki proizvod koji pripada grupi)

Tu su i proizvodi (Product), svaki proizvod karakterise sledece:
    - barCode (Bar kod proizvoda, celobrojna vrednost koja je veca od nule)
    - title (naziv proizvoda, string koji nije prazan)
    - price (decimalna vrednost veca od nule, predstavlja cenu proizvoda BEZ PDV-a!!!!!!)
    - group (polje koje ukazuje na grupu kojoj proizvod pripada)

Prilikom kupovine kreira se korpa (ShoppingCart) koja sadrzi stavke (ShoppingCartItem).
Svaka korpa (ShoppingCart)  u sebi moze da ima vise stavki (ShoppingCartItem - a) i cuva ih u atributu "items".

Svaka stavka korpe (ShoppingCartItem) sadrzi sledece:
    - product (polje koje ukazuje na proizvod)
    - quantity (decimalna vrednost veca od nule, koja ukazuje na kolicinu proizvoda u korpi)

Svaka korpa (ShoppingCart) treba da ima sledecu funkcionalnost:
    - addProduct(product, quantity = 1) - metoda kojom se neki proizvod (product)
        dodaje u korpu za odredjenu kolicinu (quantity). Prilikom dodavanja u korpu, ukoliko proizvod nije ranije bio dodat kreira se nova stavka korpe (ShoppingCartItem) i upisuje se kolicina koja se dodaje.
        Ukoliko je proizvod ranije vec dodat u korpu, u stavci na kojoj se nalazi proizvod uvecava se postojeca kolicina za onu koju dodajemo.

Na kraju kupovine odlazi se na kasu (Checkout).
Kasa (Checkout) ima mogucnost da stampa fiskalni racun za korpu kroz sledecu funkcionalnost:
    - printCheck(shoppingCart)
Fiskalni racun se stampa u HTML tabeli koja ima sledeci format (data vam je html struktura sa tabelom samo sa hederom):

*********************************************************************************************
Prod Group	        Product	                Price	        Quantity	    VAT	    Subtotal

Mlecni proizvodi	Mleko	                100	            2	            20	    200
Mlecni proizvodi	Pavlaka	                50	            2	            10	    100
Bezalkoholno pice	Sok od pomorandze 1l	120	            6	            40  	720
Sveze meso	        Juneci but kg	        800	            0.5	            30	    400
Konditori	        Cokolada Milka 300g	    280	            3	            100	    840

VAT/TOTAL	200/2260
*********************************************************************************************

Jedan red u tabeli predstavlja jednu stavku iz korpe.
U koloni "Prod. Group" se upisuje naziv grupe proizvoda.
U koloni "Product" se upisuje naziv proizvoda.
U koloni "Price" upisuje se cena po komadu SA PDV-om!!!
U koloni "Quantity" upisuje se kolicina proizvoda u korpi tj stavci korpe.
U koloni "VAT" upisuje se ukupan porez za unetu kolicinu proizvoda
U kolonu "Subtotal" upisuje se ukupan iznos za unetu kolicinu proizvoda.

Nakon ispisa stavki tabele u tfoot-u tabele ispisuje se ukupan porez i ukupnan iznos za celu korpu, u poslednje dve kolone.


Kreirati dve grupe proizvoda i 4 proizvoda.
Kreirati jednu korpu.
Dodati svaki proizvod u korpu vise puta.
Kreirati kasu i prikazati fiskalni racun.
 */

// let obj = {
//     name: "Danilo",
//     lastName: "strahinovic",
//     group: {    //group instanceof ProductGroup

//     }
// }

// let group = new ProductGroup('Title', 20)

// let proizvod = new Product("title", 500, 101001, group)


//-----------------------------------------------------------------


//EN BREF - 
// Treba kreirati - 
//ProductGroup(title, vat), 
//Product(barCode, title, price, group), 
//ShoppingCartItem(product, quantity), 
//ShoppingCart( metoda - addProduct)
//Checkout ( metoda - printCheck(shoppingCart))


//-------------------------------------------------------------


// importing from module

import { ProductGroup, Product, ShoppingCartItem, ShoppingCart, Checkout } from "./produkti.js";


// creating new GROUPS, ITEMS and checkout

let mlecniProizvodi = new ProductGroup('Mlecni proizvodi', 11)
let bezalkoholnaPica = new ProductGroup('Bezalkoholna pica', 15)
let svezeMeso = new ProductGroup('Sveze meso', 19)


let sir = new Product(123456, 'Sir', 60, mlecniProizvodi)
let sok = new Product(1234, 'Sok', 89.99, bezalkoholnaPica)
let jogurt = new Product(34567, 'Jogurt', 44, mlecniProizvodi)
let caj = new Product(78965, 'Caj', 156.77, bezalkoholnaPica)
let kafa = new Product(89076, 'Kafa', 290, bezalkoholnaPica)
let govedjeMeso = new Product(37897, 'Govedje meso', 550, svezeMeso)


let cart = new ShoppingCart()

let invoice = new Checkout()

//adding items to cart with method addProduct
//Method accepts two parameters : product, quantity. If quantity not added, it will be by default 1

cart.addProduct(sir, 2)
cart.addProduct(sok, 4)
cart.addProduct(jogurt, 1)
cart.addProduct(sir, 2)
cart.addProduct(sok, 3)
cart.addProduct(govedjeMeso, 0.5)
cart.addProduct(caj, 5)
cart.addProduct(kafa, 1)



//printing receipt

invoice.printCheck(cart)

