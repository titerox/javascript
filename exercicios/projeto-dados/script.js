function verificar(){
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    var data = new Date()
    var anoatual = data.getFullYear()
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    

    if (nasc.value.length == 0 || nasc.value > 2023){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = anoatual - nasc.value
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 18){
                //CRIANÇA
                img.setAttribute('src', 'HOMEM-CRIANCA.png')
            } else if (idade < 30){
                //JOVEM
                img.setAttribute('src', 'HOMEM-JOVEM.png')
            } else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'HOMEM-ADULTO.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'HOMEM-IDOSO.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade < 18){
                //CRIANÇA
                img.setAttribute('src', 'MULHER-CRIANCA.png')
            } else if (idade < 30){
                //JOVEM
                img.setAttribute('src', 'MULHER-JOVEM.png')
                
            } else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'MULHER-ADULTA.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'MULHER-IDOSA.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        
        res.appendChild(img)
        img.style.paddingBottom = '-20px'
    }


}