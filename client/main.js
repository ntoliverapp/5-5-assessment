const baseUrl = 'https://type.fit/api/quotes'

const hpBtn = document.querySelector('.char-btn')


function getZenInfo(){
    console.log('button clicked')
    axios.get("https://type.fit/api/quotes")
    .then(response=>{
        console.log(response.data)
            })
    .catch(error=>{
        console.log(error)
    })
};
// getHPCharacters: (req, res) => {
//     res.status(200).send('http://hp-api.herokuapp.com/api/characters')
// }
hpBtn.addEventListener('click', getZenInfo)

// getHPCharacters()








