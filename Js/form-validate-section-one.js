//Отправка формы после успешной валидации
	document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault()
	
	if (validation(this) === true) {
	//Переменная с выбором всех инпутов
		const formElements = document.querySelectorAll('.input_box__section-one');
	//Добавляет класс успешно к инпутам формы
  	formElements.forEach((element) => {
    element.classList.add('success');
  });

		//Выбор Модального окна
        const modal = document.getElementById('modal_sectionOne');
		//Привязка к кнопке отправки
        const buttonError = document.getElementById('open_modal_sectionOne');
		//Привязка к крестику закрытия
        const closeButton = document.querySelector('.close_sectionOne');
            modal.style.display = "block";
            document.body.classList.add("modal-open");
		//Удаляем класс ошибки для кнопки если валидация прошла успешно
						buttonError.classList.remove('error_button');
		//Добавляем класс успешно для кнопки если валидация прошла успешно
						buttonError.classList.add('success_button');
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
	}else{
	//Привязка к кнопке отправки
		const buttonError = document.getElementById('open_modal_sectionOne');
	//Если валидация провалилась то присваиваем класс ошибки
		if((validation(this) === false)) {
			buttonError.classList.add('error_button');
		}
	}

});

