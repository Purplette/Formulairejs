//import style
import './global';

//import all images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const email = 'eva.haberthur@gmail.com';
const password = '0000';
const loadtime =1000;

const suivant12 = document.querySelector(".suivant12")
const retour21 = document.querySelector(".retour21")
const suivant23 = document.querySelector(".suivant23")
const retour32 = document.querySelector(".retour32")
const suivant34 = document.querySelector(".suivant34")
const retour43 = document.querySelector(".retour43")



    //Fonctionnement page de Connexion

        //Verifications login

        const onFormSubmit = e => {
            e.preventDefault(); // Annule l'action par défaut
        
            let id = e.target.id;
        
            setTimeout(() => {
                // Récupère les données du formulaire
                const data = new FormData(e.target);
                const response = processDataForm(data, id);
            }, loadtime); // 1 seconde
        }
        

        const processDataForm = (data, id) => {

            //traitement indépendant des champs
           
            switch (id) {
                case 'loginForm':
                    if (data.get('password') !== password || data.get('email') !== email) {
                        alert.innerHTML = "<span>Wrong username or password</span>";
                    }
                   
                    break;

                    case 'InscriptionForm1':

                        document.querySelector('#InscriptionForm1').classList.remove("form-active");
                        document.querySelector('#InscriptionForm2').classList.add("form-active");
                      
                    break;

                    case'InscriptionForm2':

                        document.querySelector('#InscriptionForm2').classList.remove("form-active");
                        document.querySelector('#InscriptionForm3').classList.add("form-active");

                    break;

                    case'InscriptionForm3':

                    document.querySelector('#InscriptionForm3').classList.remove("form-active");
                    document.querySelector('#InscriptionForm4').classList.add("form-active");

                    break;
                    
                        
                        

            }

        
        }

    
        //Afficher mot de passe
            const changePasswordView = obj => {
                let el = obj.previousElementSibling;
            let type = el.getAttribute("type");
            switch (type) {
                case "password" :
                    el.setAttribute("type", "text");
                    break;
                case "text" :
                    el.setAttribute("type", "password");
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
                obj.addEventListener('touchstart',()=>{
                    changePasswordView(obj);
                }, { passive: true } );
                obj.addEventListener('touchend',()=>{
                    changePasswordView(obj);
                }, { passive: true } );

            });


            document.querySelectorAll('form').forEach((obj)=>{
                obj.addEventListener('submit',onFormSubmit);
            });

    //Fonctionnement page Inscription


    //Apparation des parties

    // Button listener etape 2
    retour21.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm2').classList.remove("form-active");
        document.querySelector('#InscriptionForm1').classList.add("form-active");
        e.preventDefault()
    });
    // Button listener etape 3    
    retour32.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm3').classList.remove("form-active");
        document.querySelector('#InscriptionForm2').classList.add("form-active");
        e.preventDefault()
    });

    //button listener etape 4
    retour43.addEventListener("click", (e)=> {
        document.querySelector('#InscriptionForm4').classList.remove("form-active");
        document.querySelector('#InscriptionForm3').classList.add("form-active");
        e.preventDefault()
    });

 
   
