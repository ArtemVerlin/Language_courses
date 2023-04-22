//Отправка формы после успешной валидации
document.getElementById('form__call-a-back').addEventListener('submit', function(event) {
	event.preventDefault()
	
	if (validation(this) === true) {
		//Добавляет класс успешно к инпутам формы
		const formElements = document.querySelectorAll('.input_box__book-a-call');
  	formElements.forEach((element) => {
    element.classList.add('success');
  });
        const modal = document.getElementById('modal_sectionOne');
        const buttonError = document.getElementById('open_modal_call-a-back');
        const closeButton = document.querySelector('.close_sectionOne');
				const popupActive = document.querySelector('.popup.open');
            modal.style.display = "block";
            document.body.classList.add("modal-open");
						setTimeout(() => {
							body.classList.toggle('_lock');
							document.body.classList.toggle("modal-open");
              modal.classList.toggle("open");
            }, 1800);
						buttonError.classList.remove('error_button');
            setTimeout(() => {
              modal.classList.add("open");
							if (popupActive) {
								popupClose(popupActive, false);
							}
            }, 10);
            window.addEventListener("click", closeOutsideModal);
            document.addEventListener("keydown", closeOnEsc);
          
          
          closeButton.addEventListener('click', function() {
            closeModal();
						
          });
          
          function closeModal() {
            modal.classList.remove("open");
						body.classList.remove('_lock');
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
			const buttonError = document.getElementById('open_modal_call-a-back');
		//Если валидация провалилась то присваиваем класс ошибки
			if((validation(this) === false)) {
				buttonError.classList.add('error_button');
			}
	}

});