const exercicio1 = () => {
  // Capturar o elemento "Resposta"
  let resposta = document.getElementById("resposta");

  // Variável para armazenar o resultado do programa
  let resultado = "#";

  // Loop de 1 até 10 usando for
  for (let i = 1; i <= 10; i++) {
    resultado += i + "#";
  }

  // Exibir o resultado
  resposta.innerHTML = resultado;
};


const exercicio2 = () => {
   let resultado = "";
   let numero1 = Number(document.getElementById("num").value);

   for (let i = 0; i <= numero1; i += 2) {
   resultado += i + "#";
 }
   document.getElementById("resultado").innerHTML = resultado;
 };

const exercicio3 = () => {
    let resultado = document.getElementById("resultado");

    let erro = document.getElementById("erro");

    let numero = document.getElementById("num").value;

    // Variável Booleana apenas true/false
    let primo = true

    if (numero <= 0){
        erro.innerHTML = 'Digite um número maior que 0'
        resultado.innerHTML = '';
        return; //interrompe a função
    } else {
        //  Loop para verificar se existe algum divisor
        // além de 1 e ele mesmo
        for(let i = 2; i < numero; i++){
            if(numero % i == 0){
                primo = false;
            }
        }
    }

    //Verificação Final
    if(primo){
        // Se permacer true ao tentar validar
        // ele será primo
        resultado.innerHTML = `O número ${numero} é primo`;
        erro.innerHTML = '';
    } else {
        resultado.innerHTML = `O número ${numero} não é primo`;
        erro.innerHTML = '';
    }
}
const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let resposta = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i <= 10; i++)
      resposta += ` A tabuada de: ${numero} X ${i} é ${numero * i} -`;
  }
  resultado.innerHTML = resposta;
};

const exercicio9 = () => {
  let resultado = "";
  for (let i = 1; i <= 100; i++) resultado += i + "-";
  resposta.innerHTML = resultado;
};

const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num1").value;

  if (numero <= 0) {
    resultado.innerHTML = "";
    erro.innerHTML = "Digite um número maior que 0";
  } else {
    erro.innerHTML = "";
  }
  let calculo = 2 * parseFloat(numero) * Math.PI;
  resultado.innerHTML = calculo;
};



/** Cria as funções para os 25 exercícios propostos. **/

