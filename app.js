const getCountryByName = (countryName) => {
    return new Promise((resolve, reject) => {
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        // .then(data => console.log(data[0]))
        .then((data) => {
            paragraphName.innerHTML = `Country name is ${data[0].name} and population is ${data[0].population}`;
            resolve();
        })
    })
    
}


const sect = document.getElementById("section");
sect.innerHTML = "";
const paragraphName = document.createElement('p');
const paragraphPop = document.createElement('p');
getCountryByName("cuba");


sect.append(paragraphName); sect.append(paragraphPop);



// Take the output from your getCountryByName() function and make use of it on the webpage. You'll need to access specific properties within the returned object, such as name. This will also involve you creating a variable associated with the section created earlier and making use of the createElement() and .append() methods
// Modify your code to additionally display the population of the specified country on your webpage
// Create a getAllCountries() function which similarly displays the name and population of each country to the frontend. See the tip below about abstracting your functionality. Have this method called on page load
// Create an HTML form which allows you to input the name of a country which is used to "filter" the information on the front-end on-submit. This will call your getCountryByName() function