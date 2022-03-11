function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora != 1){
        msg.innerHTML = `<p>Agora é ${hora} horas</p>`
    }else{
        msg.innerHTML = `<p>Agora é ${hora} hora</p>`
    }

    if(hora >= 0 && hora <= 11 ){
        img.src = 'images/manha.jpg'
        document.body.style.background = '#dbc9c3'
    }else if(hora >= 12 && hora < 18){
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#91b3c8'
    }else if(hora >= 18 && hora <= 23){
        img.src = 'images/noite.jpg'
        document.body.style.background = '#2d1d1e'
    }else{
        `<p>Error</p>`
        document.body.style.background = 'red'
    }
}

function verificar(){
    document.body.style.background = '#d3d3d3'
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0){
        alert ('ERROR! Digite um valor válido!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(idade >= 0){
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade <16 ){
                    
                    img.setAttribute('src', 'images/crianca-m.jpg')

                }else if(idade < 50){
                    
                    img.setAttribute('src', 'images/adulto.jpg')

                }else {
                    
                    img.setAttribute('src', 'images/velho.jpg')
                }
            }else if (fsex[1].checked){
                gênero = 'Mulher'
                if(idade >= 0 && idade < 16 ){
                    
                    img.setAttribute('src', 'images/crianca-f.jpg')
                }else if(idade < 50){
                    
                    img.setAttribute('src', 'images/adulta.jpg')

                }else {
                    img.setAttribute('src', 'images/velha.jpg')

                }
            }

            if(idade==1){
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} ano`
            }else{
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} anos`
            }
            res.appendChild(img)
            
        }else{
            alert('Digite um número valido')
        }
            
        
    }
}