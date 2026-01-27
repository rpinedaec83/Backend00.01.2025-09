// Hackaton 14
const socket = io();
const chat = document.getElementById('chat');
const form = document.getElementById('form-mensaje');
const inputUsuario = document.getElementById('usuario');
const inputTexto = document.getElementById('texto');

socket.on('historial', (mensajes)=>{
    mensajes.forEach(mostrarMensaje);
});

socket.on('mensaje', mostrarMensaje);

socket.on('mensaje-editado', (msg)=>{
    const elem = document.getElementById(`msg-${msg._id}`);
    if(elem){
        elem.querySelector('.texto').textContent = msg.texto +'(editado)';
    }
});

socket.on('mensaje-borrado', (id)=>{
    const elem = document.getElementById(`msg-${id}`);
    if(elem) elem.remove();
    console.log('Elemento eliminado');
})

function mostrarMensaje(msg){
    const div = document.createElement('div');
    div.id = `msg-${msg._id}`;
    div.className = `mensaje ${msg.esBot? 'bot':'user'} mb-2 p-2 rounded`;
    
    div.innerHTML = `
    <strong>${msg.usuario}:</strong>
    <span class="texto">${msg.texto}</span>
    <small class="text-muted">(${new Date(msg.fecha).toLocaleTimeString()})</small>
    ${!msg.esBot ? `
      <button class="btn btn-sm btn-warning ms-2" onclick="editar('${msg._id}')">Editar</button>
      <button class="btn btn-sm btn-danger ms-1" onclick="borrar('${msg._id}')">Borrar</button>
    ` : ''}
  `;

chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const usuario = inputUsuario.value.trim();
    const texto = inputTexto.value.trim();

    if(usuario&&texto){
        socket.emit('mensaje', {usuario,texto});
        inputTexto.value = '';
        inputTexto.focus();
    }
});

function editar(id){
    const nuevoTexto = prompt('Nuevo texto:');
    if(nuevoTexto){
        socket.emit(`editar-mensaje', ${id,nuevoTexto}`)
    }
}

function borrar(id){
    if(confirm('¿Borrar mensaje?')){
        socket.emit('borrar-mensaje',id);
    }
}