fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const container = document.createElement('div');
    container.classList.add('container');

    posts.forEach(({ title, body }) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const titleElement = document.createElement('h2');
      titleElement.textContent = title;

      const bodyElement = document.createElement('p');
      bodyElement.textContent = body;

      postDiv.append(titleElement, bodyElement);
      container.appendChild(postDiv);
    });

    document.body.appendChild(container);
  })