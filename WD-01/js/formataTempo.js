/* Função que formata o valor 'tempo' (em minutos) no padrão HH:mm */
function formataTempo(tempo) {
    // calculamos o valor em horas para o tempo informado
    var tempoEmHorasFloat = tempo/60;
    // convertemos o valor obtivo num numero inteiro para saber a quantidade de horas exata
    var horas = parseInt(tempoEmHorasFloat);
    // obtemos a quantidade em minutos restante e também convertemos num inteiro
    var minutos = parseInt((tempoEmHorasFloat - horas) * 60);
    // retornamos o tempo no formato HH:mm
    return horas.toString().padStart(2,0) + ":" + minutos.toString().padStart(2,0);
}