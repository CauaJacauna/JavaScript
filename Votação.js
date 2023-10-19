var eleitor = 21
console.log(`Você tem ${eleitor} anos`)

if ( eleitor < 16) {
    console.log('Não vota!')
} else if ( eleitor <= 17 || eleitor >= 65 ) {
    console.log('Voto opcional!')
} else {
    console.log('Voto Obrigatório!')
}