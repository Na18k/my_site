
	var buttonMenu = document.getElementById("button-menu");

	var escondeMobileElemento_0 = document.getElementById("esconder-mobile-0");
	var escondeMobileElemento_1 = document.getElementById("esconder-mobile-1");
	var escondeMobileElemento_2 = document.getElementById("esconder-mobile-2");
	var escondeMobileElemento_3 = document.getElementById("esconder-mobile-3");


	function editaMenu(tipo, argumento) {
		if (tipo == "add") {
			escondeMobileElemento_0.classList.add(argumento);
			escondeMobileElemento_1.classList.add(argumento);
			escondeMobileElemento_2.classList.add(argumento);
			escondeMobileElemento_3.classList.add(argumento);

		} else if (tipo == "remove") {

			escondeMobileElemento_0.classList.remove(argumento);
			escondeMobileElemento_1.classList.remove(argumento);
			escondeMobileElemento_2.classList.remove(argumento);
			escondeMobileElemento_3.classList.remove(argumento);
		}
	}

	var ativoMenu = false;

	buttonMenu.onclick = function() {

		buttonMenu.textContent = "X";
		
		if (ativoMenu == true) {

			editaMenu("add", "esconder-mobile");
			editaMenu("remove", "mostra-mobile");
			buttonMenu.textContent = "Menu";

			ativoMenu = false;

		} else if (ativoMenu == false) {

			editaMenu("remove", "esconder-mobile");
			editaMenu("add", "mostra-mobile");
			buttonMenu.textContent = "X";

			ativoMenu = true;
		}

	}