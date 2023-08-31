function Verificar(){
    var YearNow = new Date()
    var year = YearNow.getFullYear()
    var inputYear = document.getElementById("year").value
    var birthday = (year - inputYear)
    const sex = document.querySelector('input[name="sex"]:checked').value
    var text = document.getElementById("res")
    var imagem = document.getElementById("imgres")

    // Kids
    if (birthday <= 10 && birthday > 0){
        
        // Masculino
        if (sex == 'Masculino'){
            text.innerHTML = `Verificamos que você é um menino de ${birthday} anos!`
            imagem.src = "imagens/baby-boy.jpeg"

        }

        // Feminino
        else{
            text.innerHTML = `Verificamos que você é uma menina de ${birthday} anos!`
            imagem.src = "imagens/baby-girl.jpeg"
        }
    }

    // Jovem
    else if (birthday > 10 && birthday <= 30){
         
        // Masculino
         if (sex == 'Masculino'){
            text.innerHTML = `Verificamos que você é um garoto de ${birthday} anos!`
            imagem.src = "imagens/young-boy.jpeg"
         }
 
         // Feminino
         else{
            text.innerHTML = `Verificamos que você é uma garota de ${birthday} anos!`
            imagem.src = "imagens/young-girl.jpeg"
         }
    }

    // Adulto/Idoso
    else{

        // Masculino
        if (sex == 'Masculino'){
            text.innerHTML = `Verificamos que você é um Adulto/Senhor de ${birthday} anos!`
            imagem.src = "imagens/old-boy.jpeg"
         }
 
         // Feminino
         else{
            text.innerHTML = `Verificamos que você é uma Moça/Senhora de ${birthday} anos!`
            imagem.src = "imagens/old-girk.jpeg"
         }
    }
}
