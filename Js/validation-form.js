function validation(form) {
	let result = true;

	form.querySelectorAll('.form-control').forEach(input => {
		removeError(input)
//валидация всех полей
		if (input.classList.contains('form-control')) {
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
					createError(input, 'Имя введено не верно')
				result = false
				}else{
					sucsess(input);
				}
			}
//валидация email (добавить в форму "_email")
		if (input.classList.contains('_email')) {
			removeError(input)
			if (emailTest(input)) {
				createError(input, 'Введен не верный email')
			result = false
			}else{
				sucsess(input);
			}
		}
//валидация телефона (добавить в форму "_tel")
		if (input.classList.contains('_tel')) {
			removeError(input)
			if ((input.value == '')) {
				createError(input, 'Номер введен не верно')
			result = false
			}else{
				sucsess(input);
			}
		}
	//валидация селекта (добавить в форму "_select")
			if (input.classList.contains('_select')) {
				removeError(input)
				if ((input.value == '')) {
					createError(input, 'Выберите курс')
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

	//TELEPHONE MASK
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
				if(v.length < 3 || v ===''){phone.value= '+7('}
				if(v.length === 6){phone.value= v +')'}
				if(v.length === 10){phone.value= v +'-'}
				if(v.length === 13){phone.value= v +'-'}
				}
		}else{stop(e)}};
