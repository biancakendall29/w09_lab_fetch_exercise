function getAllCountries() { 
    head.innerText = "Fetching all countries' names, populations and flags";
    return new Promise((resolve, reject) => {
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then((data) => {
            addDataToPage(data)
            resolve();
        })
    })
}

const getCountryByName = (countryName) => {
    head.innerText = "Fetching specified country's name, population and flag";
    return new Promise((resolve, reject) => {
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then((data) => {
            addDataToPage(data)
            resolve();
        })
    })
}


const addDataToPage = (data) => {
    for (let i = 0; i < data.length; i++) {
        item = addParagraph();
        img = addImage();
        item.innerHTML = `Country name is ${data[i].name} and population is ${data[i].population}`
        appendToSection(item)
        img.setAttribute("src", data[i].flag)
        img.setAttribute("height", 100)
        img.setAttribute("width", 200)
        appendToSection(img)
    }
}

const addParagraph = () => {
    return item = document.createElement('p');
}

const addImage = () => {
    return image = document.createElement('img');
}

const appendToSection = (item) => {
    sect.appendChild(item);
}

function filter() {
    sect.innerHTML = "";
    let input = document.getElementById("myInput").value; 
    console.log(input);
    getCountryByName(input);
}  

document.querySelector("form").addEventListener('submit', filter);

const sect = document.getElementById("section");
sect.innerHTML = "";
const head = document.getElementById("header");
