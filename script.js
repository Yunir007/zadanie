


javascript
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var email = document.getElementById('email').value;
  // Добавьте здесь код для отправки данных на сервер
  console.log('Sign Up:', username, password, email);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;
  // Добавьте здесь код для отправки данных на сервер
  console.log('Log In:', username, password);
});

// Создание объекта "peerConnection"
const peerConnection = new RTCPeerConnection();

// Получение локального видеопотока
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    const localVideo = document.getElementById('local-video');
    localVideo.srcObject = stream;
    peerConnection.addStream(stream);
  });

// Обработка удаленного видеопотока
peerConnection.onaddstream = event => {
  const remoteVideo = document.getElementById('remote-video');
  remoteVideo.srcObject = event.stream;
};

// Обработка нажатия кнопки "Старт"
document.getElementById('start-button').addEventListener('click', () => {
  // Создание предложения для установки соединения
  peerConnection.createOffer()
    .then(offer => peerConnection.setLocalDescription(offer))
    .then(() => {
      // Отправка предложения серверу или другому пользователю
      // и получение ответа
    });
});

// Обработка нажатия кнопки "Стоп"
document.getElementById('stop-button').addEventListener('click', () => {
  // Закрытие соединения
  peerConnection.close();
});

