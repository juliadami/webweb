function tabuada(){
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0 ){
        
        alert('Insira um número!')
        tab.innerHTML = ('<option> Digite um </option>' + '<option> número acima!</option>')
        document.getElementById('seltab').size="2"

    }else{
     
        let n = Number(num.value)
        let c = 1
        document.querySelector('#seltab').size = "10"
        tab.innerHTML = ''
        
        for(let c = 1; c <= 10; c++){
        
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        
        }
    }
}

function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Não foi possível a contagem, tente completar os dados !'
    
    }else{
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p <= 0 ){
            alert('Numero de passo inválido, considerando passo = 1')
            p = 1
        }

        if(i < f){
            
            for (let c = i; c <= f; c += p){//Ordem crescente  
                res.innerHTML += `${c} ▶️`              
            }
        }else{

            for(let c = i; c >= f; c-= p){//Ordem decrescente 
                res.innerHTML += `${c} ▶️`               
            }
       
        }
        res.innerHTML += `🚩`

    }
}