// Número aleatório para adivinhar
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Contador de tentativas
let tentativas = 0;

// Função para verificar o palpite do jogador
function verificarPalpite() {
    // Pegar o valor do input
    const palpite = parseInt(document.getElementById('palpite').value);

    // Atualizar o contador de tentativas
    tentativas++;

    // Verificar se o palpite está correto
    if (palpite === numeroAleatorio) {
        alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    } else if (palpite < numeroAleatorio) {
        alert('O número é maior. Tente novamente!');
    } else {
        alert('O número é menor. Tente novamente!');
    }
}
