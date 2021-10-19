const complimentBtn = document.getElementById("complimentButton");
const zenBtn = document.getElementById("zenButton");
const colorBtn = document.querySelector("colorButton");


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




