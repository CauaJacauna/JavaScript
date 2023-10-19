var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem){
    case 0 :
        console.log(`${diaSem + 1}° dia, Domingo`)
    break
    case 1 : 
        console.log(`${diaSem + 1}° dia, Segunda-feira`)
    break
    case 2 : 
        console.log(`${diaSem + 1}° dia, Terça-feira`)
    break
    case 3 : 
        console.log(`${diaSem + 1}° dia, Quarta-feira`)
    break
    case 4 : 
        console.log(`${diaSem + 1}° dia, Quinta-feira`)
    break
    case 5 : 
        console.log(`${diaSem + 1}° dia, Sexta-feira`)
    break
    case 6 : 
        console.log(`${diaSem + 1}° dia, Sábado`)
    break
}