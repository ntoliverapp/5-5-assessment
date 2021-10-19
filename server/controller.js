const animals = require('./db.json');
let globalId = 4
   

    module.exports={
    getAllCompliments: (req, res) =>{
    const compliments = ["Gee, you're a smart cookie!",
                       "Cool shirt!",
                       "Your Javascript skills are stellar."
    ];

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
}, getZen: (req, res) =>{
    const zen = ["Each Morning we are born again. What we do today is what matters most.",  "Life is a balance of holding on and letting go.", "When you realize nothing is lacking, the whole world belongs to you. - Lao Tzu"];

    let randomIndex = Math.floor(Math.random() * zen.length);
    let randomZen= zen[randomIndex];

    res.status(200).send(randomZen);

}, getColorOne: (req, res) =>{
    const color = ["Everything is working perfectly"]
    res.status(200).send(color);

    }, getAnimals: (req, res) => {
        res.status(200).send(animals)

},
createAnimals: (req, res) => {
    const{ name, zenmage, readmore}
    = req.body
    const newAnimal = {
        name, 
        zenmage,
        readmore,
        id: globalId

    }
    animals.push(newAnimal);
    console.log(animals);
    res.status(200).send(animals);
    globalId++;
}, deleteAnimal: (req, res) => {
    const {id} = req.params

    let index = animals.findIndex((elem) => +elem.id=== +id)

    animals.splice(index, 1)
    res.status(200).send(animals)
}

}; 
    