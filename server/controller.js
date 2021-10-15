const compliments = ["Gee, you're a smart cookie!",
                       "Cool shirt!",
                       "Your Javascript skills are stellar.",
    ];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    // let newCompliment = {
    //     compliment: [compliments]
    // }
    // choose random compliment
    module.exports={
    getAllCompliments: (req, res) =>{

  
    res.status(200).send(randomCompliment);
},}

    // addNewCompliment:(req, res)=>{
//         const {compliments} = req.body

//         for (let i = 0; i < compliments.length; i++){
//             compliments[i].push(newCompliment)
//             res.status(200).send(randomCompliment)
//         }
//     }
// }
// addNewCompliment("you're a winner!")
