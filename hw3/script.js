'use strict'

const wsUri = 'wss://echo-ws-service.herokuapp.com';
let inputValue = document.querySelector('input');
const sendBtn = document.querySelector('.sendBtn');
const geoBtn = document.querySelector('.geoBtn');
const divMessages = document.querySelector('.messages');
let webSocket = new WebSocket(wsUri);
webSocket.onopen;

function writeToScreen(message) {
    divMessages.innerHTML += `<p class='left'>${message}</p>`;
  }

sendBtn.addEventListener('click', ()=>{
    let message = inputValue.value.toString();
    divMessages.innerHTML += `<p class='right'>${message}</p>`;
    writeToScreen(message);
    webSocket.send(message);
});

geoBtn.addEventListener('click', ()=>{
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      console.log(coords.latitude, coords.longitude);
      writeToScreen(`https://www.openstreetmap.org/#map=19/${coords.latitude}/${coords.longitude}`);
      webSocket.send(message);
    });
  }
  
});