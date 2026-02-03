// CONFIGURAÇÃO DE LOGIN
const USER = 'admin';
const PASS = '1234';

const showAdminBtn = document.getElementById('showAdminBtn');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');
const adminPanel = document.getElementById('adminPanel');
const gallery = document.getElementById('gallery');

showAdminBtn.addEventListener('click', () => loginForm.style.display = 'block');

loginBtn.addEventListener('click', () => {
  const name = document.getElementById('adminName').value;
  const pass = document.getElementById('adminPass').value;
  if(name === USER && pass === PASS){
    loginForm.style.display = 'none';
    adminPanel.style.display = 'block';
    renderGallery();
  } else {
    loginMsg.textContent = 'Usuário ou senha incorretos';
  }
});

// CARREGAR IMAGENS DO LOCALSTORAGE
let images = JSON.parse(localStorage.getItem('images')) || [];

// FUNÇÃO PARA RENDERIZAR GALERIA (HTML estatico para SEO)
function renderGallery(){
  gallery.innerHTML = '';
  images.forEach((img,index) => {
    gallery.innerHTML += `
      <div class="card">
        <a href="${img.link}" target="_blank">
          <img src="${img.img}" alt="${img.alt}">
        </a>
        <p>${img.description}</p>
        ${adminPanel.style.display === 'block' ? `<button onclick="editImage(${index})">Editar</button>
        <button onclick="deleteImage(${index})">Excluir</button>` : ''}
      </div>`;
  });
}

// ADICIONAR IMAGEM
const addForm = document.getElementById('addImageForm');
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const newImage = {
    title: addForm.title.value,
    year: addForm.year.value,
    link: addForm.link.value,
    img: addForm.img.value,
    alt: addForm.alt.value,
    description: addForm.description.value
  };
  images.push(newImage);
  localStorage.setItem('images', JSON.stringify(images));
  addForm.reset();
  renderGallery();
});

// EXCLUIR / EDITAR
function deleteImage(index){
  images.splice(index,1);
  localStorage.setItem('images', JSON.stringify(images));
  renderGallery();
}

function editImage(index){
  const img = images[index];
  addForm.title.value = img.title;
  addForm.year.value = img.year;
  addForm.link.value = img.link;
  addForm.img.value = img.img;
  addForm.alt.value = img.alt;
  addForm.description.value = img.description;
  deleteImage(index);
}

// RENDER INICIAL PARA SEO
renderGallery();
