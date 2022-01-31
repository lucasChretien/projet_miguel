const btn = document.querySelector(".btn")
const informationUser = document.querySelector("#information_user")

/* cette fonction permet de rassembler toute les valeurs obtenus dans une seule varriable */
const getUser = () => {
    return {
        nom : document.getElementById("nom"),         /* ici on récupère les valeur de nos input*/
        prenom : document.getElementById("prenom"),
        age : document.getElementById("Age"),
        dateN : document.getElementById("born"),    
        prescripteur : document.getElementById("Prescripteur"), 
    }
}

btn.addEventListener("click", function(){
    const user = getUser() /* donc la user contient getUser(donc toute nos valeurs récupérer au dessus)*/

    for (const property in user) {
        if (user[property] != ""){
            const li = document.createElement("li") /* cet ligne permet de cree de li apres un  clik */
        li.innerHTML = user[property].value
        informationUser.appendChild(li)}
        user[property].value = "";  /* cet ligne permet de rénitialiser l'input après avoir cliquer sur le bouton*/
      }
})



