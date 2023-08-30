var year = document.getElementById("year")
let ano = year.value
let yearnowDays = new Date()
let nascimento = yearnowDays.getFullYear()

var text = document.getElementById("texto")

function Verificar(){
    var img = document.getElementById("imguy")
    var idade = (nascimento - year.value)
    const sex = document.querySelector('input[name="sex"]:checked').value
    console.log(sex)
    
    if (idade <= 10 && idade >= 0 ){

        if(sex == "False"){
            text.innerHTML =`Verificamos que sua idade é de ${idade} <br> e você é um garoto!`
            img.src = 'imagens/baby-boy.jpg'
        }

        else{
            text.innerHTML = `Verificamos que sua idade é de ${idade} <br> e você é uma garota!`
            img.src = 'imagens/baby-girl.jpg'
        }


        }

    else if (idade > 10 && idade <= 40 ){

        if(sex == "False"){
            text.innerHTML = "Teste"
        }

        else{
            text.innerHTML = `Verificamos que sua idade é de ${idade} e você é mulher!`
            img.src = 'imagens/baby-girl.jpg'
        }
    }

    else{
        alert("Verifique o ano inserido")
    }
}
