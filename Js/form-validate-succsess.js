function validation(form) {

	let result = true;

	


	form.querySelectorAll('.form-control').forEach(input => {

		removeError(input)

		if (input.classList.contains('_email')) {
			if (emailTest(input)) {
				createError(input, 'The field is not filled')
			result = false
			}
		} else if (input.getAttribute("type") === "checkbox" && input.checked === false){
			createError(input, 'The field is not filled')
			result = false
		}else{
			if (input.value === '') {
				createError(input, 'The field is not filled')
			result = false
			}
		}

	});

	return result

	//Remove errors-------------------------------
	function removeError(input){
		const parent = input.parentNode;

		if (parent.classList.contains('error')) {
			parent.querySelector('.error-label').remove()
			parent.classList.remove('error')
		}
	}

	//createErrors--------------------------------
	function createError(input, text) {
		const parent = input.parentNode;
		const errorLabel = document.createElement('label')

		errorLabel.classList.add('error-label')
		errorLabel.textContent = text

		parent.classList.add('error');

		parent.prepend(errorLabel)
	}
	

	//email cheker
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	
}

document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault()
	
	if (validation(this) === true) {
		//ТУТ ДОЛЖЕН ОТКРЫТЬСЯ ПОПАП
	}

});


//TELEPHONE MASK
document.querySelector('#phone').onkeydown = function(e){
	inputphone(e,document.querySelector('#phone'))
	}

	function inputphone(e, phone){
		function stop(evt) {
				evt.preventDefault();
		}
		let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)
		
		if(not == 1 || 'Backspace' === not){
		if('Backspace' != not){ 
				if(v.length < 3 || v ===''){phone.value= '+7('}
				if(v.length === 6){phone.value= v +')'}
				if(v.length === 10){phone.value= v +'-'}
				if(v.length === 13){phone.value= v +'-'}
				}
		}else{stop(e)}};



		