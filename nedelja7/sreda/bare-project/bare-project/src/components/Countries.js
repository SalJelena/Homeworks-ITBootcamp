import { Country } from "./Country.js"



// creating countries
export const Countries = (countries, onlyCountry)=> countries.map(country => Country(country, onlyCountry) )



