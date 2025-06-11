const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

botaoSim.addEventListener("click", () => {
  mensagem.innerHTML = "Eu já sabia! 💕";
});

botaoNao.addEventListener("mouseover", () => {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;

  const novaPosX = Math.random() * (larguraJanela - 100);
  const novaPosY = Math.random() * (alturaJanela - 100);

  botaoNao.style.left = novaPosX + "px";
  botaoNao.style.top = novaPosY + "px";
});