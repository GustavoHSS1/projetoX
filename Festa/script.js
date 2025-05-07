const imagens = [
  "images/IMG_7412.JPG",
  "images/IMG_7413.JPG",
  "images/IMG_7414.JPG",
  "images/IMG_7415.JPG"
];

let indiceAtual = 0;
const favoritos = [];

const imagem = document.getElementById("image");
const botaoProxima = document.getElementById("nextButton");
const botaoAnterior = document.getElementById("prevButton");
const botaoFavorito = document.getElementById("favoriteButton");
const favoritosContainer = document.getElementById("favorites");

function atualizarImagem() {
  imagem.src = imagens[indiceAtual];
}

function adicionarFavorito() {
  const imagemAtual = imagens[indiceAtual];
  if (!favoritos.includes(imagemAtual)) {
    favoritos.push(imagemAtual);
    atualizarFavoritos();
  }
}

function atualizarFavoritos() {
  favoritosContainer.innerHTML = "";
  favoritos.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    favoritosContainer.appendChild(img);
  });
}

botaoProxima.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
});

botaoAnterior.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
});

botaoFavorito.addEventListener("click", adicionarFavorito);