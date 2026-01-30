const socket = io();
const messagesList = document.getElementById("messages");

socket.on("chat-history", (messages) => {
  messagesList.innerHTML = "";
  messages.forEach(addMessage);
});

socket.on("new-message", addMessage);

socket.on("message-edited", (msg) => {
  const li = document.getElementById(msg._id);
  if (li) li.textContent = `${msg.user}: ${msg.text} (editado)`;
});

socket.on("chat-cleared", () => {
  messagesList.innerHTML = "";
});

function sendMessage() {
  const user = document.getElementById("user").value;
  const text = document.getElementById("message").value;

  socket.emit("send-message", { user, text });
}

function clearChat() {
  socket.emit("clear-chat");
}

function addMessage(msg) {
  const li = document.createElement("li");
  li.id = msg._id;
  li.textContent = `${msg.user}: ${msg.text}`;
  messagesList.appendChild(li);
}
