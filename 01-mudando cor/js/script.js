//CRIANDO UMA VARIÁVEL PARA ARMAZENAR A DIV COM ID 'LAMPADA''
   let lampada= document.getElementById("lampada");


   function acenderVerde() {
     lampada.style.backgroundColor = "green";
   }

   function acenderVermelho() {
     lampada.style.backgroundColor = "red";
   }

  function acenderVermelho() {
     lampada.style.backgroundColor = "yellow";
   }

   //CRIANDO FUNCAO ( ARROW FUNCTION) PARA TROCAR COR DE ACORDO COM O PARAMETRO
   const acender = (cor) => {
    lampada.style.backgroundcolor = cor;
   };