// Data su 4 stringa. 
let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"



//2. Ispisati najkraci string koji sadrzi rec "string"

//opcija 1 resenje

if(string1.includes("string") || string2.includes("string") || string3.includes("string") || string4.includes("string")){

        if(string1.length<string2.length || string1.length<string2.length || string1.length<string3.length){
            console.log(`${string1}`);
        }else if(string2.length<string1.length || string2.length<string3.length || string2.length<string3.length){
            console.log(`${string2}`);
        }else if(string3.length<string1.length || string3.length<string2.length || string3.length<string4.length){
            console.log(`${string3}`);
        }else if(string4.length<string1.length || string4.length<string2.length || string4.length<string3.length){
            console.log(`${string4}`);
        }
}
    
    else{
        console.log(`Ne moze, nije proslo`);
    
}

//opcija 2 resenje
    
if(string1.includes("string")){
    if(string1.length<string2.length || string1.length<string2.length || string1.length<string3.length){
        console.log(`${string1}`);
    }
}
else if(string2.includes("string")){
    if(string2.length<string1.length || string2.length<string3.length || string2.length<string3.length){
        console.log(`${string2}`);
}
}
else if(string3.includes("string")){
    if(string3.length<string1.length || string3.length<string2.length || string3.length<string3.length){
        console.log(`${string3}`);
}
}
else if(string4.includes("string")){
    if(string4.length<string1.length || string4.length<string2.length || string4.length<string3.length){
        console.log(`${string3}`);
}
}


//opcija 3 resenje






