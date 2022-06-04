//Interação Dino:
const dino = document.querySelector('.dino'); //selecionar o Dino 
const background = document.querySelector('.background');

let estaPulando = false; // correção do erro para o Dino nao ficar flutuando;
let posicaoInical = 0; //posiçao inicial do Dino;

    //Criar uma função para identificar a tecla pressionada pelo o usuário;
    //Adicionar um argumento chamado 'event'; 
    //Event = é enviado para função toda vez que alguém pressiona uma tecla pelo navegador, com ele é possível identificar a tecla pressionada;  
    //keyCode = código do caracter selecionado, no caso é o 'Space' que tem o valor 32;
function teclaParaCima(event) {
    if (event.keyCode === 32) {
        if (!estaPulando) {
            Pular();
        }
    }
}

    //Criar função para pular
function Pular() {
    estaPulando = true;
    
    let intervaloPulo = setInterval(() => {
        //tudo o que tiver aqui dentro vai ser executado sem parar, através de um tempo determinado, nesse caso 20 milésimos;
        if (posicaoInical >= 150) /*150px*/ {

            clearInterval(intervaloPulo); //limpar o intervalo;

            //para fazer descer;
            let intervaloDescida = setInterval(() =>{
                if (posicaoInical <= 0 ) {
                    clearInterval(intervaloDescida);
                    estaPulando = false;
                } else {
                    posicaoInical -= 20;
                    dino.style.bottom = posicaoInical + 'px';   
                }
            }, 20);
        } else {

            //para fazer pular/subir:
            posicaoInical += 20;
            dino.style.bottom = posicaoInical + 'px';
        }
    }, 20);
}

//Interação Cactos:
function criarCactos() {
    const cactos = document.createElement('div');
    let posicaoCactos = 1000; //posição do cactos;
    let tempoAleatório = Math.random() + 6000;

    //Usar JS para criar HTML novo para colocar no código
    cactos.classList.add('cactos');
    background.appendChild(cactos); //adcionar um filho, no caso o cactos;
    cactos.style.left = 1000 + 'px';

    let intervaloEsquerda = setInterval(() =>{
        if (posicaoCactos < -60) {
            clearInterval(intervaloEsquerda);
            background.removeChild(cactos);
        } else if (posicaoCactos > 0 && posicaoCactos < 60 && posicaoInical < 60 ) {
            //Fazer o GAME OVER:
            clearInterval(intervaloEsquerda);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
            } else {
            posicaoCactos -= 10; //velocidade movimentação do cactos para esquerda;
            cactos.style.left = posicaoCactos + 'px';     
        }
    }, 20);
    //setTimeout = serve para executar uma determinada funçao depois de um determinado tempo
    setTimeout (criarCactos, tempoAleatório);  
} 

criarCactos();
document.addEventListener('keyup', teclaParaCima);