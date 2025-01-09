const ButtonElm = document.getElementById("idbutton-49")
const ContainerElm = document.getElementById("idcontainer")
const ContainerEmailElm = document.getElementById("container-email")

let email = ""
for(let i = 0; i <= 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
      email += response.data.response
      console.log(email)
      })
}

ButtonElm.addEventListener("click", () =>{
    for(let i = 0; i <= 10; i++){
        ContainerEmailElm.innerHTML =  `<h1> ${email} </h1> <br>` 
    }
})