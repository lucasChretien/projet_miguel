const gooduser = "bienvenue";
const goodpass = "vraie";

const connexion = () => {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user == gooduser && goodpass == password){
        window.location = "./assets/pages/acceuil.html"  
    }else{
        alert("erreur 404")
    }
}
