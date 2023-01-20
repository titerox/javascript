
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora == 1){
        msg.innerHTML = `Agora é ${hora} hora.`
    } else if (hora == 0){
        msg.innerHTML = `Agora é meia noite.`
    } else if (hora < 24){
        msg.innerHTML = `Agora são ${hora} horas.`
    } else{
        msg.innerHTML = `Não existe ${hora} horas.`
    }

    if (hora < 6){
        img.src = './imagens/madrugada1.png'
        document.body.style.background = '#061220cc'
    } else if (hora < 12){
        //BOM DIA
        img.src = './imagens/manha1.png'
        document.body.style.background = '#ceffaecc'
    } else if (hora < 18){
        //BOA TARDE
        img.src = './imagens/tarde1.png'
        document.body.style.background = '#eca34ecc'
    } else{
        //BOA NOITE
        img.src = './imagens/noite1.png'
        document.body.style.background = '#080224c5'
    }
}