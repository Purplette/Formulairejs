//import style
import './global';

//import all images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

//Fonctionnement page Inscription

    //apparation des parties
    const suivant12 = document.querySelector(".suivant12")
    const retour21 = document.querySelector(".retour21")
    const suivant23 = document.querySelector(".suivant23")
    const retour32 = document.querySelector(".retour32")
    const suivant34 = document.querySelector(".suivant34")
    const retour43 = document.querySelector(".retour43")

    // Button listener etape 1
    suivant12.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm1').classList.remove("form-active");
        document.querySelector('#InscriptionForm2').classList.add("form-active");
        e.preventDefault()
    });

    // Button listener etape 2
    retour21.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm2').classList.remove("form-active");
        document.querySelector('#InscriptionForm1').classList.add("form-active");
        e.preventDefault()
    });

    suivant23.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm2').classList.remove("form-active");
        document.querySelector('#InscriptionForm3').classList.add("form-active");
        e.preventDefault()
    });

    // Button listener etape 23    
    retour32.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm3').classList.remove("form-active");
        document.querySelector('#InscriptionForm2').classList.add("form-active");
        e.preventDefault()
    });

    suivant34.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm3').classList.remove("form-active");
        document.querySelector('#InscriptionForm4').classList.add("form-active");
        
    });

    //button listener etape 4
    retour43.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm4').classList.remove("form-active");
        document.querySelector('#InscriptionForm3').classList.add("form-active");
        e.preventDefault()
    });

   





   


/// custom
// const email = 'email';
// const password = 'password';


//verif login
// const processDataForm = data => {
//     if (data.get('password') !== password || data.get('email') !== email) {
//         console.log("False")
//     }
//     else {
//         console.log("Success");

//     }
// }

//view password

///////////////////////
//events événements

//submit
// document.querySelector('#loginForm').addEventListener('submit',onLoginFormSubmit);

// const onLoginFormSubmit = e => {
//     e.preventDefault(); // Annule l'action par défaut

//     setTimeout(() => {
//         // Récupère les données du formulaire
//         const data = new FormData(e.target);
//         const response = processDataForm(data);
//     }, 1000); // 1 seconde
// }


//Voir mot de passe
var mdp = document.querySelector('#mdp'); 
var obj = document.querySelector(".view-button")
document.querySelectorAll('.view-button').forEach((obj)=>{
    obj.addEventListener('mousedown',()=>{
        changePasswordView(obj);
    });
    obj.addEventListener('mouseup',()=>{
        changePasswordView(obj);
    });
});

const changePasswordView = obj => {
    let type = mdp.getAttribute("type");
    switch (type) {
        case "password" :
            mdp.setAttribute("type", "text");
            break;
        case "text" :
            mdp.setAttribute("type", "password");
            break;
    }
 }
 