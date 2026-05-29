// Seleção dos elementos do HTML
const btnSol = document.getElementById('btn-sol');
const btnRegar = document.getElementById('btn-regar');
const txtUmidade = document.getElementById('txt-umidade');
const statusSolo = document.getElementById('status-solo');
const statusSistema = document.getElementById('status-sistema');
const txtEconomia = document.getElementById('txt-economia');

// Variáveis de controle do estado do simulador
let umidade = 45;
let economiaAgua = 0;

// Função para atualizar a interface visual
function atualizarInterface() {
    txtUmidade.innerText = `${umidade}%`;
    
    if (umidade < 40) {
        statusSolo.innerText = "Crítico: Solo muito seco!";
        statusSolo.className = "status alerta";
    } else if (umidade >= 40 && umidade <= 70) {
        statusSolo.innerText = "Moderado: Ideal para crescimento";
        statusSolo.className = "status verde";
    } else {
        statusSolo.innerText = "Solo Encharcado";
        statusSolo.className = "status ligado";
    }
}

// Evento: Simular o Sol secando a terra
btnSol.addEventListener('click', () => {
    if (umidade > 15) {
        umidade -= 10; // Diminui a umidade
        statusSistema.innerText = "Desligado";
        statusSistema.className = "dado desligado";
        atualizarInterface();
    } else {
        alert("O solo já está na umidade mínima para a planta!");
    }
});

// Evento: Acionar a irrigação inteligente
btnRegar.addEventListener('click', () => {
    if (umidade < 70) {
        statusSistema.innerText = "Irrigando...";
        statusSistema.className = "dado ligado";
        
        // Simula a irrigação subindo a umidade em um pequeno intervalo de tempo
        setTimeout(() => {
            umidade = 65; // Vai para o nível ideal
            economiaAgua += 150; // Acumula água economizada por não super-irrigar
            
            statusSistema.innerText = "Desligado (Meta Atingida)";
            statusSistema.className = "dado desligado";
            txtEconomia.innerText = `${economiaAgua} Litros`;
            
            atualizarInterface();
        }, 1200); // 1.2 segundos de animação simulada
    } else {
        alert("O sensor detectou que o solo já tem umidade suficiente. Irrigação bloqueada para evitar desperdício!");
    }
});
