
//DOMACI 


// / Napisati validaciju za formu koja sadrzi polja: 


// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)


// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!






let isValidate = true 
let users = []
let checkedCourse = []

let buttonSubmit = document.querySelector('.submit')
let divUser = document.querySelector('.user-div')
let forma = document.querySelector('.forma')


let firstName = document.querySelector('.name-check')
let lastName = document.querySelector('.surname-check')
let password = document.querySelector('.password-check')
let passwordConfirm = document.querySelector('.password-confirm')
let city = document.querySelector('.city-check')

let genderMale = document.querySelector('male-check')
let genderFemale = document.querySelector('female-check')


let courseHTML = document.querySelector('#html-check')
let courseCSS = document.querySelector('#css-check')
let courseJS = document.querySelector('#js-check')



let firstNameError = document.querySelector('.error-field-name')
let lastNameError = document.querySelector('.error-field-surname')
let passwordError = document.querySelector('.error-field-password')
let passwordConfirmError = document.querySelector('.error-field-password-confirm')
let cityError = document.querySelector('.error-field-city')
let courseError = document.querySelector('.error-field-course')




function stringHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function stringHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}


function toUpperCase(word){
    word = word[0].toUpperCase() + word.substring(1)
    return word 
}


forma.addEventListener('submit', (event)=>{

    event.preventDefault()
    let divItem = document.createElement('div')
    
    if (firstName.value == "") {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field is required"
        isValidate = false
    } else if (firstName.value.length < 5) {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field must include minimum five characters"
        isValidate = false
    } else if (firstName.value.length > 15) {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field must have less then fifteen characters"
        isValidate = false
    }

    if (lastName.value == "") {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field is required"
        isValidate = false
    } else if (lastName.value.length < 5) {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field must include minimum five character"
        isValidate = false
    } else if (lastName.value.length > 20) {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field must have less then fifteen characters"
        isValidate = false
    }

    if (password.value == "") {
        passwordError.textContent = ""
        passwordError.textContent = "This field is required"
        isValidate = false
    } else if (password.value.length < 8) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include minimum eight character"
        isValidate = false
    } else if (!stringHasNumber(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include number"
        isValidate = false
    } else if (!stringHasUpperCase(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include uppercase"
        isValidate = false
    }

    if (password.value != passwordConfirm.value){
        passwordConfirmError.textContent = ""
        passwordConfirmError.textContent = "Passwords must match"
        isValidate = false
    }


    if (!(city.value == "nis" || city.value == "belgrade" || city.value == "novisad" || city.value == "kragujevac")) {
        cityError.textContent = ""
        cityError.textContent = "You need to chose something"
        isValidate = false
    }

    if(!(courseHTML.checked == true || courseCSS.checked == true || courseJS.checked == true)){
        courseError.textContent = ""
        courseError.textContent = "You need to choose something"
        isValidate = false
    }


  

    if(courseHTML.checked == true && courseCSS.checked == true && courseJS.checked == true){
        checkedCourse.push(courseHTML.value, courseCSS.value, courseJS.value)    
    }else if(courseHTML.checked == true && courseCSS.checked == true){
        checkedCourse.push(courseHTML.value, courseCSS.value)
    }else if(courseCSS.checked == true && courseJS.checked == true){
        checkedCourse.push(courseCSS.value, courseJS.value)
    }else if(courseHTML.checked == true && courseCSS.checked == false && courseJS.checked == false){
        checkedCourse.push(courseHTML.value)
    }else if(courseCSS.checked == true && courseHTML.checked == false && courseJS.checked == false){
        checkedCourse.push(courseCSS.value)
    }else if(courseJS.checked == true && courseHTML.checked == false && courseCSS.checked == false){
        checkedCourse.push(courseJS.value)
    }
    


    

    if (isValidate) {
     

        let user = {
            first_name: toUpperCase(firstName.value.trim()),
            last_name: toUpperCase(lastName.value.trim()),
            usr_password: password.value,
            usr_city: city[city.selectedIndex].text,
            usr_course: checkedCourse
        }

        divItem.innerHTML = `<p>Name:  ${user.first_name}<p> 
        <p>Surname:  ${user.last_name}</p>
        <p>city:  ${user.usr_city}</p>
        <p>Course:  ${user.usr_course}</p>
        <hr>`
    
        divUser.append(divItem)
        users.push(user)
        console.log(user)

      
    }

   
firstName.value = ''
lastName.value ='' 
password.value = ''
passwordConfirm.value =''
city.value = "default"

courseHTML.value = ''
courseCSS.value = ''
courseJS.value = ''
// genderMale.checked == false
// genderFemale.checked == false



})





