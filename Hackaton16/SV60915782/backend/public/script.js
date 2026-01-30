const socket = io();

const userInput = document.getElementById("user");
const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const user = userInput.value.trim();
  const msg = msgInput.value.trim();

  if (!user || !msg) return;

  socket.emit("mensaje", { user, msg });
  msgInput.value = "";
}

socket.on("mensaje", (data) => {
  const div = document.createElement("div");
  div.textContent = `${data.user}: ${data.msg}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
