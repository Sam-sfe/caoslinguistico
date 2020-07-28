//Playlista youtube: https://www.youtube.com/playlist?list=PLPVCSdcaqXmh01al7LyihjGL2aseY5Vla


//tela, movimento menu
var xtela = 200,
    ytela = 275,
    tela = 0,
    opcao = 1;

//imagens
var imgMenu,
    imgMsg1,
    imgMsg2,
    imgInst,
    imgCreditos,
    imgC8,
    imgOver,
    imgFinal,
    imgPreJogo,
    imgnave = [],
    imgExpl = [];

//Jogo
var xObstaculo, xJogador,
    yObstaculo, yjogador,
    rObstaculo, rJogador, //raio
    vidas = 3;

//posição da palavra - direção
var posPx = 80, // inicio da minha direção
    posPy = 80, //inicio da posição da palavra
    velocidade = 2, //velocidade palavra
    digitacao = ' ';
var palavra = '';

var quantGotas=  35,
    chuva = [],
    imgnave = [],
    contador = 0,
    acertos = 0,
    contadorE = 0, 
    contadorE2 = 0,
    tempo = 0, 
    tempo2 = 0;

//vetores fase 1
var gabarito1 = ["HUMILDE" ,"HÉLICE" ,"HÉRNIA" ,"HOMOLOGAR" ,"HUMOR", "ABENÇOE", "POSSUI","CONTRIBUI"],
    palavrasF1 = ["UMILDE", "ÉLICE", "ÉRNIA", "OMOLOGAR", "UMOR", "ABENÇOI", "POSSUE", "CONTRIBUE"],
    palavrasC1 = ["HÁBITO", "HONESTO", "HIATO", "HAVER" , "DESUMANO", "HISTÓRIA", "GERIMUM", "MEXERICA", "ENXADA", "DESCRIÇÃO", "PERIQUITO", "DIGLADIAR"],
    
    certaOUerrada1 = 0,
    ip = 0, //indice da palavra

//vetores fase 2
    gabarito2 = ["HOMENAGEM", "EMPECILHO", "FEMININO", "PRIVILÉGIO", "BESOURO", "ANTIBIÓTICO", "XINGAR", "DESLEIXO", "ENXAQUECA", "MOCHILA"],
    palavrasF2 = ["OMENAGEM", "IMPECILHO", "FEMENINO", "PREVILÉGIO", "BISOURO", "ANTEBIÓTICO", "CHINGAR", "DESLEICHO", "ENCHAQUECA", "MOXILA"],
    palavrasC2 = ["DESPENDER", "SILVÍCOLA", "CAQUI", "CÃIBRA", "MALCRIADO", "MEXILHÃO", "CAXUMBA", "ENXURRADA", "ENCHARCADO", "FAXINA", "ENXOTADO", "CHUVA", "CHIAR", "ENXOVAL"],

//vetores fase 3
    gabarito3 = ["CARREGAR", "CORAGEM", "SARJETA", "ARGILA", "JEITO", "ESTIAGEM", "VERTIGEM", "FULIGEM", "JILÓ", "GESTO", "CHOQUE", "CAIXA"],
    palavrasF3 = ["CAREGAR", "CORAJEM", "SARGETA", "ARJILA", "GEITO", "ESTIAJEM", "VERTIJEM", "FULIJEM", "GILÓ", "JESTO", "XOQUE", "CAICHA"],
    palavrasC3 = ["ENXAGUAR", "MACHUCADO", "ENCHENTE", "ENCHARCAR", "MÉXICO", "AMEIXA", "CHUTE", "LOJISTA", "CEREJEIRA", "GORJETA", "VIAJAR", "VIAGEM", "REFÚGIO", "MONGE", "TIJELA", "LAJE"],
    
//vetores fase 4
    gabarito4 = ["ENXOFRE", "AGACHAR", "FAIXA", "MACHUCADO", "CANJICA", "BERINGELA", "ACARAJÉ", "BARRAGEM", "BRISA", "IDEALIZAR", "PRECISAR", "IMPROVISAR", "LILÁS", "POBREZA"],
    palavrasF4 = ["ENCHOFRE", "AGAXAR", "FAICHA", "MAXUCADO", "CANGICA", "BERINJELA", "ACARAGÉ", "BARRAJEM", "BRIZA", "IDEALISAR", "PRECIZAR", "IMPROVIZAR", "LILÁZ", "POBRESA"],
    palavrasC4 = ["AGONIZAR", "AMENIZAR", "FINALIZAR", "ALISAR", "FRISAR", "COLONIZAR", "PISAR", "REVISAR", "PESQUISAR", "ANALISAR", "GRANIZO", "CLAREZA", "DUQUESA", "PRINCESA", "ALTIVEZ","CANALIZAR", "NITIDEZ", "LEVEZA"],

