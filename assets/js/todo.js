function send() {
  let research = document.getElementById("search").value;
  let line = document.createElement("li");
  let row = document.createTextNode(research);
  // let items = document.getElementById("btn");
  // let word = document.querySelector("li");
  line.appendChild(row);
  if (research === "") {
    alert("veuillez saisir votre texte");
  } else {
    document.getElementById("contentItems").appendChild(line);
  }

  let del = document.getElementsByClassName("del");
  for (a = 0; a < del.length; a++) {
    del[a].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }

  document.getElementById("search").value = "";
  let button = document.createElement("button");
  let text = document.createTextNode("\u00D7");
  button.className = "del";
  line.appendChild(button);
  button.appendChild(text);
  for (let a = 0; a < del.length; a++) {
    del[a].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
  // items.addEventListener("click", () => {
  //   document.querySelector(".search_block");
  //   word.className.add("list_items");
  // });
  // let myNodelist = document.getElementsByTagName("li");
  // let a = "";
  // for (let a = 0; a < myNodelist.length; a++) {
  //   let button = document.createElement("button");
  //   let text = document.createTextNode("\u00D7");
  //   button.className = "del";
  //   button.appendChild(text);
  //   myNodelist[a].appendChild(button);
  // }
}
