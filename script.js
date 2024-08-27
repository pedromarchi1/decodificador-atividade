document.addEventListener('DOMContentLoaded', function() {
    const botaoCriptografar = document.getElementById('botaoCriptografar');
    const botaoDescriptografar = document.getElementById('botaoDescriptografar');
    const botaoCopiar = document.getElementById('botaoCopiar');
    const textoEntrada = document.getElementById('textoEntrada');
    const textoSaida = document.getElementById('textoSaida');

    const chavesCriptografia = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function criptografarTexto(texto) {
        return texto.replace(/[eioua]/g, c => chavesCriptografia[c]);
    }

    function descriptografarTexto(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    botaoCriptografar.addEventListener('click', function() {
        const texto = textoEntrada.value.toLowerCase();
        textoSaida.value = criptografarTexto(texto);
    });

    botaoDescriptografar.addEventListener('click', function() {
        const texto = textoEntrada.value.toLowerCase();
        textoSaida.value = descriptografarTexto(texto);
    });

    botaoCopiar.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(textoSaida.value);
            alert('Texto copiado para a área de transferência!');
        } catch (err) {
            alert('Falha ao copiar o texto: ' + err);
        }
    });
});
