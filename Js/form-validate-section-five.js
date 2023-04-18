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
			parent.querySelector('.error-text').remove()
			parent.classList.remove('error')
		}
	}

	//createErrors--------------------------------
	function createError(input, text) {
		const parent = input.parentNode;
		const errorText = document.createElement('p')
		// const title = document.querySelector('.survey-form__title')

		errorText.classList.add('error-text')
		errorText.textContent = text
		parent.classList.add('error');

		parent.append(errorText)
	}
	

	//email cheker
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	
}

document.getElementById('form_section_five').addEventListener('submit', function(event) {
	event.preventDefault()
	
	if (validation(this) === true) {
		//Добавляет класс успешно к инпутам формы
		const formElements = document.querySelectorAll('.input_box__section-five');
  	formElements.forEach((element) => {
    element.classList.add('success');
  });
        const modal = document.getElementById('modal_sectionOne');
        const buttonError = document.getElementById('open_modal_sectionFive');
        const closeButton = document.querySelector('.close_sectionOne');
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            setTimeout(() => {
              modal.classList.add("open");
		//Удаляем класс ошибки для кнопки если валидация прошла успешно
							buttonError.classList.remove('error_button');
		//Добавляем класс успешно для кнопки если валидация прошла успешно
							buttonError.classList.add('success_button');
            }, 10);
            window.addEventListener("click", closeOutsideModal);
            document.addEventListener("keydown", closeOnEsc);
          
          
          closeButton.addEventListener('click', function() {
            closeModal();
          });
          
          function closeModal() {
            modal.classList.remove("open");
            setTimeout(() => {
              modal.style.display = "none";
              document.body.classList.remove("modal-open");
            }, 500);
            window.removeEventListener("click", closeOutsideModal);
            document.removeEventListener("keydown", closeOnEsc);
          }
          
          function closeOutsideModal(event) {
            if (event.target == modal) {
              closeModal();
            }
          }
          
          function closeOnEsc(event) {
            if (event.keyCode === 27) {
              closeModal();
            }
          }
	}else{
		//Привязка к кнопке отправки
			const buttonError = document.getElementById('open_modal_sectionFive');
		//Если валидация провалилась то присваиваем класс ошибки
			if((validation(this) === false)) {
				buttonError.classList.add('error_button');
			}
		}

});


//TELEPHONE MASK
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
				if(v.length < 3 || v ===''){phone.value= '+7('}
				if(v.length === 6){phone.value= v +')'}
				if(v.length === 10){phone.value= v +'-'}
				if(v.length === 13){phone.value= v +'-'}
				}
		}else{stop(e)}};