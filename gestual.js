
function Gestual(){

	var g = this;
	
	setTimeout( function(){
		g.onHandUp();
	}, 1000);

	setTimeout( function(){
		g.onHandDown();
	}, 2000);

	onHandUp = function(){};
	onHandDown = function(){};
	onHandLeft = function(){};
	onHandRight = function(){};	


			var mostraConsole = false;

			var canvas1;
			var ctxCanvas1;
			var imagem;
			
			var canvas2;
			var ctxCanvas2;

			var canvas3;
			var ctxCanvas3;

			var canvas4;
			var ctxCanvas4;

			var codeImagem1;
			var codeImagem2;
			var codeImagem3;
			
			var show;
			var qC;

			var ultDir = "";

			var permutaHV = 0;

			setInterval( function(){
						if (permutaHV == 0){
							permutaHV = 1;
							captureHorizontal();
						}else{
							permutaHV = 0;
							captureVertical();
						}
			},50);
			
			// ativação da câmera ao vivo
			setInterval( function(){snapshot()}, 25);

		

			var	prim, ult;
			var	med1 = 0, med2 = 0, med3 = 0, med4 = 0;
			var 	permutaH = 0, permutaV = 0;;


			function captureVertical() {


		// copiando a imagem para o canvas1
		canvas1=document.getElementById("canvas1"); 													// recupera o elemento canvas denominado no html como canvas1
		ctxCanvas1 = canvas1.getContext("2d");																// criar um contexto baseado no elemento canvas selecionado
		imagem = document.getElementById("canvasCam");													// recupera a imagem
		ctxCanvas1.drawImage(imagem, 0, 0);																		// cola a imagem no contexto canvas
		codeImagem3 = ctxCanvas1.getImageData(0, 0, canvas1.width, canvas1.height);			// captura a codificação (pixels) da imagem para ser trabalhada

		//detecção dos dedos na vertical
		canvas4=document.getElementById("canvas1"); 														// recupera o elemento canvas denominado no html como canvas4
		ctxCanvas4 = canvas4.getContext("2d");																	// criar um contexto baseado no elemento canvas selecionado
		codeImagem3 = ctxCanvas1.getImageData(0, 0, canvas1.width, canvas1.height);				// captura a codificação (pixels) da imagem para ser trabalhada


qC = 0;																												// variável contadora da quantidade de ocorrências de contraste
		show = false;
		prim = 0;
		ult = 0;
		for (k=0; k<codeImagem3.data.length; k += canvas1.width*4){
			for (c=0; c<canvas1.width*4; c += 4){
				codeImagem3.data[c+k+3] = 0;	
				if ( Math.abs(codeImagem3.data[c+k] - codeImagem3.data[c+k + canvas1.width*4*1]) > 5 & codeImagem3.data[c+k] > 150 & codeImagem3.data[c+k+2] < 150 & codeImagem3.data[c+k+1] < 150  )			// se ocorrer contraste
				{
					qC++;
				}	
			}
//					if ( qC > document.getElementById("i1").value & qC < document.getElementById("i2").value ){ // 1 e 25
			if ( qC > 8 & qC < 35 ){ // 1 e 25
				for (c=0; c<canvas1.width*4; c += 4){
					codeImagem3.data[c+k+3] = 0;	
					if ( Math.abs(codeImagem3.data[c+k] - codeImagem3.data[c+k + canvas1.width*4*1]) > 5   & codeImagem3.data[c+k] > 150 & codeImagem3.data[c+k+2] < 150 & codeImagem3.data[c+k+1] < 150)			// se ocorrer contraste
						codeImagem3.data[c+k+3] = 255;
				}
				if (prim == 0) prim = c+k;
				ult=c+k;
			}
			qC=0;
		}

		if (Math.abs(med1-med2) > 40000){
			console.log("Med1: " + med1);
			console.log("Med2: " + med2);
			console.log("Dif:" + Math.abs(med1-med2));
			mostraConsole = false;
		}



		if (permutaV == 0){
			permutaV = 1;
			med1 = (prim + ult)/2;
			if (Math.abs(med1-med2) > 90000){
				if (med1 > med2)
//							 document.getElementById("sentido").innerHTML="Left";
//							$("#comodo").stop().animate({ "margin-top": "+=100px" }, 400);
							g.onHandDown();
				else 
//							 document.getElementById("sentido").innerHTML="Right";
//							$("#comodo").stop().animate({ "margin-top": "-=100px" },400);
							g.onHandUp();
			} 
		} else {
			permutaV = 0;
			med2 = (prim + ult)/2;
			if (Math.abs(med1-med2) > 90000){	
				if (med1 > med2)
//							 document.getElementById("sentido").innerHTML="Right";
//							$("#comodo").stop().animate({ "margin-top": "-=100px" }, 400);
							g.onHandUp();
				else 
//							 document.getElementById("sentido").innerHTML="Left";							 
//							$("#comodo").stop().animate({ "margin-top": "+=100px" }, 400);
							g.onHandDown();

			}
		}

		ctxCanvas4.putImageData(codeImagem3,0,0);
		
			
			}
		
			function captureHorizontal() {



			

		// copiando a imagem para o canvas1
		canvas1=document.getElementById("canvas1"); 													// recupera o elemento canvas denominado no html como canvas1
		ctxCanvas1 = canvas1.getContext("2d");																// criar um contexto baseado no elemento canvas selecionado
		imagem = document.getElementById("canvasCam");													// recupera a imagem
		ctxCanvas1.drawImage(imagem, 0, 0);																		// cola a imagem no contexto canvas
		codeImagem3 = ctxCanvas1.getImageData(0, 0, canvas1.width, canvas1.height);			// captura a codificação (pixels) da imagem para ser trabalhada

		//detecção dos dedos na vertical
		canvas4=document.getElementById("canvas1"); 														// recupera o elemento canvas denominado no html como canvas4
		ctxCanvas4 = canvas4.getContext("2d");																	// criar um contexto baseado no elemento canvas selecionado
		codeImagem3 = ctxCanvas1.getImageData(0, 0, canvas1.width, canvas1.height);				// captura a codificação (pixels) da imagem para ser trabalhada


	qC = 0;																												// variável contadora da quantidade de ocorrências de contraste
				show = false;
				prim = 0;
				ult = 0;
				for (k=0; k<canvas1.width*4; k += 4){
					for (c=0; c<codeImagem3.data.length; c += canvas1.width*4){
						codeImagem3.data[c+k+3] = 0;						
						if ( Math.abs(codeImagem3.data[c+k] - codeImagem3.data[c+k + canvas1.width*4]) > 5 & codeImagem3.data[c+k] > 150 & codeImagem3.data[c+k+2] < 150 & codeImagem3.data[c+k+1] < 150  )			// se ocorrer contraste
						{
							qC++; 
						}	
					}
//					if ( qC > document.getElementById("i1").value & qC < document.getElementById("i2").value ){
					if ( qC > 15 & qC < 25 ){
						for (c=0; c<codeImagem3.data.length; c += canvas1.width*4){
							codeImagem3.data[c+k+3] = 0;	
							if ( Math.abs(codeImagem3.data[c+k] - codeImagem3.data[c+k + canvas1.width*4]) > 5   & codeImagem3.data[c+k] > 150 & codeImagem3.data[c+k+2] < 150 & codeImagem3.data[c+k+1] < 150)			// se ocorrer contraste
								codeImagem3.data[c+k+3] = 255;
						}
						if (prim == 0) prim = c+k;
						ult=c+k;
					}
					qC=0;
				}

				if (Math.abs(med3-med4) > 0){ 
					console.log("Med1: " + med3);
					console.log("Med2: " + med4);
					console.log("Dif:" + Math.abs(med3-med4));
					mostraConsole = false;
				}



				if (permutaH == 0){
					permutaH = 1;
					med3 = (prim + ult)/2;
					if (Math.abs(med3-med4) < 750 & Math.abs(med3-med4) > 200){
						console.log("RIGHT!!!!");
						if (med3 > med4)
//							 document.getElementById("sentido").innerHTML="Left";
//							$("#comodo").stop().animate({ "margin-left": "+=100px" }, 500);
							g.onHandLeft();
						else 
//							 document.getElementById("sentido").innerHTML="Right";
//							$("#comodo").stop().animate({ "margin-left": "-=100px" }, 500);
							g.onHandRight();
					} 
				} else {
					permutaH = 0;
					med4 = (prim + ult)/2;
					if (Math.abs(med3-med4) < 750 & Math.abs(med3-med4) > 200){
						console.log("LEFT!!!!");
						if (med3 > med4)
//							 document.getElementById("sentido").innerHTML="Right";
//							$("#comodo").stop().animate({ "margin-left": "-=100px" }, 500);
							g.onHandRight();
						else 
//							 document.getElementById("sentido").innerHTML="Left";							 
//							$("#comodo").stop().animate({ "margin-left": "+=100px" }, 500);
							g.onHandLeft();
					}
				}

	
			
ctxCanvas4.putImageData(codeImagem3,0,0);


	};

	var video = document.querySelector("#vid");
	var canvas = document.querySelector('#canvasCam');
	var ctx = canvas.getContext('2d');
	var localMediaStream = null;

	var onCameraFail = function (e) {
	   console.log('Camera did not work.', e);
	};

	function snapshot() {
	   if (localMediaStream) {
		  ctx.drawImage(video, 0, 0);
	   }
	}

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia({video:true}, function (stream) {
	   video.src = window.URL.createObjectURL(stream);
	   localMediaStream = stream;
	}, onCameraFail);

}
