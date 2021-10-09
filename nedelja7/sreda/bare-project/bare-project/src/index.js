import { Countries } from "./components/Countries.js"
import { getAllCountries } from "./service.js"
import { divSelect, main, inputFilter } from "./constants.js"


//Zadatak: 

// ## Апликација за приказ информација о државама

// https://restcountries.eu/

// 1. Приказују се све државе (основне информације)
//     - Застава
//     - Име државе
// 2. Постоји Select за бирање региона
// 3. Постоји Input за претрагу држава
// 4. Ако је на страници само једна држава, приказати додатне информације о њој
//     - Застава
//     - Име државе
//     - Име државе на матерњем језику
//     - Популација
//     - Главни град
//     - Интернет домен

// Додатно:
// 5. На страници се приказује највише 7 држава
//     - За остале се праве додатне странице (испод приказа)

// 6. Направити функционалност да у зависности од одабране опције се државе сортирају
// по главном граду, имену, и региону


let countries = []


//Separating Select as creator of the options
const Select = (regions) => {
  const select = document.createElement("select")

  const defOpt = document.createElement("option")
  defOpt.value = "-1"
  defOpt.selected = true
  defOpt.disabled = true
  defOpt.hidden = true
  defOpt.textContent = `Choose a region`

  select.append(defOpt)

  regions.forEach((region) => {
    const opt = document.createElement("option")
    opt.value = region
    opt.textContent = region
    select.append(opt)
  });


  return select
};

//Generator of different select options
const generateSelect = (arr) => {
  let options = new Set(countries.map(country => {
    if(!country.region){
         return 'Other'
    }
    return country.region
    
  }))

//Emptying the select options.
  divSelect.innerHTML = ''

  let select = Select(options)

  //event listener on Select
  select.addEventListener('change', ()=> {
      main.innerHTML = ''

      let temp = arr.filter(country => {
        //I must do like this because some countries do not have a certain region.
        if(select.value == 'Other'){
          return country.region.trim().toLowerCase() == ''
        }else{
          return country.region.toLowerCase() == select.value.toLowerCase()
        }
      })

      main.append(...Countries(temp, false))
      //refreshing the ''only one country'' option
      onlyOneCountry(...Countries(temp))

  })


divSelect.append(select)

}




  getAllCountries().then((res) => {

      countries = res.data
 
      main.append(...Countries(countries, false))
      generateSelect(countries)
      onlyOneCountry(countries)
    })
    
      
// refreshing always for one country view
  const onlyOneCountry = (arr) => {
    if(arr.length == 1){
      main.append(...Countries(arr, true))
    }else{
      main.append(...Countries(arr, false))
    }
  }


    //event listener on input 
    inputFilter.addEventListener('input', ()=>{
    main.innerHTML = ''
    

    let filter = countries.filter(country => country.name.toLowerCase().includes(inputFilter.value.toLowerCase()))

   onlyOneCountry(filter)
     
    divSelect.innerHTML = ''
    generateSelect(filter)
  }) 





