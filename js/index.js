window.onload = function() {

    class User{


        constructor(username, email, password){
            this.username = username;
            this.email = email;
            this.password = password;
        } 
        getUsername(){return this.username};
        getEmail(){return this.email};
        getPassword(){return this.password};

     
    } 
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

            

        // Procédure de l'étape 2 :
        // 1. Pour récupérer la valeur de tout les champs de formulaires, j'ai dans un premier temps assigné une variable au ciblage de l'ensemble des input grâce au querySelectorAll;
        // J'assigne par la suite 2 variables au ciblages des deux square-buttons auquel j'ai assigné un ID(buttonSign/buttonLogin), cette étape est importante pour me permettre de créer un événement click différents à chaque buttons, car les dzux formulaires fonctionnent différements;
        //  Ensuite il est important que j'assigne chacune de mes variables aux input, en indiquant à Javascript le positionnement de chacun et en lui précisant de récolter les données grâce au .value; 
        // 2. Pour verifier que l'username contient bien 5 caractères alphanumérique, je met en place 2 conditions grâces aux if;
        // 3. En ce qui concerne le password je procède de la même manières, met en assignant des variables à chaques "règles" alphanumérique qu'il doit respecter(minuscule,majuscule et chiffre entier);
        
        // var signForm = document.querySelector("#connexion-form");
        //   var loginForm = document.querySelector("#register-form");
          var inputValue = document.querySelectorAll(".form-control");
           
          var signButton = document.getElementById("buttonSign");
          var loginButton = document.getElementById("buttonLogin");
         
          signButton.addEventListener("click", function() {
              var username = inputValue[2].value;
              console.log(username);

              var email = inputValue[3].value;
              console.log(email);

              var password = inputValue[4].value;
              console.log(password);

              var passwordConfirm = inputValue[5].value;
              console.log(passwordConfirm);

             if (username.length < 5) {
                 alert("Votre username doit contenir plus de 5 caractères");
                 return false
             }

             const alphanumeric = /^[a-z0-9]+$/i;
             if (alphanumeric.test(username) == false){
                alert("Votre username doit contenir que des caractères alphanumérique");
                return false
             }
             
             if (password.length < 8) {
                alert("Votre password doit contenir plus de 8 caractères");
                return false
            }

            const minuscule = /^(?=.*[a-z])/;
            const majuscule = /^(?=.*[A-Z])/; 
            const integer =  /^(?=.*[0-9])/;

            if (minuscule.test(password) == false || majuscule.test(password) == false || integer.test(password) == false ){
               alert("Votre password doit contenir au moins une minuscule, une majuscule et un nombre");
               return false
            }

            const user = new User (username,email, password);
            localStorage.setItem ('user', JSON.stringify(user));
            // JSON.stringify contraire du JSON.parse

            
            
          })

          loginButton.addEventListener("click", function() {
            var emailLog = inputValue[0].value;
            console.log(emailLog);

            var passwordLog = inputValue[1].value;
            console.log(passwordLog);

           var user = localStorage.getItem ('user');
               console.log(user);

            if (user != null); {
                user = JSON.parse(user); 
            
                if (user.email === emailLog && user.password === passwordLog) {

                    document.location.href="home.html";   
                } else { alert('Account do not exist, please register.') }
            }
                

           

          })
            
    
             


    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés de notre nouvelle 'User'
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
