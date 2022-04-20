function calcular(){
    var op1 = document.getElementById("oper")
    var operacao = String(op1.options[op1.selectedIndex].value)
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var res = document.getElementById('res')

    var resultado 

    if(operacao == 'somar'){
        resultado = Number(n1 + n2)
        res.innerHTML = `O resultado da <strong style = "color: blue">SOMA</strong> entre ${n1} e ${n2} é : <strong style = "color: blue">${resultado}</strong> `

    }else if(operacao == 'subtrair'){
        resultado = Number(n1 - n2)
        res.innerHTML = `O resultado da <strong style = "color: red">SUBTRAÇÃO</strong> entre ${n1} e ${n2} é : <strong style = "color: red">${resultado}</strong>`

    }else if(operacao == 'multiplicar'){
        resultado = Number(n1 * n2)
        res.innerHTML = `O resultado da <strong style = "color: darkgreen">MULTIPLICAÇÃO</strong> entre ${n1} e ${n2} é : <strong style = "color: darkgreen">${resultado}</strong>`

    }else if(operacao == 'dividir'){
        resultado = Number(n1 / n2)
        res.innerHTML = `O resultado da <strong style = "color: yellow">DIVISÃO</strong> entre ${n1} e ${n2} é : <strong style = "color: yellow">${resultado}</strong>`
    }
}