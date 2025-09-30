document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('upload-btn');
  const inputImagem = document.getElementById('imagem-input');
  const statusDiv = document.getElementById('status');

  botao.addEventListener('click', function () {
    const imagem = inputImagem.files[0];

    if (!imagem) {
      statusDiv.textContent = 'Por favor, selecione uma imagem.';
      return;
    }

    const reader = new FileReader();

    reader.onloadend = function () {
      const base64 = reader.result.split(',')[1];
      const nomeArquivo = imagem.name;

      const payload = new URLSearchParams();
      payload.append('imagemBase64', base64);
      payload.append('nomeArquivo', nomeArquivo);

      fetch('https://script.google.com/macros/s/AKfycbwsSPT5DsF7j-XLLveSu4Dz3C00QXPcOfYunNamlwrs6DDm-qEWRosohQYhJ-EJYmmq9g/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      })
      .then(() => {
        statusDiv.textContent = 'Imagem enviada com sucesso!';
        inputImagem.value = '';
      })
      .catch(() => {
        statusDiv.textContent = 'Imagem enviada com sucesso!';
      });
    };

    reader.readAsDataURL(imagem);
  });
});

// ===== Alternar visibilidade de mensagens =====
function toggleVisibility(buttonId, messageId) {
  const button = document.getElementById(buttonId);
  const message = document.getElementById(messageId);

  if (button && message) {
    button.addEventListener('click', function () {
      message.style.display = (message.style.display === 'none') ? 'block' : 'none';
    });
  }
}

for (let i = 0; i <= 10; i++) {
  toggleVisibility(`clickHere${i}`, `message${i}`);
}