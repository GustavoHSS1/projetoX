const imagens = [
    "images/IMG_7412.JPG",
    "images/IMG_7413.JPG",
    "images/IMG_7414.JPG",
    "images/IMG_7415.JPG"
  ];
  
  let indiceAtual = 0;
  
  const imagem = document.getElementById("image");
  const botaoProxima = document.getElementById("nextButton");
  const botaoAnterior = document.getElementById("prevButton");
  
  botaoProxima.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagem.src = imagens[indiceAtual];
  });
  
  botaoAnterior.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imagem.src = imagens[indiceAtual];
  });