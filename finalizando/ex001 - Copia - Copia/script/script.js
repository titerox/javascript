function contar(){
    let inicio = document.getElementById('init')
    let fim = document.getElementById('fim')
    let step = document.getElementById('step')
    let res = document.getElementById('res')

    if(inicio.value.length === 0 || fim.value.length === 0 || step.value.length === 0){
        //alert('[ERRO] Digite os dados corretamente')
        res.innerHTML = 'impossível contar'
    }else{
        res.innerHTML = 'Contando: '
    


        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(step.value)
        if (p <= 0){
            alert('Passo inválido. Considerando Passo = 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `}
        } else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
    
}