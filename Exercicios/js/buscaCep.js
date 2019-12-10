function buscaCep( cep ) {
    var dadosEndereco = [];

    try {
        if (cep.trim().length > 0 && isNaN(cep) == false) {
            var ajax = new XMLHttpRequest();
            ajax.open( 'GET', `https://viacep.com.br/ws/${cep}/json`, false );
            ajax.send(null);

            if (ajax.status === 200) {
                var respostaJson = JSON.parse(ajax.responseText);
                dadosEndereco[0] = respostaJson.logradouro;
                dadosEndereco[1] = respostaJson.bairro;
                dadosEndereco[2] = respostaJson.localidade;
                dadosEndereco[3] = respostaJson.uf;
            }
        }
        else {
            alert('Preencha o campo com um CEP válido!');
        }
    }
    catch(e) {
        console.error('buscaCep:', e);
    }

    return dadosEndereco;
}