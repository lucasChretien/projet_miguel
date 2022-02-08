/* start js second todolist */
/* on déclare notre boutton et notre ul */
const buttonTwo = document.getElementById("#btnTwo")
const buttonOne = document.getElementById("#btnOne")
const addInfo = document.querySelector("#addInfo")

const listGenerator = (value) => {
    const li = document.createElement("li") /* cet ligne permet de cree un li apres un  clik */
    li.addEventListener("mouseover", function(){
        li.style.color = "red"
    })
    li.addEventListener("mouseout", function() {
        li.style.color = "black"
    })
    li.innerHTML = value

    return li
}

const buttonGenerator = () => {
    const btn = document.createElement("button")
    btn.innerHTML = "X"
    btn.addEventListener("click", function(){
        const parent = btn.parentNode
        addInfo.removeChild(parent)
    })
    return btn
}

const todoGenrator = (value) =>{
    const todo = document.createElement("div")
    const li = listGenerator(value)
    const btn = buttonGenerator()
    todo.appendChild(li)
    todo.appendChild(btn)

    return todo
}

btnTwo.addEventListener("click", function(){
    const infoAccount = document.getElementById("ajoueInfo")   /* on récupère la valeur de account */

    if (infoAccount != " "){        
        const todo = todoGenrator(infoAccount.value)
        addInfo.appendChild(todo)
        infoAccount.value = ""; /* cet ligne permet de rénitialiser l'input après avoir cliquer sur le bouton*/
             
    
    }
})
