	//Código das setas do teclado
	var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
	//Variáveis de movimentação
	var moveEsquerda = false, moveDireita = false, moveCima = false, moveBaixo = false;
	//Referência ao canvas
	var canvas = document.querySelector('canvas');
	//Referência ao canvas
	var contexto = canvas.getContext('2d');
	//Referência ao canvas
	var p1 = {
		x: 10,
		y: 10
	};
	//Inicia o loop de animação
	update();
	//Dispara um evento quando uma tecla é pressionada
	window.addEventListener('keydown',keydownHandler);
	//Dispara um evento quando uma tecla é liberada
	window.addEventListener('keyup',keyupHandler);

	//Evento disparado pela tecla pressionada
	function keydownHandler(e){
		//Variável recebe o código da tecla pressionada
		var key = e.keyCode;
		//Esquerda
		if (key === LEFT && key !== RIGHT) {
			moveEsquerda = true;
		}
		//Direita
		if (key === RIGHT && key !== LEFT) {
			moveDireita = true;
		}
		//Para Cima
		if (key === UP && key !== DOWN) {
			moveCima = true;
		}
		//Para Baixo
		if (key === DOWN && key !== UP) {
			moveBaixo = true;
		}
		
	}

	//Evento disparado pela tecla liberada
	function keyupHandler(e){
		//Variável recebe o código da tecla liberada
		var key = e.keyCode;
		//Esquerda
		if (key === LEFT && key !== RIGHT) {
			moveEsquerda = false;
		}
		//Direita
		if (key === RIGHT && key !== LEFT) {
			moveDireita = false;
		}
		//Para Cima
		if (key === UP && key !== DOWN) {
			moveCima = false;
		}
		//Para Baixo
		if (key === DOWN && key !== UP) {
			moveBaixo = false;
		}
		
	}
	//Função que atualiza os parâmetros de posicionamento do objeto nos eixos X e Y
	function move(){
		//Move para a esquerda
		if(moveEsquerda){
			p1.x--;
		}
		//Move para a direita
		if(moveDireita){
			p1.x++;
		}
		//Move para cima
		if(moveCima){
			p1.y--;
		}
		//Move para baixo
		if(moveBaixo){
			p1.y++;
		}
	}
	//Função que desenha o objeto na tela de acordo com os parâmetros de posicionamento do objeto
	function renderiza(){
		//cria e limpa o bloco criado no canvas
		contexto.clearRect(0,0,canvas.width,canvas.height);
		contexto.fillRect(p1.x,p1.y,50,50);
	}
	//Loop de animação
	function update(){
		//Solicita ao navegador uma animação passando a função e o elemento a ser animado
		requestAnimationFrame(update,canvas);
		//Atualiza os dados do objeto
		move();
		//Desenha o objeto atualizado
		renderiza();
	}