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
  