const el = (id) => document.getElementById(id);

const ui = {
    baseUrl: el('baseUrl'),
    saveBaseUrl: el('saveBaseUrl'),
    sessionInfo: el('sessionInfo'),
    authSection: el('authSection'),
    listsSection: el('listsSection'),
    createSection: el('createSection'),
    detailSection: el('detailSection'),
    registerForm: el('registerForm'),
    loginForm: el('loginForm'),
    authStatus: el('authStatus'),
    listsContainer: el('listsContainer'),
    listsStatus: el('listsStatus'),
    refreshLists: el('refreshLists'),
    logout: el('logout'),
    showCreate: el('showCreate'),
    createForm: el('createForm'),
    addItem: el('addItem'),
    itemsContainer: el('itemsContainer'),
    createStatus: el('createStatus'),
    cancelCreate: el('cancelCreate'),
    detailTitle: el('detailTitle'),
    detailEstado: el('detailEstado'),
    itemsList: el('itemsList'),
    detailStatus: el('detailStatus'),
    backToLists: el('backToLists'),
    duplicateList: el('duplicateList'),
};

const state = {
    baseUrl: localStorage.getItem('baseUrl') || 'http://localhost:8080/api',
    token: localStorage.getItem('token') || '',
    email: localStorage.getItem('email') || '',
    listas: [],
    current: null,
};

function setStatus(target, text, isError = false){
    if (!target) return;
    target.textContent = text || '';
    target.style.color = isError ? '#b91c1c' : '#475569';
}

function renderSession(){
    ui.sessionInfo.textContent = state.token ? `Conectado: ${state.email}` : 'Sin sesión';
}

function headers(withJson = true){
    const h = {};
    if (withJson) h['Content-Type'] = 'application/json';
    if (state.token) h.Authorization = `Bearer ${state.token}`;
    return h;
}

async function api(path, opts = {}){
    const res = await fetch(`${state.baseUrl}${path}`, {
        ...opts,
        headers: {...headers(opts.body !== undefined), ...(opts.headers || {})},
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok){
        throw new Error(data.message || `Error ${res.status}`);
    }
    return data;
}

function show(view){
    ['authSection', 'listsSection', 'createSection', 'detailSection'].forEach((id) => {
        ui[id].classList.add('hidden');
    });
    ui[view].classList.remove('hidden');
}

function saveSession(token, email){
    state.token = token;
    state.email = email;
    localStorage.setItem('token', token || '');
    localStorage.setItem('email', email || '');
    renderSession();
}

async function onRegister(e){
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    try{
        setStatus(ui.authStatus, 'Registrando...');
        const {token, data} = await api('/auth/register',{
            method: 'POST',
            body: JSON.stringify({email, password}),
        });
        saveSession(token, data.email);
        setStatus(ui.authStatus, 'Listo');
        await loadListas();
        show('listsSection');
    } catch (err){
        setStatus(ui.authStatus, err.message, true);
    }
}

async function onLogin(e){
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    try{
        setStatus(ui.authStatus, 'Ingresando...');
        const {token, data} = await api('/auth/login',{
            method: 'POST',
            body: JSON.stringify({email, password}),
        });
        saveSession(token, data.email);
        setStatus(ui.authStatus, 'Listo');
        await loadListas();
        show('listsSection');
    } catch (err){
        setStatus(ui.authStatus, err.message, true);
    }
}

function estadoBadge(estado){
    const map = {
        pendiente: {text: 'Pendiente', cls: 'pending'},
        en_proceso: {text: 'En proceso', cls: 'in-process'},
        terminado: {text: 'Terminado', cls: 'done'},
    };
    return map[estado] || {text: estado, cls: ''};
}

async function loadListas(){
    try{
        setStatus(ui.listsStatus, 'Cargando...');
        const res = await api('/listas', {method: 'GET'});
        state.listas = res.data || [];
        renderListas();
        setStatus(ui.listsStatus, '');
    } catch (err){
        setStatus(ui.listsStatus, err.message, true);
        if (err.message.toLowerCase().includes('token')){
            handleLogout();
        }
    }
}

function renderListas(){
    ui.listsContainer.innerHTML = '';
    if (!state.listas.length){
        ui.listsContainer.innerHTML = '<div class="muted">Sin listas</div>';
        return;
    }
    state.listas.forEach((l) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `<div>${l.titulo}</div>`;
        const badgeInfo = estadoBadge(l.estado);
        const btn = document.createElement('button');
        btn.textContent = 'Abrir';
        btn.onclick = () => selectLista(l._id);
        const badge = document.createElement('span');
        badge.className = `badge ${badgeInfo.cls}`;
        badge.textContent = badgeInfo.text;
        const right = document.createElement('div');
        right.style.display = 'flex';
        right.style.gap = '8px';
        right.append(badge, btn);
        div.appendChild(right);
        ui.listsContainer.appendChild(div);
    });
}

async function selectLista(id){
    try{
        setStatus(ui.detailStatus, 'Cargando...');
        const res = await api(`/listas/${id}`, {method: 'GET'});
        if (!res || !res.data) throw new Error('Respuesta sin datos');
        state.current = res.data;
        renderDetail();
        show('detailSection');
        setStatus(ui.detailStatus, '');
    } catch (err){
        setStatus(ui.detailStatus, err.message, true);
    }
}

