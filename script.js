const ButtonElm = document.getElementById("idbutton-49")
const ContainerElm = document.getElementById("idcontainer")
const ContainerEmailElm = document.getElementById("container-email")


const emailGenerator = () =>{
        ContainerEmailElm.innerHTML = ""
        for(let i = 1; i <= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
          const email = response.data.response
          console.log(email)
          ContainerEmailElm.innerHTML += `<li>${email}</li>`
          })
        }
}

emailGenerator()

ButtonElm.addEventListener("click", emailGenerator)
