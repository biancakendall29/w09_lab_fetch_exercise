const getCountryByName = (countryName, item) => {
    item = addParagraph();
    return new Promise((resolve, reject) => {
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        // .then(data => console.log(data[0]))
        .then((data) => {
            item.innerHTML = `Country name is ${data[0].name} and population is ${data[0].population}`;
            appendToSection(item);
            resolve();
        })
    })
}

const addParagraph = () => {
    return item = document.createElement('p');
}

const appendToSection = (item) => {
    sect.append(item);
}

function getAllCountries() {
    return new Promise((reolve, reject) => {
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then((data) => {
            for (let i = 0; i < 250; i++) {
            para = addParagraph();
            para.innerHTML = `Country name is ${data[i].name} and population is ${data[i].population}`
            appendToSection(para)
            }
            resolve();
        })
    })
}


const sect = document.getElementById("section");
sect.innerHTML = "";

const item1 = null;
const item2 = null;
getCountryByName("cuba", item1);
getCountryByName("mozam", item2);

getAllCountries();



// Take the output from your getCountryByName() function and make use of it on the webpage. You'll need to access specific properties within the returned object, such as name. This will also involve you creating a variable associated with the section created earlier and making use of the createElement() and .append() methods
// Modify your code to additionally display the population of the specified country on your webpage
// Create a getAllCountries() function which similarly displays the name and population of each country to the frontend. See the tip below about abstracting your functionality. Have this method called on page load
// Create an HTML form which allows you to input the name of a country which is used to "filter" the information on the front-end on-submit. This will call your getCountryByName() function

// When you create JS functionality for adding your object properties to, for instance, a p element, it would make sense to create this as a separate function (abstracted function) which accepts the data of one country. This is so you can easily reuse this functionality during the later tasks 