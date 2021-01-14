paragrafoResultado.innerHTML="CONCORRA AGORA A UMA VIAGEM GRÁTIS<br><br>CLIQUE NO BOTÃO ABAIXO"

function executarsorteio()
{
    aleatorio=Math.round(Math.random()*10)
    console.log(aleatorio)
    chute=prompt(" Escolha seu número da sorte(1 a 10)")
    
    
  while( chute>10 || chute<0){    
          chute=prompt("Número inválido, digite novamente(1 a 10)")  
   }
    
     
  
  
  numerocerto=chute==aleatorio
  
  
  //colocando imagem 
    if(numerocerto){paragrafoResultado.innerHTML= 'VOCÊ GANHOU UMA CORRIDA GRÁTIS<br><br>PARABÉNS!'
              paragrafoResultado.style.backgroundImage = "url('https://files.aredacao.com.br/upload/content/conheca-os-sete-simbolos-irlandeses-da-sorte.jpg')"     }
 
  
  
  //colocando cor diferente
  if(!numerocerto){paragrafoResultado.innerHTML= 'NÃO DESANIME<br><br>TENTE OUTRA VEZ!'
     paragrafoResultado.style.backgroundColor="Yellow"             }

}

//Finalizado 

