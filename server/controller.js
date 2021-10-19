
   

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
}

};

    