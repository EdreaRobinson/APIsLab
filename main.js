// const { default: axios } = require("axios");

let residentsButton = document.querySelector("button")

function buttonClick() {
    axios.get("https://swapi.dev/api/planets/2").then((res) => {
        
        for (i =  0; i < res.data.residents.length; i++){
            let arr = res.data.residents
            axios.get(arr[i]).then((resp) => {
                let residents = resp.data.name
                let h2 = document.createElement("h2")
                h2.textContent = residents
                document.querySelector("ul").append(h2)
            })
        }
    })
    console.log("button clicked");
}

residentsButton.addEventListener("click", buttonClick)