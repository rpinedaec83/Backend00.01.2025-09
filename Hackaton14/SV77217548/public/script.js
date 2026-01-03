const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');
const clearButton = document.getElementById('clear-button');
const authorInput = document.getElementById('author-input');

const storedAuthor = localStorage.getItem('chat_author');
authorInput.value = storedAuthor || 'Usuario';

authorInput.addEventListener('input', (event) => {
    const value = event.target.value.trim();
    if (value){
        localStorage.setItem('chat_author', value);
    }
});

function formatTime(isoString){
    if (!isoString){
        return '';
    }
    const date = new Date(isoString);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

function createMessageElement(message){
    const wrapper = document.createElement('article');
    wrapper.className = `message message--${message.role}`;
    wrapper.dataset.id = message.id;

    const meta = document.createElement('div');
    meta.className = 'message__meta';

    const roleLabel = document.createElement('span');
    roleLabel.textContent = message.role === 'assistant'
        ? message.author || 'ChatGPT'
        : message.author || 'Usuario';

    const timeLabel = document.createElement('span');
    timeLabel.textContent = formatTime(message.createdAt);

    meta.appendChild(roleLabel);
    meta.appendChild(timeLabel);

    const content = document.createElement('p');
    content.className = 'message__content';
    content.textContent = message.content;

    wrapper.appendChild(meta);
    wrapper.appendChild(content);

    if (message.role === 'user'){
        const actions = document.createElement('div');
        actions.className = 'message__actions';

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.dataset.action = 'edit';
        editButton.textContent = 'Editar';

        actions.appendChild(editButton);
        wrapper.appendChild(actions);
    }

    if (message.edited){
        const editedLabel = document.createElement('div');
        editedLabel.className = 'message__edited';
        editedLabel.textContent = 'Editado';
        wrapper.appendChild(editedLabel);
    }

    return wrapper;
}

function appendMessage(message){
    const element = createMessageElement(message);
    messages.appendChild(element);
    messages.scrollTop = messages.scrollHeight;
}

function updateMessage(message){
    const element = messages.querySelector(`[data-id="${message.id}"]`);
    if (!element){
        return;
    }
    const content = element.querySelector('.message__content');
    if (content){
        content.textContent = message.content;
    }
    if (message.edited && !element.querySelector('.message__edited')){
        const editedLabel = document.createElement('div');
        editedLabel.className = 'message__edited';
        editedLabel.textContent = 'Editado';
        element.appendChild(editedLabel);
    }
}

function clearMessages() {
    messages.innerHTML = '';
}

socket.on('history', (history) => {
    clearMessages();
    history.forEach(appendMessage);
});

socket.on('messageCreated', (message) => {
    appendMessage(message);
});

socket.on('messageUpdated', (message) => {
    updateMessage(message);
});

socket.on('historyCleared', () => {
    clearMessages();
});

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const content = messageInput.value.trim();
    if (!content){
        return;
    }

    const payload = {
        content,
        author: authorInput.value.trim() || 'Usuario'
    };

    socket.emit('sendMessage', payload, (error) => {
        if (error?.error){
            alert(error.error);
            return;
        }
        messageInput.value = '';
        messageInput.focus();
    });
});

clearButton.addEventListener('click', () => {
    const confirmed = window.confirm('Seguro que deseas borrar todo el historial?');
    if (!confirmed){
        return;
    }
    socket.emit('clearHistory', (error) => {
        if (error?.error){
            alert(error.error);
        }
    });
});

messages.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)){
        return;
    }
    if (!target.matches('[data-action="edit"]')){
        return;
    }

    const messageElement = target.closest('.message');
    if (!messageElement){
        return;
    }

    const messageId = messageElement.dataset.id;
    const contentElement = messageElement.querySelector('.message__content');
    const currentText = contentElement ? contentElement.textContent : '';
    const nextText = window.prompt('Editar mensaje:', currentText || '');
    if (!nextText || !messageId){
        return;
    }

    socket.emit('editMessage', {id: messageId, content: nextText}, (error) => {
        if (error?.error){
            alert(error.error);
        }
    });
});
