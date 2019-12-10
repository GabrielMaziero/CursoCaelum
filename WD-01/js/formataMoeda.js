/* Função que formata o valor informado para o moeda (formato Real Brasileiro) */
function formataMoeda(valor) {
    var moeda = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    // retornamos o valor no formato R$ 00,00
    return moeda;
}