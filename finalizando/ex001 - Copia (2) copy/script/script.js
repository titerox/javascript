
let add = document.getElementById('add')
let valores = []
let finalizar = document.getElementById('final')
let res = document.getElementById('analise')

function isNumero(n){
    if(n >= 1 && n <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    let num = document.getElementById('n1')
    
    if (isNumero(num.value) && !inLista(num.value, valores)){
        //TUdo ok
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        
        add.appendChild(item)
    } else{
        alert('Digite um número válido.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function mostrar(){
    if (valores.length === 0){
        alert('Adicione valores antes de finalizar')
    } else{
        
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            soma += valores[pos]
            media = soma/(valores.length)
        }

       
            
        

        res.innerHTML = ''

        res.innerHTML += `<p>Temos ao todo ${valores.length} números cadastrados.</p>`

        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`

        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`

        res.innerHTML += `<p>A soma dos números é ${soma}</p>`

        res.innerHTML += `<p>A média é ${media}</p>`

        res.innerHTML += ``
    }
    
}
