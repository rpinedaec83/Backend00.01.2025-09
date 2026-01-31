const socket = io();
const messageForm = document.getElementById("messageForm");
const message = document.getElementById("message");
const chat = document.getElementById("chat");
const status = document.getElementById("status");
let username = "";

socket.on("username", data => {
  username = data.username;
  document.getElementById("username").innerText = username;
});

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  if (message.value) {
    socket.emit("send-message", message.value, username);
    message.value = "";
  }
});

socket.on("new-message", data => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${data.username}:</strong> ${data.msg}`;
  chat.appendChild(li);
  chat.scrollTop = chat.scrollHeight;
});

socket.on("initial-message", data => {
  const arr = JSON.parse(data.msg);
  arr.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${m.user}:</strong> ${m.message}`;
    chat.appendChild(li);
  });
  chat.scrollTop = chat.scrollHeight;
});

socket.on("typing", data => status.innerText = data || "");

message.addEventListener("input", () => socket.emit("typing", username + " está escribiendo..."));
message.addEventListener("blur", () => socket.emit("typing", ""));