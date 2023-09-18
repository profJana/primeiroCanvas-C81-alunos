//identificar o canvas do html aqui no javascript

formato = canvas.getContext("2d"); // desenha em formato 2d

//criar a variável cor

canvas.addEventListener("mousedown", myMousedown);//adiciondo ao canvas um "escutador de eventos", assim que ocorrer o clique do mouse ele chama a função para executar

function myMousedown(e)
{
    //obtém a cor que escolhemos
    color = document.getElementById("color").value;
    
    //obtendo e ajustando a posição x do mouse onde foi clicado
     mouseX = e.clientX - canvas.offsetLeft;

     //obtendo e ajustando a posição y do mouse onde foi clicado
     mouseY = e.clientY - canvas.offsetTop;

    //executa a função circle  
}

function circle(mouseX , mouseY)
{
    formato.beginPath(); //inicia o desenho no canvas
    formato.strokeStyle = color; //ajusta cor para o objeto desenhado
    formato.lineWidth = 2; //grossura da linha do objeto desenhado
    //utilizado para desenhar circulos. Math.PI é a metade de um circulo, multiplicando por 2 dara o circulo completo.
    formato.stroke(); //usado para desenhar as bordas do formato
}

function limpar()
{
    //limpa o canvas
}

	
