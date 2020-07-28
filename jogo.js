var autoC = 0;


function Jogo(){

  background(0);
   for (i = 0; i < quantGotas; i++){
  chuva[i].atualizar(); //cada gota da chuva deve se atualizar
  }
  
  //rect da palavra
  fill(0)
  rect(posPx-50, posPy-20, 100, 30, 15);
  
  
  //vetor palavras incorretas
  if(certaOUerrada1 ==0){ 

  textSize(14);
  fill(200);
  strokeWeight(1);
  text(palavra, posPx,posPy);
    
  }else{
  
  textSize(14);
  fill(200)
  strokeWeight(1);
  text(palavra, posPx,posPy);
    
  }
  
  posPy = posPy + velocidade;
  
//Quando a palavra chegar no final da tela = sorteio
  if (posPy > 700) {
    
        Sorteio();
    
  }

  fill(0);
  rect(20,10,560,50, 15);
  textSize(15);
  textAlign(CENTER);
  fill('#fffafa');
  strokeWeight(1);
  text("NIVEL: " + nivel, 80, 40);
  text("VIDAS: " + vidas, 220, 40);
  text("PONTOS: " + pontos, 350, 40);
  text("ACERTOS: " + acertos, 500, 40);

  //barreira de pontos - avanço de nível
  if (pontos > barreiraPontos) {
    
    nivel = nivel + 1;
    barreiraPontos = barreiraPontos + 800;
    console.log('barreiraPontos'+'nivel')
    
  }
  
  if(pontos >= 4000){
    tela = 7;
  }
  
  //palavras certas passaram no final da tela
  if (posPy >= 600 && posPy <=601 && certaOUerrada1 == 1) {
   
    }
    else {
      
      //palavras erradas passaram no final da tela
      //autoC - palavras q não foram corrigidas até o final da tela
     if (posPy >= 600 && posPy <=601 && certaOUerrada1 == 0 && autoC == 0) {
  
           vidas--;
           console.log('Perdeu a vida');
      
        if(vidas < 0){

           tela = 6;        
       
      }  
    } 
  }
  
  //colisão na palavra
  if(xJogador+70 >= posPx-50 && xJogador+70 <= posPx+70 && yJogador == posPy+30) {
    
  //colisão palavra incorreta
    if(certaOUerrada1 == 0){
      console.log('encostou na palavra incorreta');
      tela = 8;
      
  }
    
  else {
    //colisão palavra certa
    if(certaOUerrada1 == 1){
       console.log('encostou na palavra certa');
      
      image(imgExpl[contadorE%15], posPx-90, posPy-90, 150, 150);
      
       if(pontos > 0){
       console.log('Perdeu pontos');
       pontos-=50;
       }
      }
    }
  }
  
 /* if (keyIsDown(DOWN_ARROW) && yJogador <= 470) {
    yJogador = yJogador + 4;
  }
  if (keyIsDown(UP_ARROW) && yJogador >= 100) {
     yJogador = yJogador - 4;
  } 
  */
  
  //movimento jogador (Direita / Esquerda)
  if (keyIsDown(LEFT_ARROW) && xJogador >= -5) {
    xJogador = xJogador - 4;
  }
  if (keyIsDown(RIGHT_ARROW) && xJogador <= 470) {
    xJogador = xJogador + 4;
  }
  
  contador++
  image(imgnave[contador%5], xJogador, yJogador, 2 * rJogador, 2 * rJogador); // animação
  strokeWeight(1);
  
}


//criado objetos
function Gota(x, y) { 

  //propriedades
  const profundidade = random(1,5); // camadas de gotas (+perto ou longe)
  const velocidade = map(profundidade, 1, 5, 3, 10); //map 
  const tamanho = map(profundidade, 1, 4, 1, 1);
  const espessura = map (profundidade, 1, 5, 0.5, 2.5);
  
  //metodo - atualizar a posição da gota
  this.atualizar = function() {
    y += velocidade; //velocidade fixa
    
    //formato
    strokeWeight(espessura);
    line(x, y, x, y + tamanho);
    
    //se chegou embaixo da tela, atualize novas gotas
    if (y > height) { //gota maior q a tela
      
      y = random(-10, -30); //voltar em qualquer posição de y
      x = random(width);    //mudar posição
    }
  }
}

function Sorteio (){
  
   certaOUerrada1 = parseInt(random(0, 1.9)); // definição palavras certas ou erradas.
  
  //autocorreção, palavras corrigidas = 1;
  autoC = 0;
    
  if(nivel == 1){
    
    if(certaOUerrada1 == 0){ //vetor palavras incorretas
      ip = parseInt(random(0, 7.9)); //sorteio para 8 palavras
      palavra = palavrasF1[ip];

  
    }
    
    if(certaOUerrada1 == 1){ //vetor palavras certas
      
      ip = parseInt(random(0, 11.9)); //sorteio para 12 palavras
      palavra = palavrasC1[ip];
    }
  } 
  
  if(nivel == 2){
    
    if(certaOUerrada1 == 0){ //vetor palavras incorretas
      ip = parseInt(random(0, 9.9)); //sorteio para 10 palavras
      palavra = palavrasF2[ip];

  
    }
    
    if(certaOUerrada1 == 1){ //vetor palavras certas
      
      ip = parseInt(random(0, 13.9)); //sorteio para 14 palavras
      palavra = palavrasC2[ip];
    }
  }
  
  if(nivel == 3){
    
    if(certaOUerrada1 == 0){ //vetor palavras incorretas
      ip = parseInt(random(0, 11.9)); //sorteio para 12 palavras
      palavra = palavrasF3[ip];

  
    }
    
    if(certaOUerrada1 == 1){ //vetor palavras certas
      
      ip = parseInt(random(0, 15.9)); //sorteio para 16 palavras
      palavra = palavrasC3[ip];
    }
  }
  
  if(nivel == 4){
    
    if(certaOUerrada1 == 0){ //vetor palavras incorretas
      ip = parseInt(random(0, 13.9)); //sorteio para 14 palavras
      palavra = palavrasF4[ip];

  
    }
    
    if(certaOUerrada1 == 1){ //vetor palavras certas
      
      ip = parseInt(random(0, 17.9)); //sorteio para 18 palavras
      palavra = palavrasC4[ip];
    }
  }
  
  if(nivel == 5){
    
    if(certaOUerrada1 == 0){ //vetor palavras incorretas
      ip = parseInt(random(0, 15.9)); //sorteio para 16 palavras
      palavra = palavrasF5[ip];

  
    }
    
    if(certaOUerrada1 == 1){ //vetor palavras certas
      
      ip = parseInt(random(0, 19.9)); //sorteio para 20 palavras
      palavra = palavrasC5[ip];
    }
  }
  
    posPx = random(60,500); //nova direção no eixo x
    posPy = 80; //zerando minha posição

}