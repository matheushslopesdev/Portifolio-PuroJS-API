const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const idade = document.querySelector('#idade')
const btnCalc = document.querySelector('#btn-calc')
const resul = document.querySelector('.resul')

const mulher = document.querySelector('#mulher')
const homem = document.querySelector('#homem')



btnCalc.addEventListener('click', (e)=>{
   

    if(homem.checked){

        if(!altura.value || !peso.value || !idade.value){
            return resul.innerHTML = `<b style="color:red; text-align:center;">Preencha todos os campos</b>`
        }

        let calcTMB = 88.362 + (13.397 * peso.value) + (4.799 * altura.value) - (5.677 * idade.value)

        let calcIMC = peso.value / ((altura.value / 100) * (altura.value / 100))

        if(calcIMC < 18.5){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Abaixo do Peso</b> `}
        if(calcIMC > 18.5 || calcIMC < 24.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:green;"> Peso normal</b> `}
        if(calcIMC > 25.0 || calcIMC < 29.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Sobrepeso</b> `}
        if(calcIMC > 30.0 || calcIMC < 34.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Obesidade Grau I</b> `}
        if(calcIMC > 35.0 || calcIMC < 39.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Obesidade Grau II (severa)</b> `}
        if(calcIMC > 40.0){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC -  <b style="color:red;"> Obesidade Grau III (mórbida)</b> `}
    }

    if(mulher.checked){

        if(!altura.value || !peso.value || !idade.value){
            return resul.innerHTML = `<b style="color:red;">Preencha todos os campos</b>`
        }

        let calcTMB = 447.593 + (9.247 * peso.value) + (3.098 * altura.value) - (4.330 * idade.value)

        let calcIMC = peso.value / ((altura.value / 100) * (altura.value / 100))

        if(calcIMC < 18.5){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Abaixo do Peso</b> `}
        if(calcIMC > 18.5 || calcIMC < 24.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:green;"> Peso normal</b> `}
        if(calcIMC > 25.0 || calcIMC < 29.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Sobrepeso</b> `}
        if(calcIMC > 30.0 || calcIMC < 34.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Obesidade Grau I</b> `}
        if(calcIMC > 35.0 || calcIMC < 39.9){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Obesidade Grau II (severa)</b> `}
        if(calcIMC > 40.0){ resul.innerHTML = `${calcTMB.toFixed(2)} Kcal/dia | Seu IMC é:${calcIMC.toFixed(2)} IMC - <b style="color:red;"> Obesidade Grau III (mórbida)</b> `}
        
    }

})



