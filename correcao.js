var digitacao = '';
var alerta = '';

function Correcao(){
  
  image(imgC8,0, 0, width, height);
  stroke('#fffafa');
  fill(0, 0, 0, 0);
  textSize(20);
  textAlign(CENTER)
  fill('#fffafa');
  
  if(nivel == 1){
  text(palavrasF1[ip], 305, 290);
  text(digitacao, 305, 400);
  textSize(16);
  text(alerta, 300, 450);
  }
  
  if(nivel == 2){
  text(palavrasF2[ip], 305, 290);
  text(digitacao, 305, 400);
  textSize(16);
  text(alerta, 300, 450);
  }
  
  if(nivel == 3){
  text(palavrasF3[ip], 305, 290);
  text(digitacao, 305, 400);
  textSize(16);
  text(alerta, 300, 450);
  }
  
  if(nivel == 4){
  text(palavrasF4[ip], 305, 290);
  text(digitacao, 305, 400);
  textSize(16);
  text(alerta, 300, 450);
  }
  
  if(nivel == 5){
  text(palavrasF5[ip], 305, 290);
  text(digitacao, 305, 400);
  textSize(16);
  text(alerta, 300, 450);
  }
}