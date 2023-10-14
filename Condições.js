var velocidade = 52.6


console.log(`Velocidade do veículo é de ${velocidade}Km/h`)

if (velocidade > 60){
        console.log('Acima da velocidade máxima permitida, MULTADO')
}

console.log('Dirija sempre com cinto de segurança!')


//FIBONACCI

function calcularFibonacci(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

const n = 10; // Substitua por quantos números da série você deseja calcular
const resultado = calcularFibonacci(n);
console.log(resultado);
