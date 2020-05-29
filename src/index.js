//import style
import './global';

//import all images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));






//Fonctionnement page de Connexion

    //Verifications login

    const email = 'eva.haberthur@gmail.com';
    const password = '0000';

    document.querySelector('#loginForm').addEventListener('submit',(e)=>{
        e.preventDefault(); // Annule l'action par défaut

        setTimeout(() => {
            // Récupère les données du formulaire
            const data = new FormData(e.target);
            const response = processDataForm(data);
        }, 1000); // 1 seconde
    });

  

    const processDataForm = data => {
        if (data.get('password') !== password || data.get('email') !== email) {
            console.log("False")
        }
        else {
            console.log("Success");

        }
    }

    
    //Afficher mot de passe
        const changePasswordView = obj => {
            let mdptype=document.querySelector(".password");
            console.log(mdptype);
            let type = mdptype.getAttribute("type");
            switch (type) {
                case "password" :
                mdptype.setAttribute("type", "text");
                break;
            case "text" :
                mdptype.setAttribute("type", "password");
                break;
        }
        }

      
        document.querySelectorAll('.view-button').forEach((obj)=>{
            obj.addEventListener('mousedown',()=>{
                changePasswordView(obj);
            });
            obj.addEventListener('mouseup',()=>{
                changePasswordView(obj);
            });

            // for touchable screens
            obj.addEventListener('touchstart',()=>{
                changePasswordView(obj);
            }, { passive: true } );
            obj.addEventListener('touchend',()=>{
                changePasswordView(obj);
            }, { passive: true } );
        });





//Fonctionnement page Inscription


    //Apparation des parties
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

    // Button listener etape 3    
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


    
 
   
