const complimentBtn = document.getElementById("complimentButton");
const zenBtn = document.getElementById("zenButton");
const colorBtnOne = document.querySelector("colorButtonOne");
const colorBtnTwo = document.querySelector("colorButtonTwo");

// colorBtn.addEventListener("click", () => {
//     axios.get("http://localhost:4000/api/color/").then(function(response) {
//         const data = response.data;
//         alert(data);
//     });
//     });    

// document.body.style.background = "blue";


complimentBtn.addEventListener("click", () => {
    console.log("hit");
    axios.get("http://localhost:4000/api/compliment/").then(function(response) {
        const data = response.data;
        alert(data);
    });
});


zenBtn.addEventListener("click", () => {
    console.log("hit");
    axios.get("http://localhost:4000/api/zen/").then(function
    (response) {
        const data = response.data;
        alert(data);
    });
});

document.getElementById("colorButtonOne").onclick = function () {
    axios.get("http://localhost:4000/api/colorone/")
        .then(function (response) {
        const data = response.data;
        document.body.style.background = "#c9c1f7";
          });
  ;

  
document.getElementById("colorButtonTwo").onclick = function () {
    axios.get("http://localhost:4000/api/colorone/")
        .then(function (response) {
        const data = response.data;
        document.body.style.background = "#709775";

          })}};
document.getElementById("colorButtonClear").onclick = function () {
        axios.get("http://localhost:4000/api/colorone/")
            .then(function (response) {
            const data = response.data;
            document.body.style.background = "#FFFFFF";
        
        })};
// ------
const animalsContainer = document.querySelector('#animals-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/animals`

const animalsCallback = ({ data: animals }) => displayAnimals(animals)
const errCallback = err => console.log(err)

const getAllAnimals = () => axios.get(baseURL).then(animalsCallback).catch(errCallback)
const createAnimal = body => axios.post(baseURL, body).then(animalsCallback).catch(errCallback)
const deleteAnimal = id => axios.delete(`${baseURL}/${id}`).then(animalsCallback).catch(errCallback)
// const updateAnimal = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(animalsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let zenmage = document.querySelector('#zenmage')
    let readmore = document.querySelector('#readmore')

    let bodyObj = {
        name: name.value,
        zenmage: zenmage.value, 
        readmore: readmore.value
    }

    createAnimal(bodyObj)

    name.value = ''
    zenmage.value = ''
    readmore.value = ''
}

function createAnimalCard(animal) {
    const animalCard = document.createElement('div')
    animalCard.classList.add('animal-card')

    animalCard.innerHTML = 
    `
    <p class="name">${animal.name}</p>
    <img alt='animal zenmage' src=${animal.zenmage} class="animal-zenmage"/>
    <p class="readmore">${animal.readmore}</p>

    <button onclick="deleteAnimal(${animal.id})">delete</button>
    `


    animalsContainer.appendChild(animalCard)
}

function displayAnimals(arr) {
    animalsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createAnimalCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllAnimals()
