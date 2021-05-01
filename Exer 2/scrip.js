function verificar() {
    
    var diaf = Number(document.getElementById('txtdia').value) // Id = # class = .
    var mesf = Number(document.getElementById('txtmes').value)
    var res = document.querySelector('div#res')
    var signo = ``
    var img = document.createElement('img')

    if(mesf == 1)
    {
        if(diaf >=1  && diaf < 21){
            var signo = `Capriconio <br><br>`
            img.setAttribute('src','img/cap.jpg')
            
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Aquario <br><b>` 
            img.setAttribute('src','img/aqua.jpg')
        }
      
    }
    else if(mesf == 2){

        if(diaf >=1  && diaf <= 18){
            var signo = ` Aquario <br><br>`
            img.setAttribute('src','img/aqua.jpg')
        }
        else if(diaf >= 19 && diaf <29){
            var signo = `Peixes <br><b>` 
            img.setAttribute('src','img/peixes.jpg')
        }
    }
    else if(mesf == 3){

        if(diaf >=1  && diaf <= 21){
            var signo = `Peixes <br><br>`
            img.setAttribute('src','img/peixes.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Áries <br><b>` 
            img.setAttribute('src','img/aries.jpg')
            
        }
    }
    else if(mesf == 4){

        if(diaf >=1  && diaf <= 20){
            var signo = `Áries <br><br>`
            img.setAttribute('src','img/aries.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Touro <br><b>` 
            img.setAttribute('src','img/touro.jpg')
        }
    }
    else if(mesf == 5){

        if(diaf >=1  && diaf <= 20){
            var signo = `Touro <br><br>`
            img.setAttribute('src','img/touro.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Gêmeos <br><b>` 
            img.setAttribute('src','img/gemeos.jpg')
        }
    }
    else if(mesf == 6){

        if(diaf >=1  && diaf <= 20){
            var signo = `Gêmeos <br><br>`
            img.setAttribute('src','img/gemeos.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Câncer <br><b>` 
            img.setAttribute('src','img/cancer.jpg')
        }
    }
    else if(mesf == 7){

        if(diaf >=1  && diaf <= 22){
            var signo = `Câncer <br><br>`
            img.setAttribute('src','img/cancer.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Leão <br><b>` 
            img.setAttribute('src','img/leao.jpg')
        }
    }
    else if(mesf == 8){

        if(diaf >=1  && diaf <= 22){
            var signo = `Leão <br><br>`
            img.setAttribute('src','img/leao.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Virgem <br><b>` 
            img.setAttribute('src','img/virgem.jpg')
        }
    }
    else if(mesf == 9){

        if(diaf >=1  && diaf <= 22){
            var signo = `Virgem <br><br>`
            img.setAttribute('src','img/virgem.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Libra <br><b>` 
            img.setAttribute('src','img/libra.jpg')
        }
    }
    else if(mesf == 10){

        if(diaf >=1  && diaf <= 22){
            var signo = `Libra <br><br>`
            img.setAttribute('src','img/libra.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Escorpião <br><b>` 
            img.setAttribute('src','img/escorpiao.jpg')
        }
    }
    else if(mesf == 11){

        if(diaf >=1  && diaf <= 21){
            var signo = `Escorpião <br><br>`
            img.setAttribute('src','img/escorpiao.jpg')
        }
        else if(diaf >= 22 && diaf <31){
            var signo = `Sagitário <br><b>` 
            img.setAttribute('src','img/sagitario.jpg')
        }
    }
    else if(mesf == 12){

        if(diaf >=1  && diaf <= 21){
            var signo = `Sagitário <br><br>`
            img.setAttribute('src','img/sagitario.jpg')
        }
        else if(diaf >= 22 && diaf <31){
            var signo = `Capricórnio <br><b>` 
            img.setAttribute('src','img/cap.jpg')
        }
    }
 

    if(mesf > 12 || diaf > 31){
        res.innerHTML = `Favor verificar os dados informados`
    }
    else{
        res.innerHTML =`Seu signo é : ${signo}`
    }
    
    res.appendChild(img)

}