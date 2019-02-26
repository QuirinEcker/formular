window.onload = () => {
	
	let errors = [];
	
	document.getElementById("submit").addEventListener("click", () => {
		check(
			"Email",
			"In der Email ist etwas falsch" ,
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
			document.querySelector("#email").value
		);
		
		confirmCeck("email", document.querySelector("#email-confirm"), document.querySelector("#email"));
		
		check(
			"Telefonnummer",
			"Die Telefonnummer enthält falsche Zeichen",
			/^[0-9\[\]\-\/+\(\) ]*$/gm,
			document.querySelector("#phone-number").value
		);
		
		check("Vorname", "", "x", document.querySelector("#first-name").value);
		check("Nachname", "", "x", document.querySelector("#last-name").value);
		check("Passwort", "", "x", document.querySelector("#password").value);
		confirmCeck(
			"Passwort",
			document.querySelector("#password-confirm"),
			document.querySelector("#password")
		);
		
		checkAGB()
		
		printErr();
		errors = [];
	});
	
	function check(feld, error, regEx, value) {
		if(typeof regEx === "string") {
			if(value === 0 || value === null || value === "") {
				errors.push("Bitte " + feld + " eingeben");
			}
		} else {
			if(value === 0 || value === null || value === "") {
				errors.push("Bitte " + feld + " eingeben");
			}
			
			if(regEx.exec(value) === null) {
				errors.push(error);
			}
		}

		

	}
	
	function confirmCeck(feld, normal, confirm) {
		if(normal.value.localeCompare(confirm.value)) {
			errors.push(feld + " Felder müssen übereinstimmen")
		}
	}
	
	function printErr() {
		const errorContainer = document.querySelector("#error-mess");
		
		while(errorContainer.hasChildNodes()) {
			while (errorContainer.firstChild) {
    			errorContainer.removeChild(errorContainer.firstChild);
			}
		}
		
		for(error of errors) {
			let div = document.createElement("div");
			div.textContent = error;
			document.querySelector("#error-mess").appendChild(div);
		}
	}
	
	function checkAGB() {
		const agb = document.querySelector("#agb");
		
		if(!agb.checked) {
			errors.push("AGB müssen akzeptiert werden")
		}
	}
}