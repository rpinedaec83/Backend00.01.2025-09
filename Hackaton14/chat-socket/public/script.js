const socket = io();
const messages = document.getElementById("messages");

socket.on("load_messages", (msgs) => {
  msgs.forEach(showMessage);
});

socket.on("receive_message", showMessage);

socket.on("chat_cleared", () => {
  messages.innerHTML = "";
});

function send() {
  const user = document.getElementById("user").value;
  const msg = document.getElementById("msg").value;

  socket.emit("send_message", {
    username: user,
    content: msg
  });
}

function clearChat() {
  socket.emit("delete_all");
}

function showMessage(msg) {
  const li = document.createElement("li");
  li.innerText = `${msg.username}: ${msg.content}`;
  messages.appendChild(li);
}
