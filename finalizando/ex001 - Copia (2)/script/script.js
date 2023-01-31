function tabuada(){
    let num = document.getElementById('n1')
    let tab = document.getElementById('seltab')
    if (num.value.length === 0){
       alert('Por favor, digite um número')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1; c <= 10; c += 1){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}