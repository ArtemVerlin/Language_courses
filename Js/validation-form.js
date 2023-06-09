function validation(form) {
	let result = true;

	form.querySelectorAll('.form-control').forEach(input => {
		removeError(input)
		let length = input.value.length
//валидация всех полей (добавить в форму "_val-input")
		if (input.classList.contains('_val-input')) {
			removeError(input)
			if (input.value == '') {
					createError(input, 'Поле не заполнено')
				result = false
				}else{
					sucsess(input);
				}
			}
//валидация имени (добавить в форму "_name")
			if (input.classList.contains('_name')) {
				removeError(input)
				if (!nameTest(input)) {
					createError(input, 'Please use a valid name')
				result = false
				}else{
					sucsess(input);
				}
			}
//валидация email (добавить в форму "_email")
		if (input.classList.contains('_email')) {
			removeError(input)
			if (emailTest(input)) {
				createError(input, 'Please use a valid email')
			result = false
			}else{
				sucsess(input);
			}
		}
//валидация телефона (добавить в форму "_tel")
		if (input.classList.contains('_tel')) {
			removeError(input)
			if (length !== 11 & length !== 16) {
				createError(input, 'Please use a valid phone number')
			result = false
			}else{
				sucsess(input);
			}
		}
	//валидация селекта (добавить в форму "_select")
			if (input.classList.contains('_select')) {
				removeError(input)
				if ((input.value == '')) {
					createError(input, 'Please complete this required field')
				result = false
				}else{
					sucsess(input);
				}
			}
		});
		return result

//email cheker
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
//text cheker
		function nameTest(input) {
			return /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(input.value);
		}
	}

	//createSucsess--------------------------------
	function sucsess(input) {
		const parent = input.parentNode;
		
		parent.classList.add('success');
	}

	//createErrors--------------------------------
	function createError(input, text) {
		const parent = input.parentNode;
		const errorText = document.createElement('p');

		errorText.classList.add('error-text');
		errorText.textContent = text;
		parent.classList.add('error');
		parent.append(errorText);
	}

	//Remove errors-------------------------------
	function removeError(input){
		const parent = input.parentNode;
		
		if (parent.classList.contains('error')) {
			parent.querySelector('.error-text').remove()
			parent.classList.remove('error')
		}
	}


	//TELEPHONE MASK phone-book-a-call
document.querySelector('#phone_book-a-call').onkeydown = function(e){
	inputphone(e,document.querySelector('#phone_book-a-call'))
	}

	function inputphone(e, phone){
		function stop(evt) {
				evt.preventDefault();
		}
		let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)
		
		if(not == 1 || 'Backspace' === not){
		if('Backspace' != not){ 
				if(v.length < 3 || v ===''){phone.value= '+3('}
				if(v.length === 6){phone.value= v +')'}
				if(v.length === 10){phone.value= v +'-'}
				if(v.length === 13){phone.value= v +'-'}
				}
		}else{stop(e)}};

	//TELEPHONE MASK phone-enrol_for_a_course_now
document.querySelector('#phone_sectionOne').onkeydown = function(e){
	inputphone(e,document.querySelector('#phone_sectionOne'))
	}

	function inputphone(e, phone){
		function stop(evt) {
				evt.preventDefault();
		}
		let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)
		
		if(not == 1 || 'Backspace' === not){
		if('Backspace' != not){ 
				if(v.length < 3 || v ===''){phone.value= '+3('}
				if(v.length === 6){phone.value= v +')'}
				if(v.length === 10){phone.value= v +'-'}
				if(v.length === 13){phone.value= v +'-'}
				}
		}else{stop(e)}};

	//TELEPHONE MASK phone-get_In_touch
document.querySelector('#phone-section-five').onkeydown = function(e){
	inputphone(e,document.querySelector('#phone-section-five'))
	}

	function inputphone(e, phone){
		function stop(evt) {
				evt.preventDefault();
		}
		let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)
		
		if(not == 1 || 'Backspace' === not){
		if('Backspace' != not){ 
				if(v.length < 3 || v ===''){phone.value= '+3('}
				if(v.length === 6){phone.value= v +')'}
				if(v.length === 10){phone.value= v +'-'}
				if(v.length === 13){phone.value= v +'-'}
				}
		}else{stop(e)}};
