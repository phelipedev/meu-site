//formula do calculo: 2+distnacia*1.4+minutos*0.26

function formatamoeda(numero){
  
    return numero.toFixed(2).replace(".",",")}
  
  function calcular() {
      distancia=inputDistancia.value
      minutos=inputTempo.value
      valortotal=2+distancia*1.4+minutos*0.26
  
      botaoCalcular.innerHTML='Total R$ '+ formatamoeda(valortotal)
  }
  