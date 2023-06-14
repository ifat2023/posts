fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <button  class="btn" type="button">View Comments</button>
        <div class="comments" id="comments-${post.id}"></div>
      `;

      postElement.addEventListener('click', () => {
        const commentsContainer = document.getElementById(`comments-${post.id}`);
        commentsContainer.innerHTML = '';

        fetchComments(post.id)
          .then(comments => {
            comments.forEach(comment => {
              const commentElement = document.createElement('div');
              commentElement.innerHTML = `
                <h3 id=colors>${comment.name}</h3>
                <p id= comments.body>${comment.body}</p>
              `;
              commentsContainer.appendChild(commentElement);
            });
          })
          .catch(error => console.log(error));
      });

      postContainer.appendChild(postElement);
    });
  })
  .catch(error => console.log(error));

function fetchComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json());
}