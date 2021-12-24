let editButton = document.querySelector(".profile-info__edit-btn")

function handleEditButtonClick() {
    document.querySelector(".pop-up").classList.add('pop-popup_opened')

    nameInput.value = profileName.innerHTML
    jobInput.value = profileJob.innerHTML

}

editButton.addEventListener('click', handleEditButtonClick)


let closeButton = document.querySelector(".pop-up__close-btn")

function handleCloseButtonClick() {
    document.querySelector(".pop-up").classList.remove('pop-popup_opened')
}

closeButton.addEventListener('click', handleCloseButtonClick)

// Находим форму в DOM
let formElement = document.querySelector(".pop-up__admin") // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.querySelector("#name")
let jobInput = document.querySelector("#job")


let profileName = document.querySelector(".profile-info__name")
let profileJob = document.querySelector(".profile-info__job")

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value

    handleCloseButtonClick()
}

formElement.addEventListener('submit', formSubmitHandler);