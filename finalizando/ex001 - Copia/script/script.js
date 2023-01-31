
function verificar(){
    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')

    var hoje = new Date()
    var anohoje = hoje.getFullYear()
    

    if (ano.value.length === 0 || ano.value > anohoje){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = anohoje - Number(ano.value)
        
        var genre = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genre = 'Homem'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'imagens/HOMEM-CRIANCA.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/HOMEM-JOVEM.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/HOMEM-ADULTO.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/HOMEM-IDOSO.png')
            }
        } else{
            genre = 'Mulher'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'imagens/MULHER-CRIANCA.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/MULHER-JOVEM.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/MULHER-ADULTA.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/MULHER-IDOSA.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genre} com ${idade} anos.`
        res.appendChild(img)
    }

}