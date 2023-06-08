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
  // Obtener la referencia al elemento del DOM donde se mostrará el perfil
const profileContainer = document.getElementById('profile-container');

// Obtener un perfil de usuario desde la API
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    // Crear los elementos del perfil
    const profileSection = document.createElement('div');
    profileSection.classList.add('profile-section');

    const profileImage = document.createElement('div');
    profileImage.classList.add('profile-image');
    profileImage.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/s%C3%ADmbolo-de-perfil-masculino-inteligente-retrato-estilo-caricatura-m%C3%ADnimo-166146967.jpg')";

    const profileInfo = document.createElement('div');
    profileInfo.classList.add('profile-info');

    const profileName = document.createElement('h2');
    profileName.classList.add('profile-name');
    profileName.textContent = user.name;

    const profileUsername = document.createElement('div');
    profileUsername.classList.add('profile-username');
    profileUsername.textContent = `@${user.username}`;

    const profileEmail = document.createElement('div');
    profileEmail.classList.add('profile-email');
    profileEmail.textContent = user.email;

    const profilePhone = document.createElement('div');
    profilePhone.classList.add('profile-phone');
    profilePhone.textContent = user.phone;

    const profileWebsite = document.createElement('div');
    profileWebsite.classList.add('profile-website');
    profileWebsite.textContent = user.website;

    // Agregar los elementos al perfil
    profileInfo.appendChild(profileName);
    profileInfo.appendChild(profileUsername);
    profileInfo.appendChild(profileEmail);
    profileInfo.appendChild(profilePhone);
    profileInfo.appendChild(profileWebsite);

    profileSection.appendChild(profileImage);
    profileSection.appendChild(profileInfo);

    // Agregar el perfil al contenedor en el DOM
    profileContainer.appendChild(profileSection);
  })