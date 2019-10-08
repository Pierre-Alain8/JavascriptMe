window.onload = function() {
    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

     let buttons = document.querySelectorAll(".square-button-empty")
     
         for (let i = 0; i  < buttons.length; i++) {
             buttons[i].onclick = function(e) {
        
        
         if (e.target.getAttribute("data-form") == 0) { 
         document.getElementById("connexion-form").style.display ="none";
         document.getElementById("register-form").style.display ="flex";
         }

         else {
         document.getElementById("register-form").style.display ="none";
         document.getElementById("connexion-form").style.display ="flex";
         }
         
        }
        }

    //  ESSAIE DE L'ETAPE 1
    //  var switchOn = document.getElementById("resgister-form");
    //     if (switchOn.style.display === "none"){
    //         switchOn.style.visibility = "hidden";
    //     }
    //     else {
    //         switchOn.style.display = "none";
    //     }
    //  if (switchOn == "Don't have an account ?") {
    //     var switchOn = document.getElementById("register-form").style.display = "block";
    //  }

    //  else {
     
    //  var switchOf = document.getElementById("connexion-form").style.display = "none";
    // }
   
    //  document.getElementById("register-form").style.visibility = "hidden";
    //  document.getElementById("connexion-form").style.display = "none";
   

    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QU'AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

            
          var signButton = document.querySelector("#buttonLogin");
          var loginButton = document.querySelector("#register-form");
          const inputValue = document.querySelectorAll(".form-control")

           signButton.addEventListener("click",function(e){
           
            for (let i = 0; i  < inputValue.length; i++){
             let x = inputValue[i].value
             console.log (x);
           }
        })
          
          loginButton.addEventListener("click", function(e){
            for (let i = 0; i  < inputValue.length; i++){
                let y = inputValue[i].value
                console.log (y);
                 //1- Récuperer la valeur de tout les champs de formulaires : Etant donné que les formulaires fonctionnent tout les deux d'une manière différentes, j'ai dans un premiers temps isolé les deux formulaires en les inétégrant dans deux variables différentes.
           // 2- Ensuite j'ai ciblé l'ensemble des input (donc les champs dans notre cas) afin de pouvoir récupéer leurs valeurs par la suite.
          //  3- Ensuite j'ai crée deux évenement clics addListener afin de récupérer les données liés à leurs formulaires respectives. 
         //   4- Pour cela, comme le querrySelectorAll(".form-control") crée un "tableau", j'ai procédé au principe du for afin qu'une fois que javascript visite toute la taille du tableau, qu'il récupère leurs données grâce au .value

          }})
           
         

         //  var checkUsername = document.getElementById("checkUsername")
         //    function check (username) {
         //     var regex = /^[a-zA-Z0-9-_.]{5,}$/
         //        if (username.match(regex) ) {
         //            return true
         //        }
         //        else {
         //            return false;
         //        }
         //    }





            // ESSAIES DE L'ETAPE 2 :
            // 1. Récuperation des données de l'ensemble des champs de formulaires grâce au ciblage des input
            // let buttonsInput = document.querySelectorAll(".square-button")
            // buttonsInput.onclick = function (e) { }

                // const inputValue = document.querySelectorAll(".form-control")
                // for (let i = 0; i  < inputValue.length; i++){
                //  let x = inputValue[i].value
                //  console.log (x);

                //  let buttonsInput = document.querySelectorAll(".square-button")
                //  buttonsInput.onclick = function (e) { 
                //      document.getElementById("buttonLogin");


                  
                     
                //  }
                //  buttonsInput.onclick = function (e) { 
                //     document.getElementById("buttonRegister")

                
                //  }

                // }
            
            
             
                
                
            




    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'





    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


        }
