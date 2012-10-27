// JavaScript Document
$(document).ready(function(e) {
/*	$('.btn').tap(function(){
		var boton = (($(this).attr('class')).split(' '))[1];
		switch(boton){
			case 'b1':
				alert('beep 1');
					break;
			case 'b2':
				alert('beep 2');
					break;
			case 'b3':
				alert('beep 5');
					break;
			case 'v1':
				alert('vibrar');
					break;
			case 'v2':
				alert('vibrar');
				alert('vibrar');
					break;
				
		}
	});
	$('#right').swiperight(function(){
			alert('se mueve a la derecha');
	});
	$('#left').swipeleft(function(){
			confirm('que desea hacer?');
	});
*/
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton){
				case 'b1':
					navigator.notification.beep(1);
					break;
				case 'b2':
					navigator.notification.beep(2);
					break;
				case 'b3':
					navigator.notification.beep(5);
					break;
				case 'v1':
					navigator.notification.vibrate(500);
					break;
				case 'v2':
					navigator.notification.vibrate(300);
					navigator.notification.vibrate(1000);
					break;
			}
		});
		$('right').swiperight(function(){
			navigator.notification.alert("desliza a la derecha",function() { },"practica 1","Aceptar");
		});
	$('#alert left').swipeleft(function(){
		navigator.notification.confirm("que desea hacer?",function(boton) { 
		switch(boton){
			case '0':
				navigator.notification.beep(1);
				break;
			case '1':
				navigator.notification.vibrate(500);
				break;
		}
	},"practica 1","beep, vibrar, cancelar");
	});

// sonido de pc
//	navigator.notification.beep(1);

//vibracion
//	navigator.notification.vbrate(300);


//	navigator.notification.alert("mensaje",funcion de callback,"titulo","nombre del boton");
//	navigator.notification.confirm("mensaje",funcion de botones(parametros que regresa el boton pulsado)´switch de botones},"titulo","nombre de botones, separados, por, comas, en, la, misma, cadena");

	}, false);
});

