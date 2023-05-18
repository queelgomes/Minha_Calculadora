let calculo = []
let calculo2 =[]
let simbolo = []

//->> Momento que aperta o número:
function adicionar1(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(1)
    i.innerHTML += '1'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(1)
    i.innerHTML += '1'
    }else{
    i.innerHTML += ''
    }

}

function adicionar2(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(2)
    i.innerHTML += '2'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(2)
    i.innerHTML += '2'
    }else{
    i.innerHTML += ''
    }
}

function adicionar3(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(3)
    i.innerHTML += '3'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(3)
    i.innerHTML += '3'
    }else{
    i.innerHTML += ''
    }
}

function adicionar4(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(4)
    i.innerHTML += '4'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(4)
    i.innerHTML += '4'
    }else{
    i.innerHTML += ''
    }
}

function adicionar5(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(5)
    i.innerHTML += '5'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(5)
    i.innerHTML += '5'
    }else{
    i.innerHTML += ''
    }
}

function adicionar6(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(6)
    i.innerHTML += '6'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(6)
    i.innerHTML += '6'
    }else{
    i.innerHTML += ''
    }
}

function adicionar7(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(7)
    i.innerHTML += '7'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(7)
    i.innerHTML += '7'
    }else{
    i.innerHTML += ''
    }
}

function adicionar8(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(8)
    i.innerHTML += '8'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(8)
    i.innerHTML += '8'
    }else{
    i.innerHTML += ''
    }
}

function adicionar9(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(9)
    i.innerHTML += '9'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(9)
    i.innerHTML += '9'
    }else{
    i.innerHTML += ''
    }
}

function adicionar0(){
    let i = cxcalc
    if(simbolo.length==0){
    calculo.push(0)
    i.innerHTML += '0'
    }else if(calculo2.length==0 || calculo2.length>0){
    calculo2.push(0)
    i.innerHTML += '0'
    }else{
    i.innerHTML += ''
    }
}


/////
function somar(){
    let i = cxcalc
    if(calculo2.length == 0){
        simbolo.push('+')
        i.innerHTML = '+'
    }else{
        i.innerHTML += ''
    }
}

function subtrair(){
    let i = cxcalc
    if(calculo2.length == 0){
        simbolo.push('-')
        i.innerHTML = '-'
    }else{
        i.innerHTML += ''
    }
}

function dividir(){
    let i = cxcalc
    if(calculo2.length == 0){
        simbolo.push('/')
        i.innerHTML = '/'
    }else{
        i.innerHTML += ''
    }
}

function multiplicar(){
    let i = cxcalc
    if(calculo2.length == 0){
        simbolo.push('*')
        i.innerHTML = '*'
    }else{
        i.innerHTML += ''
    }
}


/////
function resultado(n){
    let i = cxcalc
    let nn1 = Number(calculo.join(''))
    let nn2 = Number(calculo2.join(''))
    let sim = simbolo.join('')
    let mais = nn1+nn2    
    let menos =nn1-nn2
    let dividir =nn1/nn2
    let multiplicar = nn1*nn2


    if(sim=='+'){
        i.innerHTML = (mais)
    }else if(sim=='-'){
        i.innerHTML = (menos) 
    }else if(sim=='*'){
        i.innerHTML = (dividir)  
    }else if(sim=='/'){
        i.innerHTML = (multiplicar)  
    }else{
        console.log('erro')
    }

    
    
}

/////

function limpar(){
    calculo = []
    calculo2 = []
    simbolo = []
    let i = cxcalc
    i.innerHTML = ''
}
