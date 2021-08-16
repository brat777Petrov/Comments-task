const postTitle = document.querySelector('.post__title');
const postBody = document.querySelector('.post__body');

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
.then( function(response) {  
  // if (response.status !== 200) {  
  //   console.log('Looks like there was a problem. Status Code: ' +  
  //     response.status);  
  //   return;  
  // }
	response.json()
 	.then(function(data) {  
        id = 0;
        postTitle.innerHTML = id + '  ' + data[id].title;
        postBody.innerHTML = data[id].body;

	        let btnChangePost = document.querySelector(".post__btn_change");
	      		btnChangePost.addEventListener("click", () => {
			        id ++;
			  		if (!data[id]) {
				      id = 0;
			    	}
			    postTitle.innerHTML = id + '  ' + data[id].title;
			    postBody.innerHTML = data[id].body;
 				});

	      	

	  	})
	}  
  ) 
// ********* comments ************
// fetch(url + '/1/comments')
// 		.then( function(data) {
// 			data.json()
// 		})
// 		.then((json) =>{console.log(json);})
  
// let btnPostCommit = document.querySelector(".post__btn_commit");
// 	btnPostCommit.addEventListener('click', () => {
// 		console.log('777777');
		
// 	});

