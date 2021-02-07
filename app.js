fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = countries =>{
    const div = document.getElementById("countries");

countries.forEach(country => {
    
    const CountryDiv = document.createElement('div');

 
CountryDiv.className = 'country';
 const countryInfo = `
 <h3 class = "country-name"> ${country.name} </h3>
 <p>${country.capital}</p> 
 <button onclick ="displayCountryDetails('${country.name}')"> show Detail </button> 
 `
 CountryDiv.innerHTML = countryInfo;

  div.appendChild(CountryDiv);
    
    


    
});
}

const displayCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))

}

const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
<h1>${country.name}</h1>
<p>${country.population}</p>
<p>${country.area}</p>
<img src ="${country.flag}">

    `
}


    
//    for (let i = 0; i < countries.length; i++) {
       
//        const country = countries[i];
//        const CountryDiv = document.createElement('div');

//     //    const h3 = document.createElement('h3');
//     //    const p = document.createElement('p');

//     //   h3.innerText = country.name;
//     //   p.innerText = country.capital;
//     // CountryDiv.appendChild(h3);
//     // CountryDiv.appendChild(p);
//  CountryDiv.className = 'country';
//     const countryInfo = `
//     <h3 class = "country-name"> ${country.name} </h3>
//     <p>${country.capital}</p> 
//     `
//     CountryDiv.innerHTML = countryInfo;

//      div.appendChild(CountryDiv);
       
       
//    }
