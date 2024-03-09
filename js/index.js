
const loadContries = async () => {
    const url = `https://restcountries.com/v3.1/all`

    const res = await fetch(url)
    const data = await res.json()
    displayContries(data)
}


const displayContries = countries =>{
    console.log(countries[0])
    const allContriesHTML = countries.map(country => getCoutryHTML(country) )
    // console.log(allContriesHTML)
    const container = document.getElementById('countries')
    container.innerHTML = allContriesHTML.join(' ')

}


// 1. orginal 

// const getCoutryHTML = country => {
//     return `
    
//         <div class ="country">
//             <h3>${country.name.common}</h3>
//             <img src="${country.flags.png}" alt="">  
//         </div>
    
    
//     `
// }

// 2.options 1 
// const getCoutryHTML = country => {
//     const {name, flags} = country;
//     return `
    
//         <div class ="country">
//             <h3>${name.common}</h3>
//             <img src="${flags.png}" alt="">  
//         </div>
    
    
//     `
// }

// 3. options 2

const getCoutryHTML = ({name, area, capital, flags}) => {
    return `
    
        <div class ="country">
            <h3>${name.common}</h3>
            <h5>Capital: ${capital}</h5>
            <p>Area: ${area} </p>
            <img src="${flags.png}" alt="">  
        </div>
    
    
    `
}
loadContries()