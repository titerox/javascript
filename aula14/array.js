let num = [5, 8, 4, 6, 7, 9]
num.sort()
/*
for (let c = 0; c < num.length; c++){
    console.log(`A posição ${c+1} tem o valor ${num[c]}`)
}
*/
for (c in num){
    console.log(num.indexOf(c+3))
}