// 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
console.log(`---------------zadatak 1------------`)



{

    
    let zbir = 0
    let  proizvod = 1
    let temp = []

    function mathOperation(niz){
      
      
    for(let i = 0; i < niz.length; i++){
       

           zbir = zbir + niz[i]
           proizvod = proizvod * niz[i]

           
          
      
    }  temp.push(zbir, proizvod)    
    return temp
}


let niz = [1,2,3,4,5,6]

console.log(mathOperation(niz))

   

}






//2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
 
console.log(`---------------zadatak 2------------`)


function izbacujeNaN(chaine){

    let temp = [];
    
    for (let i = 0; i < chaine.length; i++) {
        if (isNaN(chaine[i]) || chaine[i] === 0) {
            delete i;

        }
        else {
            temp.push(chaine[i]);
        }
    }

    return temp;

    }
    
    let niz = [0,1,2,3,'null',4,'chaine',5,'!']
    
    console.log(izbacujeNaN(niz))
   



//  3. За првих 100 бројева исписати:
//         ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
//         Ако је дељив са 3,5,7 - FizzBuzzZazz
//         3,5 - FizzBuzz
//         3,7 - FizzZazz
//         5,7 - BuzzZazz

console.log(`---------------zadatak 3------------`)

{

    let M = 100

    for(let i = 0; i < M; i++){
        if(i % 3 != 0 && i % 5 !=0 && i % 7 != 0){
            console.log(i)
            
        }
        if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
            console.log(`FizzBuzzZazz`)
           

        }else if(i % 3 == 0 && i % 5 == 0){
            console.log(`FizzBuzz`)
            

        }else if(i % 3 == 0 && i % 7 == 0){
            console.log(`FizzZazz`)
            

        }else if(i % 3 == 0){
           
            console.log(`Buzz`)
            

        }else if(i % 5 == 0){
            console.log(`Fizz`)
            

        }else if(i % 7 == 0){
            console.log(`Zazz`)
            

        }
    


    }

}






// 4. Izvrsiti inverziju brojeva bez pomocne promenljive. 
//       Pr: x = 5 y = 9
//       Resenje: x = 9 y = 5
//       pom = "ne mozete koristiti"
 
console.log(`---------------zadatak 4------------`)


{ 
    let a = 5;
    let b = 9;
    
    console.log(`Variabla a je prvo ${a}, variabla b je prvo ${b}`);


    [a, b] = [b, a]
    
    console.log(`Variabla a je sada ${a}, variabla b je sada ${b}`);
    

}
