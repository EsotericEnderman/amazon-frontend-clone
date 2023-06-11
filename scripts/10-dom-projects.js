/*
			String(25);

			// ! NOTE: Type coercion: If a string only contains a number and you - * / then it will be converted into a number.

			console.log("25" - 5);

			// => 255. Adding works differently.
			console.log("25" + 5);
			// Don't do math using strings.

			// You don't have to type 'window' at the front.
			   window.document;
			   window.console;
			   window.console.log("window");
			   window.alert("Popup!");
			   */

// One solution: When you click the button: 1. Add a class that has different styles using `.classList`.

const subscribe = () => {
	const button = document.querySelector("button.js-subscribe-button");

	if (button.innerText === "Subscribe") {
		button.innerHTML = "Subscribed";
		button.classList.add("is-subscribed");
	} else {
		button.innerHTML = "Subscribe";
		button.classList.remove("is-subscribed");
	}
};

const calculateTotal = () => {
	const inputElement = document.querySelector("input.js-cost-input");

	let cost = Number(inputElement.value) * 100;

	const output = document.querySelector("p.js-total-cost");

	if (cost < 0) {
		output.classList.add("error");
		output.innerHTML = "Error: cost cannot be less than $0";
	}

	// "25" + 10 = 2510
	// Type coercion
	else {
		if (cost < 4000) cost += 1000;

		output.classList.remove("error");
		output.innerHTML = `$${cost / 100}`;
	}
};

const handleCostKeydown = (event) => event.key === "Enter" && calculateTotal();

// ! NOTE: clicks, keydowns = events.
// ! NOTE: onclick, onkeydown = event listener.

// const button = document.querySelector("button.js-button");

// console.log(button.classList.contains("js-button"));

const buttonToggle = (buttonName) => {
	const button = document.querySelector(`button.js-switch-button-${buttonName}`);

	const buttons = document.querySelectorAll(`button.switch-button`);

	for (const button of buttons) {
		button.classList.remove("switch-button-on");
	}

	if (button.classList.contains("switch-button-on")) button.classList.remove("switch-button-on");
	else button.classList.add("switch-button-on");
};