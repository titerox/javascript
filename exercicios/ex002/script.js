function submitForm() {
    // coletar os dados do formulário
    var dataEntrada = document.getElementById("data-entrada").value;
    var pesoJejum = document.getElementById("peso-jejum").value;
    var pesoPos = document.getElementById("peso-pos").value;
    var pontuacaoSono = document.getElementById("pontuacao-sono").value;
    var tempoSono = document.getElementById("tempo-sono").value;
    var sonoRem = document.getElementById("sono-rem").value;
    var sonoProfundo = document.getElementById("sono-profundo").value;
    var tempoAcordado = document.getElementById("acordado").value;
    var horamusc = document.getElementById("horamusc").value;
    var horabike = document.getElementById("horabike").value;
    var caloriasMusc = document.getElementById("calorias-musc").value;
    var freqMedia = document.getElementById("freq-media").value;
    var freqMax = document.getElementById("freq-max").value;
    var tempoTreino = document.getElementById("tempo-treino").value;
    var dia = document.getElementById("dia").value;
    // criar um objeto com os dados do formulário
    var dados = {
        dataEntrada: dataEntrada,
        pesoJejum: pesoJejum,
        pesoPos: pesoPos,
        pontuacaoSono: pontuacaoSono,
        tempoSono: tempoSono,
        sonoRem: sonoRem,
        sonoProfundo: sonoProfundo,
        tempoAcordado: tempoAcordado,
        horamusc: horamusc,
        horabike: horabike,
        caloriasMusc: caloriasMusc,
        freqMedia: freqMedia,
        freqMax: freqMax,
        tempoTreino: tempoTreino,
        dia: dia
    };
    // enviar os dados do formulário para o script Python no servidor
    fetch("/submit-form", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(response) {
        document.getElementById("res").innerHTML = response;
    });
}
