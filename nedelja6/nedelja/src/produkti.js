

//ProductGroup 

export class ProductGroup {
    title
    vat

    constructor(title, vat){
    
        this.title = title
        this.vat = vat
    }

    get title(){
        return this.title 
    }

    get vat(){
        return this.vat
    }

    set title(title){
        this.title = title
    }

    set vat(vat){
        if(vat > 0 && vat < 100)  this.vat = vat
      
    }
}


//Product 


export class Product {
    barCode
    title
    price
    group 

    constructor(barCode, title, price, group){
        this.barCode = barCode 
        this.title = title 
        this.price = Number(price)
        this.group = group 
    }


    get barCode(){
        return this.barCode
    }
    get title(){
        return this.title
    }
    get price(){
        return this.price
    }
    get group(){
        return this.group
    }
    

    set barCode(barCode){
        this.barCode = barCode
    }
    set title(title){
        if(title.trim() != '') this.title = title
    }
    set price(price){
        if(Number(price) > 0) this.price = price
    }
    set group(group){
        this.group = group
    }
}



// Item in the cart

export class ShoppingCartItem{
    product
    quantity

    constructor(product, quantity){
        this.product = product
        this.quantity = quantity
    }
    get product() {
        return this.product;
    }
    get quantity() {
        return this.quantity;
    }
    set product(product) {
        this.product = product;
    }
    set quantity(quantity) {
        this.quantity = quantity;
    }
}



// cart


export class ShoppingCart {
    items

    constructor(){
        this.items = []
    }

    addProduct(product, quantity = 1){
        //Checking if it already exists in the array, and pushing it if not, increasing the quantity of the certain item if it does exist already

        let item = this.items.find((p) => product.title == p.product.title) 
        
        if(!item){

            this.items.push(new ShoppingCartItem(product, quantity))

        }else{
        
            item.quantity += quantity
        }

    }


}


// Checkout


export class Checkout {

    printCheck(shoppingCart){


        const divContainer = document.querySelector('.container')
        const tableCheck = document.querySelector('.tbody')


        //Creating in the table for each item description/price/etc.

        shoppingCart.items.forEach(item => {
            
            let tableRow = document.createElement('tr')
            tableRow.className = 'table-row'

            //I must select them with . by descending order to get to the item part I want to see
            tableRow.innerHTML = `<td>${item.product.group.title}</td>
            <td class ="title-item">${item.product.title}</td>
            <td>${item.product.price}</td>
            <td>${item.quantity}</td>
            <td>${item.product.group.vat}</td>
            <td>${item.quantity * item.product.price}</td>
            
            `
            tableCheck.append(tableRow)

        });

        // creating total of VAT and SUM (I tried with foreach, but this is maybe better solution.)

        let vatTotal = shoppingCart.items.reduce((sum, item) => {
            return Math.floor((sum + ((item.quantity * item.product.price) * (item.product.group.vat / 100) )))
        }, 0)
        
        

        let sumTotal = shoppingCart.items.reduce((sum, item) => {
            return (sum + ((item.quantity * item.product.price) + (item.product.group.vat / 100) ))
        }, 0)

        let vatTotalProcenti = Math.floor((vatTotal / sumTotal) * 100)

        //creating DOM final TOTAL, SUM

        const totalIznos = document.createElement('table')
        totalIznos.className = 'tableSUM'
        totalIznos.innerHTML = `<tr><td>VAT ${vatTotal} (${vatTotalProcenti}%) </td></tr>  
        <tr><td>TOTAL  ${sumTotal} </td></tr>
        `
        divContainer.append(totalIznos)

    }

}



