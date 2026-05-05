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
};
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

const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = Number(document.getElementById("num").value);
  let resposta = "";

  if (numero <= 0) {
    erro.innerHTML = "Digite um numero maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";

    let i = 0;

    while (i <= numero) {
      if (i % 2 !== 0) {
        resposta += i + "<br>";
      }
      i++;
    }
  }

  resultado.innerHTML = resposta;
};

const exercicio6 = () => {
   let resultado = document.getElementById ("resultado");
   let erro = document.getElementById("erro");
   let num = Number(document.getElementById("num").value);
   let resposta = "";

   if (num <=0) {
    erro.innerHTML = "Digite um numero maior que 0";
    resultado.innerHTML = "";
    return;
   } else {
    erro.innerHTML = "";

    let i = 0;

    while(i <= num ) {
      if (i % 2 == 0) {
        resposta += i + "<br>";
      }
      i++;
    }
   };
 
   resultado.innerHTML = resposta;
};

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  resposta.innerHTML = " ";
  let resultado = "";

  let i = 10;

  while (i > 0) {
    resultado += i + "#";

    i--;
  }
  resposta.innerHTML = resultado;
};

const exercicio8 = () => {

}

const exercicio9 = () => {
  let resultado = "";
  for (let i = 1; i <= 100; i++) resultado += i + "-";
  resposta.innerHTML = resultado;
};

const exercicio10 = () => {

}

const exercicio11 = () => {
 let resposta = document.getElementById("resposta");
 
  let resultado = " # ";

 for ( let i = 0; i <= 100; i++){
  if( i % 3 == 0)
    resultado += i + "|"
 }
    resposta.innerHTML = resultado
};


const exercicio12 = () => {
  let resposta = document.getElementById("resposta");
  let n = document.getElementById("num").value;
  let resultado = 0;

  for (i = 0; i <= n; i++) {
    resultado += i;
  }
  resposta.innerHTML = resultado;
};


const exercicio13 = () => {

}

const exercicio14 = () => {
  let resposta = document.getElementById("resposta");
  let lado1 = parseFloat(document.getElementById("num1").value)
  let lado2 = parseFloat(document.getElementById("num2").value)

  let area = lado1 * lado2
  resposta.innerHTML = area
};


const exercicio15 = () => {

}

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
 

const exercicio17 = () => {
let resposta = document.getElementById("resposta");
  let base = document.getElementById("num1").value;
  let  altura = document.getElementById("num2").value;
  
let area = base * altura
let resultado = area / 2 

resposta.innerHTML = resultado;
};

const exercicio18 = () => {
 let resposta = document.getElementById("resposta");
  let baseMaior = document.getElementById("num1").value;
 let baseMenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;

  let area = baseMaior + baseMenor
  let calculo = area * altura
  resultado = calculo / 2
  resposta.innerHTML = resultado
};

const exercicio19 = () => {

}

const exercicio20 = () => {

}

const exercicio21 = () => {

}

const exercicio22 = () => {

}

const exercicio23 = () => {

}

const exercicio24 = () => {

}

const exercicio25 = () => {

}
