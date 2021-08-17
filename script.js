const postTitle = document.querySelector('.post__title');
const postBody = document.querySelector('.post__body');
const main = document.querySelector('main')
let commentBody = document.createElement('div');     
main.append(commentBody);

fetch('https://jsonplaceholder.typicode.com/posts')
 .then( response => {return  response.json()})
 .then(data =>{
    let id = 0;
    fetch('https://jsonplaceholder.typicode.com/comments')
    		.then( dataCom => dataCom.json())
    		.then(res =>{
          console.log(res);
    let btnChangePost = document.querySelector(".post__btn_change");
        btnChangePost.addEventListener("click", () => {
          
          postTitle.innerHTML = id + '  ' + data[id].title;
          postBody.innerHTML = data[id].body;

          // ********* comments ************
          
          commentBody.remove();
          commentBody = document.createElement('div');  
          main.append(commentBody);

          for ( let i = id*5; i < id*5+5; i++ ) {
            let comment = document.createElement('p');
            commentBody.append(comment);
            comment.className = ('comment');
            comment.innerHTML = res[i].body;
          }
          id ++;
        })
      })
       

})