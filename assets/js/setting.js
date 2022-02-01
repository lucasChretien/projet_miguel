/* start js second todolist */
/* on déclare notre boutton et notre ul */
const buttonTwo = document.getElementById("#btnTwo")
const buttonOne = document.getElementById("#btnOne")
const addInfo = document.querySelector("#addInfo")

btnTwo.addEventListener("click", function(){
    const infoAccount = document.getElementById("ajoueInfo")   /* on récupère la valeur de account */
        
    if (infoAccount != " "){
        const li = document.createElement("li") /* cet ligne permet de cree de li apres un  clik */
        li.innerHTML = infoAccount.value  /* cette ligne permet de dire que dans li on ecrira la valeur de input */
        addInfo.appendChild(li)
        infoAccount.value =""; /* cet ligne permet de rénitialiser l'input après avoir cliquer sur le bouton*/
        const supp = document.createElement("button")
        const supptxt = document.createTextNode("\u00D7")
        supp.className = "del"
        supp.appendChild(supptxt)        
        li.appendChild(supp)

        for (let i = 0; i < del.length; i++){
            del[i].onclick = function(){
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
})

const  myNodelist = document.getElementsByTagName("LI");
let i = " ";
for (let i = 0; i < myNodelist.length; i++){
    let supp = document.createElement("button");
    let supptxt = document.createTextNode("\u00D7");
    supp.className = "del";
    supp.appendChild(supptxt);
    myNodelist[i].appendChild(supp);
}

let del = document.getElementsByClassName("del");
for (i = 0; i < del.length; i++){
    del[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}
