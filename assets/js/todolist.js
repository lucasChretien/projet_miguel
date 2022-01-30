const btn = document.querySelector(".btn")
const informationUser = document.querySelector("#information_user")

const getUser = () => {
    return {
        nom : document.getElementById("nom").value,
        prenom : document.getElementById("prenom").value,
        age : document.getElementById("Age").value,
        prescripteur : document.getElementById("Prescripteur").value,
    }
}

btn.addEventListener("click", function(){
    const user = getUser()

    for (const property in user) {
        if (user[property] != ""){
            const li = document.createElement("li")
        li.innerHTML = user[property]
        informationUser.appendChild(li)}
        
      }
      
})


