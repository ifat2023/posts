fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    // Display posts
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = 
      `
        <h2>${post.title}</h2>
        <div button type="button" onclick="fetchComments<p>('${post.body}')</p>"</button>
      `;
  
      postElement.addEventListener('click', () => {
        fetchComments(post.id);
      });
      postContainer.appendChild(postElement);
    });
  })
  .catch(error => console.log(error));


function fetchComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(comments => {
      // Display comments
      const commentsContainer = document.getElementById('comments-container');
      commentsContainer.innerHTML = '';
      comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
          <h3>${comment.name}</h3>
          <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch(error => console.log(error));
}