// BUTTON SCROLL
window.onscroll = function() {
    verificarPosicaoScroll();
  };
  
  function verificarPosicaoScroll() {
    var btnVoltarTopo = document.getElementById("btn-voltar-topo");
    
    if (document.documentElement.scrollTop > 200) {
      btnVoltarTopo.style.display = "block";
    } else {
      btnVoltarTopo.style.display = "none";
    }
  }
  
  function voltarAoTopo() {
    const posicaoAtual = document.documentElement.scrollTop;
    if (posicaoAtual > 0) {
      window.requestAnimationFrame(voltarAoTopo);
      window.scrollTo(0, posicaoAtual - posicaoAtual / 10);
    }
  }
  
  