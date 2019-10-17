window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) { 
        console.log(articles);

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
       
        const section = document.getElementsByTagName("section")[0];
        var params = (new URL (document.location)).searchParams;
        var id = parseInt(params.get('id'));


        for (let i = 0; i < articles.length; i++) {
             let article = new Articles(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, 
                articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);

             if ( id === articles[i].id) {
                 
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
        }

        //  function getUrl () {
        //     let recoverUrl = {};
        //     window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)?/gi,
        //     function (m, key, value){
        //         recoverUrl[key] = value !== undefined ? value ;
        //     }
        //     );   
         
         
        // function getUrl () {
        //     var vars = {}; 
        //     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        //         vars[key] = value;
        //     });
        //     return vars;
        // }

    //  function extractUrl() {
    //   var locationSearch = location.search.substring(2).split('&');
    //   var y = [];
    //   for (let i = 0; i < locationSearch.length; i++) {
    //      const x = y[i].split('=');
        
    // }
    

  


    // VOUS Y ETES PRESQUE !!!

    // ------------- FINAL STEP -----------------
        // A PARTIR DU PARAMETRE 'ID' PRESENT DANS L'URL :
            // 1. Récupérer l'article correspondant à partir du fichier 'JSON'
            // 2. Utiliser les données pour instancier un nouvel object 'Article'
            // 3. Inserer l'article dans la page 'article.html' sous la forme d'un element HTML


    // -- IMPORTANT --------------->
        // ---- comme vous pouvez le constater pour cette final step rien de bien nouveau, allons nous réecrire un code déjà fait ?
        // BIEN SUR QUE NON !
        // Il serait donc peut-etre jusdicieux d'organiser notre code en utilisant des fonctions dynamique réutilisable ;-)


    }});
}
