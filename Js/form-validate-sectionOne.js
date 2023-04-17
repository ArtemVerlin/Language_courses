
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

document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault()
	
	if (validation(this) === true) {
        const modal = document.getElementById('modal_sectionOne');
        const openModalButton = document.getElementById('open_modal_sectionOne');
        const closeButton = document.querySelector('.close_sectionOne');
            modal.style.display = "block";
            document.body.classList.add("modal-open");
            setTimeout(() => {
              modal.classList.add("open");
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