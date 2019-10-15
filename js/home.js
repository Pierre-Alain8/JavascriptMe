window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
        console.log(articles);

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data ce trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article

       // --------------------- STEP 1 ---------------------
        class Articles {
              
               constructor(id, title, author, publishedDate, img, content, resume, tags) {
                   this.id = id;
                   this.title = title;
                   this.author = author;
                   this.publishedDate = publishedDate;
                   this.img = img;
                   this.content = content; 
                   this.resume = resume;
                   this.tags = tags;
               }

                 getId(){return this.id};
                 getTitle(){return this.title};
                 getAuthor(){return this.author};
                 getPublishedDate(){return this.publishedDate};
                 getImg(){return this.img};
                 getContent(){return this.content};
                 getResume(){return this.resume};
                 getTags(){return this.tags}


                 SetId = function(newId) { 
                    this.id = newId; };

                 SetTitle = function(newTitle) { 
                    this.title = newTitle; };
        
                 SetAuthor = function(newAuthor) { 
                    this.author = newAuthor; };
        
                 SetPublishedDate = function(newPublishedDate) { 
                    this.publishedDate = newPublishedDate; };
        
                 SetImg = function(newImg) { 
                    this.img = newImg; };
        
                 SetNewContent = function(newContent) { 
                    this.content = newContent; };
        
                 SetResume = function(newResume) {
                    this.resume = newResume; };

                 SetTags = function(newTags) {
                    this.tags = newTags}

                 

         }
          
       


           // --------------------- STEP 2 ---------------------
            const section = document.getElementsByTagName("section")[0];

             //  section.addEventListener("click", function(){

             //    if (pResume.getResume() === articles[3].resume) {
             //      document.location.href="C:\Users\pierr\OneDrive\Documents\Simplon\SIMPLON PROJET 1\JavascriptMe\article.html?id=3";
             //      console.log(pResume);
             //     };

             //   })

              section.style.display = "flex";
              section.style.flexDirection = "column";
              section.style.flexWrap = "wrap";
           
        
           for (let i = 0; i < articles.length; i++) {
                let article = new Articles(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, 
                articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);
              


              
              let articlebloc = document.createElement("article");
              
              
              articlebloc.classList.add('articles-prewiews');
              articlebloc.setAttribute('data-id', article.getId() );



              let articleTitle = document.createElement('h2');
              articlebloc.appendChild(articleTitle);
              articleTitle.innerText = article.getTitle();

              let articleBody = document.createElement("div");
              articleBody.classList.add('article-preview-body');
              articlebloc.appendChild(articleBody);


              let imgPreview = document.createElement("img"); 
              imgPreview.setAttribute('src', article.getImg());
              articleBody.appendChild(imgPreview);

            //   let contenairImg = document.createElement("div");
            //   contenairImg.classList.add('articles-prewiews-img');
            //   articleBody.appendChild(contenairImg);
              
            //      let imgPreview = document.createElement("img");
            //      imgPreview.innerHTML = "<img https://static.education.francetv.fr/media/img/hd/img.gif >";
            //      imgPreview.setAttribute('data-img', article.getImg())
            //      contenairImg.appendChild(imgPreview);
                 
                 



              let articleDate = document.createElement("span");
              articleDate.setAttribute('data-publishedDate', article.getPublishedDate());
              articleBody.appendChild(articleDate);
              articleDate.innerText = article.getPublishedDate();

              let articleAuthor = document.createElement ("span");
              articleAuthor.setAttribute('data-author', article.getAuthor());
              articleBody.appendChild(articleAuthor);
              articleAuthor.innerText = article.getAuthor();



              let articleResume = document.createElement("div");
              articleResume.classList.add ('article-prewiew-resume');
              articleBody.appendChild(articleResume);
                 let pResume = document.createElement("p");
                 pResume.innerText = article.getResume();
                 pResume.setAttribute('date-resume', article.getResume());
                 articleResume.appendChild(pResume)

                

              
              let articleContent = document.createElement("div");
              articleContent.classList.add('article-preview-content');
              articleBody.appendChild(articleContent);
                  let pContent = document.createElement("p");
                  pContent.innerText = article.getContent();
                  pContent.setAttribute('data-content', article.getContent())
                  articleContent.appendChild(pContent);

              
              let articleTags = document.createElement("div");
              articleTags.classList.add('article-preview-tags');
              articleBody.appendChild(articleTags);
                 let tagsPreviews = document.createElement("span")
                 tagsPreviews.innerText = article.getTags();
                 tagsPreviews.setAttribute('data-tags', article.getTags());
                 articleTags.appendChild(tagsPreviews);
                 section.appendChild(articlebloc);

                  //  articles.innerHTML = articlebloc;

               //   section.innerHTML = articlebloc;
               //   section.appendChild(articlebloc);

               //   let articleBody = document.createElement("div");
               //   articleBody.classList.add('article-preciew-body');
              //   articlebloc.appendChild(articleBody);


              pResume.addEventListener("click", function() {
                 if(pResume.getAttribute("data-resumes") == articles[i].resumes) {
                   document.location.href="article.html" + article.id;
                 };
              });
               

            //   pResume.addEventListener("click", function(){

            //    if (pResume = articles[i].resume) {
            //      document.location.href="article.html" + article.id;
               
                 
            //     };

            //   })
            //   pResume.onclick() = function () {
            //      if (pResume === articles[1].resume) {
            //         document.location.href="C:\Users\pierr\OneDrive\Documents\Simplon\SIMPLON PROJET 1\JavascriptMe\article.html?id=1";
            //      };
                 
            //   };
            
            };
             
 



         // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);
            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER


        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....





        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                  //   'C:\Users\pierr\OneDrive\Documents\Simplon\SIMPLON PROJET 1\JavascriptMe\article.html?id=1'
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker





    });
}
