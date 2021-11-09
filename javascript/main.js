"use strict"

	//Ingreso nombre de usuario y oculto el cartel.
	document.getElementById("boton").onclick = function(){
		var nombre = document.getElementById("name").value;
			document.getElementById("user").innerHTML = " " + nombre;
			document.getElementById("user-get").style.display = "none";
			document.getElementById("delete-preguntas").style.display = "block";
			document.getElementById("last-part").style.top = "3750px";
	}

	//Value de respuestas
	var contenidofinal = 0;

	document.getElementById("btn-final").onclick = function(){
		var flag = document.getElementById("p1resp1");
		if(flag.checked){
			document.getElementById("p1_label2").style.color = "lightgreen";
			document.getElementById("p1_label1").style.color = "red";
		}
		flag = document.getElementById("p1resp2");
		if(flag.checked){
			contenidofinal = 4;
			document.getElementById("p1_label2").style.color = "lightgreen";
		}
		flag = document.getElementById("p1resp3");
		if(flag.checked){
			document.getElementById("p1_label2").style.color = "lightgreen";
			document.getElementById("p1_label3").style.color = "red";
		}
		flag = document.getElementById("p1resp4");
		if(flag.checked){
			document.getElementById("p1_label2").style.color = "lightgreen";
			document.getElementById("p1_label4").style.color = "red";
		}

		//PREGUNTA 2	//PREGUNTA 2	//PREGUNTA 2	//PREGUNTA 2
		//PREGUNTA 2	//PREGUNTA 2	//PREGUNTA 2	//PREGUNTA 2

		flag = document.getElementById("p2resp1");
		if(flag.checked){
			document.getElementById("p2_label4").style.color = "lightgreen";
			document.getElementById("p2_label1").style.color = "red";
		}
		flag = document.getElementById("p2resp2");
		if(flag.checked){
			document.getElementById("p2_label4").style.color = "lightgreen";
			document.getElementById("p2_label2").style.color = "red";
		}
		flag = document.getElementById("p2resp3");
		if(flag.checked){
			document.getElementById("p2_label4").style.color = "lightgreen";
			document.getElementById("p2_label3").style.color = "red";
		}
		flag = document.getElementById("p2resp4");
		if(flag.checked){
			contenidofinal += 2;
			document.getElementById("p2_label4").style.color = "lightgreen";
		}

		//PREGUNTA 3	//PREGUNTA 3	//PREGUNTA 3	//PREGUNTA 3
		//PREGUNTA 3	//PREGUNTA 3	//PREGUNTA 3	//PREGUNTA 3

		flag = document.getElementById("p3resp1");
		if(flag.checked){
			contenidofinal += 2;
			document.getElementById("p3_label1").style.color = "lightgreen";
		}
		flag = document.getElementById("p3resp2");
		if(flag.checked){
			document.getElementById("p3_label1").style.color = "lightgreen";
			document.getElementById("p3_label2").style.color = "red";
		}
		flag = document.getElementById("p3resp3");
		if(flag.checked){
			document.getElementById("p3_label1").style.color = "lightgreen";
			document.getElementById("p3_label3").style.color = "red";
		}
		flag = document.getElementById("p3resp4");
		if(flag.checked){
			document.getElementById("p3_label1").style.color = "lightgreen";
			document.getElementById("p3_label4").style.color = "red";
		}

		//PREGUNTA 4	//PREGUNTA 4	//PREGUNTA 4	//PREGUNTA 4
		//PREGUNTA 4	//PREGUNTA 4	//PREGUNTA 4	//PREGUNTA 4

		flag = document.getElementById("select-p4").value;
		if(flag == 1){
			document.getElementById("select-p4").style.background = "red";
		}
		if(flag == 2){
			document.getElementById("select-p4").style.background = "red";
		}
		if(flag == 3){
			contenidofinal += 2;
			document.getElementById("select-p4").style.background = "lightgreen";
		}
		if(flag == 4){
			document.getElementById("select-p4").style.background = "red";
		}
		if(flag == "Null"){
			document.getElementById("select-p4").style.background = "red";
		}

			document.getElementById("resp-final").innerHTML = "Puntaje Obtenido: " + contenidofinal + "/10";
			document.getElementById("puntuacion").innerHTML = contenidofinal + "/10";
			document.getElementById("btn-final").style.visibility = "hidden";

			if(flag != 3)
				document.getElementById("pregunta4-correcta").style.visibility = "visible";

			if(contenidofinal < 6){
				document.getElementById("gif-mal").style.visibility = "visible";
				document.getElementById("resp-final").style.color = "red";
			}
			else{
				document.getElementById("gif-bien").style.visibility = "visible";
				document.getElementById("resp-final").style.color = "lightgreen";
			}
	}

