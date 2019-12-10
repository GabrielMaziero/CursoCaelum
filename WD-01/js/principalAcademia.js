VMasker(campoDataNascimento).maskPattern('99/99/9999')
    campoNome.focus()
    function cadastrar(){
        var nome = campoNome.value
        var peso = campoPeso.value
        var altura = campoAltura.value
        var nascimento = campoDataNascimento.value
        var dataPedaco = nascimento.split('/')
        var dia = dataPedaco[0]
        var mes = dataPedaco[1]
        var ano = dataPedaco[2]
        var idade = calculaIdade(dia, mes, ano)
        var souCardiaco = campoCardiaco.checked
        var frase

        if (idade <14 || souCardiaco == true)
        {
            frase = 'PRECISA DE ACOMPANHAMENTO MEDICO'
        }
        else
        {
            frase = 'NÃO PRECISA DE ACOMPANHAMENTO MEDICO'
        }

        mostra(`
            Seus dados cadastrais são:<br><br>

            Nome: ${nome}<br>
            Peso: ${peso} kg<br>
            Altura: ${altura} m<br>
            Data de nascimento: ${nascimento} <br>
            Idade: ${idade} anos <br>
            ${frase}
            <hr>
        `)
        campoNome.value =''
        campoPeso.value =''
        campoAltura.value =''
        campoDataNascimento.value =''
        campoNome.focus()
    }

    // executar a função quando o Enter for pressionado
    