//vetores fase 5
    gabarito5 = ["ENSOPAR", "EXAME", "ASSUMIR", "AZEDO", "LÁTEX", "ASSIDUIDADE", "ASSINAR", "ASSOCIAR", "CESSÃO", "INSOSSO", "OMISSÃO", "POSSUIR", "PRESSA", "PROFISSÃO", "PROMESSA","SOSSEGO"],
    palavrasF5 = ["ENSSOPAR", "EZAME", "ASUMIR", "ASEDO", "LÁTEZ", "ASIDUIDADE", "ASINAR", "ASOCIAR", "CESÃO", "INSOSO", "OMISÃO", "POSUIR", "PRESA", "PROFISÃO", "PROMESA", "SOSEGO"],
    palavrasC5 = ["RAPIDEZ", "MARQUESA", "JAPONESA" , "FRANCESA", "EXÍLIO", "DEZOITO", "REFLEXÃO", "DISCUSSÃO", "AZEITONA", "SIDERAL", "CONTEXTO", "CRUCIFÍXO", "AZUL", "ASPIRAR", "ESPESSO", "EXCESSO", "GROSSERIA", "PRESSA", "PROFISSÃO", "PROGRESSO"];

//vidas, pontos, nível
var pontos = 0,
    nivel = 1, 
    barreiraPontos = 800,
    vidas = 3;

function preload() {
  imgMenu = loadImage('Menu.png');
  imgMsg1 = loadImage('Msg1.png');
  imgMsg2 = loadImage('Msg2.png');
  imgInf = loadImage('Inf.png');
  imgCreditos= loadImage('Creditos.png');
  imgC8 = loadImage('Correcao.png');
  imgOver = loadImage('GameOver.png');
  imgFinal = loadImage('Final.png');
  imgPreJogo =loadImage('Pré-Jogo.png');

  imgnave[0] = loadImage('1.jpg');
  imgnave[1] = loadImage('2.png');
  imgnave[2] = loadImage('3.png');
  imgnave[3] = loadImage('4.png');
  imgnave[4] = loadImage('5.png');
  
  imgExpl[0] = loadImage('Exp0.png');
  imgExpl[1] = loadImage('Exp1.png');
  imgExpl[2] = loadImage('Exp2.png');
  imgExpl[3] = loadImage('Exp3.png');
  imgExpl[4] = loadImage('Exp4.png');
  imgExpl[5] = loadImage('Exp5.png');
  imgExpl[6] = loadImage('Exp6.png');
  imgExpl[7] = loadImage('Exp7.png');
  imgExpl[8] = loadImage('Exp8.png');
  imgExpl[9] = loadImage('Exp9.png');
  imgExpl[10] = loadImage('Exp10.png');
  imgExpl[11] = loadImage('Exp11.png');
  imgExpl[12] = loadImage('Exp12.png');
  imgExpl[13] = loadImage('Exp13.png');
  imgExpl[14] = loadImage('Exp14.png');

}

function setup() {
  createCanvas(600, 600);
  
  xObstaculo = [];
  yObstaculo = [];
  xJogador = 250;
  yJogador = 470;
  rObstaculo = posPy * 2;
  rJogador = 70;
  
  Sorteio();
    
  //criar a gota apenas uma vez no setup - preencher a chuva com laço for
  for (i = 0; i < quantGotas; i++){
    
    stroke('#fffafa'); //cor
    var gota = new Gota(random(width), random(-height));
    chuva[i] = gota; //após criar a gota, armazenar no vetor chuva[]
    }
  
}

//laço infinito
function draw() {
  
  if(tela == 0){
    Menu();
  }

  if(tela == 1){
    Msg1();
  }

  if(tela == 2){
    Instrucoes();
  }
  
  if(tela == 3){
    Creditos();
  }

  if(tela == 4){
    Msg2();
  }
  
  //jogo
  if(tela == 5){
    Jogo();
  }
  
  if(tela == 6){
    GameOver();  
  }
  
  if(tela == 7){
    Final();
  }
  if(tela == 8){
    Correcao();
  }
  if(tela == 9){
    PreJogo();
  }
}  


 
function Msg1(){
  image(imgMsg1,0, 0,width,height);
}

function Msg2(){
  image(imgMsg2, 0, 0,width,height);
}

function PreJogo(){
  image(imgPreJogo, 0, 0,width,height);
}

function GameOver(){
  
  image(imgOver,0, 0,width,height);

  contador++
  image(imgnave[contador%5], 243, 150, 120,120); // animação
  
  tempo++
  image(imgExpl[contadorE%15], 220, 120, 150, 150);
  tempo2++
  image(imgExpl[contadorE2%15], 240, 150, 140, 140);
  if(tempo>2){
    contadorE++
    tempo = 0;
  }
  if(tempo2>3){
    contadorE2++
    tempo2 = 0;
  }
  
  vidas = 3;
  pontos = 0;
  acertos = 0;
  nivel = 1;
  
}  

function Final(){
  image(imgFinal, 0, 0,width,height);
} 

function Instrucoes(){
  image(imgInf,0, 0, width, height);
}

function Creditos(){ 
  image(imgCreditos,0, 0, width, height);
}


  
  
  
  
  
  
  