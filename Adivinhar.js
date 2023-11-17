var numSecreto = parseInt(Math.random() * 1001)

while(chute != numSecreto){
    var chute = prompt('Digite um número entre 0 e 1000')

    if(chute == numSecreto){
        alert('Acertou!')
    } else if (chute > numSecreto){
        alert('Errou... O número secreto é menor')
    }else if (chute < numSecreto){
        alert('Errou... O número secreto é maior')
    }
}