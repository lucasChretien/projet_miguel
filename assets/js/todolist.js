const btn = document.querySelector(".btn")
const informationUser = document.querySelector("#information_user")

const getUser = () => {
    return {
        nom : document.getElementById("nom"),
        prenom : document.getElementById("prenom"),
        age : document.getElementById("Age"),
        prescripteur : document.getElementById("Prescripteur"), 
    }
}

btn.addEventListener("click", function(){
    const user = getUser()

    for (const property in user) {
        if (user[property] != ""){
            const li = document.createElement("li")
        li.innerHTML = user[property].value
        informationUser.appendChild(li)}
        user[property].value = "";
        
      }
})



