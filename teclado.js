var contadorC = 0;

var teclado = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'x', 'w', 'y','z', 'á', 'é', 'í', 'ó', 'ú', 'ã', 'õ', 'ç'];

function keyPressed() {
  
        if(tela==1 && key == "Enter"){
             tela = 4; //2 msg
     
      } else {
        
        if(tela==4 && key == "Enter"){
            tela = 9;
        
      } else {
        if(tela==9 && key== "Enter") {
            tela = 5;
          
           if(tela == 5){
          ele = createAudio('music.mp3');
          ele.loop(true);
        }
         
      } else {
        if(key == "Escape" || tela == 6 && key == "Escape"){
            vidas = 3;
            pontos = 0;
            acertos = 0;
            nivel = 1;
            tela = 0;
            posPy = 80;
            posPx = 80;
            contadorC = 0;
            digitacao = '';
            barreiraPontos = 800;
            Sorteio(); 
            ele.stop(true)
            
        }
      }
    }
  }
  
  if(tela == 0 || tela == 2 || tela == 3){
    
          //seta para cima
          if(key == "ArrowUp" && ytela>275){
            ytela=ytela-77;
            opcao=opcao-1;
          }
          //seta para baixo
          if(key == "ArrowDown" && ytela<400) { 
            ytela=ytela+77;
            opcao=opcao+1    
          }
          //Enter
    
          if(key == "Enter"){
             tela = opcao;  
          }
          //Esc
          if(key == "Escape"){
            tela = 0;
          }
      }
     
  
    if( tela == 8){ //tela do Jogo
          console.log(key)
      
    if( key === "Backspace"){
        digitacao = ''; //zerar valores digitados 'apagar'
        contadorC = 0;  //zerar contador (char tamanho)
      
  } else {
    
    if( nivel == 1){
    
    if(contadorC < gabarito1[ip].length && key !="Dead"){
            //console.log('contem');
            contadorC++;
      
      if(teclado.includes(key)){
            //console.log(contadorC);
            digitacao += key.toUpperCase(); //permite digitar na tela
        
       }
      if(contadorC == gabarito1[ip].length){
          
          if(digitacao === gabarito1[ip]){
              tela = 5; //tela jogo
              palavra = gabarito1[ip]; //transferir palavras corrigidas 
              digitacao = ''; //limpar digitação
              contadorC = 0;  //zerar contador
              pontos+=80;    //atribuindo pontos
              autoC = 1;      //atribuindo palavras incorretas (0) p/ (1) sem despontuar
              acertos++       //margem de acertos
              alerta = '';    //limpar msg
            
        } else {
              digitacao = ''; //permite digitação após limpar
              contadorC = 0;  //char digitador = char da palavra
              alerta = "Tente novamente"; //msg de erro
          }
        }
      }
    }
    if( nivel == 2){
    
    if(contadorC < gabarito2[ip].length && key !="Dead"){
            //console.log('contem');
            contadorC++;
      
      if(teclado.includes(key)){
            //console.log(contadorC);
            digitacao += key.toUpperCase(); //permite digitar na tela
        
       }
      if(contadorC == gabarito2[ip].length){
          
          if(digitacao === gabarito2[ip]){
              tela = 5; //tela jogo
              palavra = gabarito2[ip]; //transferir palavras corrigidas 
              digitacao = ''; //limpar digitação
              contadorC = 0;  //zerar contador
              pontos+=80;    //atribuindo pontos
              autoC = 1;      //atribuindo palavras incorretas (0) p/ (1) sem despontuar
              acertos++       //margem de acertos
              alerta = '';    //limpar msg
            
        } else {
              digitacao = ''; //permite digitação após limpar
              contadorC = 0;  //char digitador = char da palavra
              alerta = "Tente novamente"; //msg de erro
          }
        }
      }
    }
    if( nivel == 3){
    
    if(contadorC < gabarito3[ip].length && key !="Dead"){
            //console.log('contem');
            contadorC++;
      
      if(teclado.includes(key)){
            //console.log(contadorC);
            digitacao += key.toUpperCase(); //permite digitar na tela
        
       }
      if(contadorC == gabarito3[ip].length){
          
          if(digitacao === gabarito3[ip]){
              tela = 5; //tela jogo
              palavra = gabarito3[ip]; //transferir palavras corrigidas 
              digitacao = ''; //limpar digitação
              contadorC = 0;  //zerar contador
              pontos+=400;    //atribuindo pontos
              autoC = 1;      //atribuindo palavras incorretas (0) p/ (1) sem despontuar
              acertos++       //margem de acertos
              alerta = '';    //limpar msg
            
        } else {
              digitacao = ''; //permite digitação após limpar
              contadorC = 0;  //char digitador = char da palavra
              alerta = "Tente novamente"; //msg de erro
          }
        }
      }
    }
    if( nivel == 4){
    
    if(contadorC < gabarito4[ip].length && key !="Dead"){
            //console.log('contem');
            contadorC++;
      
      if(teclado.includes(key)){
            //console.log(contadorC);
            digitacao += key.toUpperCase(); //permite digitar na tela
        
       }
      if(contadorC == gabarito4[ip].length){
          
          if(digitacao === gabarito4[ip]){
              tela = 5; //tela jogo
              palavra = gabarito4[ip]; //transferir palavras corrigidas 
              digitacao = ''; //limpar digitação
              contadorC = 0;  //zerar contador
              pontos+=400;    //atribuindo pontos
              autoC = 1;      //atribuindo palavras incorretas (0) p/ (1) sem despontuar
              acertos++       //margem de acertos
              alerta = '';    //limpar msg
            
        } else {
              digitacao = ''; //permite digitação após limpar
              contadorC = 0;  //char digitador = char da palavra
              alerta = "Tente novamente"; //msg de erro
          }
        }
      }
    }
    if( nivel == 5){
    
    if(contadorC < gabarito5[ip].length && key !="Dead"){
            //console.log('contem');
            contadorC++;
      
      if(teclado.includes(key)){
            //console.log(contadorC);
            digitacao += key.toUpperCase(); //permite digitar na tela
        
       }
      if(contadorC == gabarito5[ip].length){
          
          if(digitacao === gabarito5[ip]){
              tela = 5; //tela jogo
              palavra = gabarito5[ip]; //transferir palavras corrigidas 
              digitacao = ''; //limpar digitação
              contadorC = 0;  //zerar contador
              pontos+=400;    //atribuindo pontos
              autoC = 1;      //atribuindo palavras incorretas (0) p/ (1) sem despontuar
              acertos++       //margem de acertos
              alerta = '';    //limpar msg
            
        } else {
              digitacao = ''; //permite digitação após limpar
              contadorC = 0;  //char digitador = char da palavra
              alerta = "Tente novamente"; //msg de erro
          }
        }
      }
    }
  } 
}
  
}
  