function renderDetail(){
    const l = state.current;
    if (!l) return;
    ui.detailTitle.textContent = l.titulo;
    const badgeInfo = estadoBadge(l.estado);
    ui.detailEstado.textContent = badgeInfo.text;
    ui.detailEstado.className = `badge ${badgeInfo.cls}`;
    ui.itemsList.innerHTML = '';
    (l.items || []).forEach((it) => {
        const row = document.createElement('div');
        row.className = 'list-item';
        const left = document.createElement('div');
        left.style.display = 'flex';
        left.style.alignItems = 'center';
        left.style.gap = '8px';
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = !!it.esCompletado;
        cb.onchange = () => toggleItem(l._id, it._id, cb.checked);
        const name = document.createElement('div');
        name.textContent = it.nombre;
        left.append(cb, name);
        const date = document.createElement('div');
        date.className = 'muted';
        date.textContent = new Date(it.fecha).toLocaleDateString('es-PE');
        row.append(left, date);
        ui.itemsList.appendChild(row);
    });
}

async function toggleItem(listaId, itemId, checked){
    try{
        setStatus(ui.detailStatus, 'Actualizando...');
        const res = await api(`/listas/${listaId}/items/${itemId}`,{
            method: 'PATCH',
            body: JSON.stringify({ esCompletado: checked }),
        });
        if (res && res.data){
            state.current = res.data;
            state.listas = state.listas.map((l) => (l._id === listaId ? res.data : l));
            renderDetail();
            renderListas();
        }
        setStatus(ui.detailStatus, 'Lista actualizada correctamente');
    } catch (err){
        setStatus(ui.detailStatus, err.message, true);
    }
}

function addItemRow(){
    const row = document.createElement('div');
    row.className = 'item-row';
    row.innerHTML = `
        <input type="text" placeholder="Nombre del producto" required />
        <input type="text" placeholder="Descripción" required />
        <input type="text" placeholder="dd/mm/aa" required />
    `;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Quitar';
    remove.className = 'remove';
    remove.onclick = () => row.remove();
    row.appendChild(remove);
    ui.itemsContainer.appendChild(row);
}

function getItemsFromForm(){
    const rows = Array.from(ui.itemsContainer.querySelectorAll('.item-row'));
    const items = [];
    rows.forEach((row) => {
        const [nombre, descripcion, fecha] = row.querySelectorAll('input');
        if (!nombre.value.trim() || !descripcion.value.trim() || !fecha.value.trim()){
            throw new Error('Todos los productos necesitan nombre, descripción y fecha');
        }
        items.push({
            nombre: nombre.value.trim(),
            descripcion: descripcion.value.trim(),
            fecha: fecha.value.trim(),
        });
    });
    if (!items.length) throw new Error('Agrega al menos un producto');
    return items;
}

async function onCreate(e){
    e.preventDefault();
    const titulo = e.target.titulo.value.trim();
    try{
        const items = getItemsFromForm();
        setStatus(ui.createStatus, 'Creando...');
        const res = await api('/listas',{
            method: 'POST',
            body: JSON.stringify({ titulo, items }),
        });
        if (!res || !res.data) throw new Error('Respuesta sin datos');
        state.listas = [res.data, ...state.listas];
        renderListas();
        setStatus(ui.createStatus, 'Lista creada');
        e.target.reset();
        ui.itemsContainer.innerHTML = '';
        addItemRow();
        show('listsSection');
    } catch (err){
        setStatus(ui.createStatus, err.message, true);
    }
}

async function onDuplicate(){
    if (!state.current) return;
    try{
        setStatus(ui.detailStatus, 'Duplicando...');
        const res = await api(`/listas/${state.current._id}/duplicar`,{
            method: 'POST'});
        if (!res || !res.data) throw new Error('Respuesta sin datos');
        state.listas = [res.data, ...state.listas];
        renderListas();
        setStatus(ui.detailStatus, 'Lista duplicada');
    } catch (err){
        setStatus(ui.detailStatus, err.message, true);
    }
}

function handleLogout(){
    saveSession('', '');
    state.listas = [];
    state.current = null;
    ui.itemsList.innerHTML = '';
    show('authSection');
}

function initBaseUrl() {
    ui.baseUrl.value = state.baseUrl;
    ui.saveBaseUrl.onclick = () => {
        const val = ui.baseUrl.value.trim();
        if (val) {
            state.baseUrl = val;
            localStorage.setItem('baseUrl', val);
            setStatus(ui.authStatus, `API: ${val}`);
        }
    };
}

function init() {
    renderSession();
    initBaseUrl();
    ui.registerForm.addEventListener('submit', onRegister);
    ui.loginForm.addEventListener('submit', onLogin);
    ui.refreshLists.addEventListener('click', loadListas);
    ui.logout.addEventListener('click', handleLogout);
    ui.showCreate.addEventListener('click', () => show('createSection'));
    ui.cancelCreate.addEventListener('click', () => show('listsSection'));
    ui.addItem.addEventListener('click', addItemRow);
    ui.createForm.addEventListener('submit', onCreate);
    ui.backToLists.addEventListener('click', () => show('listsSection'));
    ui.duplicateList.addEventListener('click', onDuplicate);

    addItemRow();

    if (state.token){
        loadListas().then(() => show('listsSection')).catch(() => show('authSection'));
    } else{
        show('authSection');
    }
}

init();
