const userIdInput = document.getElementById('user-id');
const btnGetUser = document.getElementById('btn-get-user');
const userInfoElement = document.getElementById('user-info');

btnGetUser.onclick = () => {
  const userId = userIdInput.value;

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      const { name, username, phone } = data;

      userInfoElement.innerHTML = `
        <h2>Данные пользователя №${userId}</h2>
        <ul>
          <li>Имя: ${name}</li>
          <li>Имя пользователя: ${username}</li>
          <li>Телефон: ${phone}</li>
        </ul>
      `;
    })
    .catch((error) => {
      userInfoElement.textContent = `Произошла ошибка: ${error.message}`;
    });
};

userIdInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    btnGetUser.onclick();
  }
});