// const modalButtons = document.querySelectorAll('.modal-button');
// const closeButtons = document.querySelectorAll('.modal-close-button');
// const modals = document.querySelectorAll('.modal');
//
// modalButtons.forEach(button => {
// button.addEventListener('click', () => {
// const target = button.dataset.modalTarget;
// const modal = document.querySelector(target);
// modal.classList.add('active');
// });
// });
//
// closeButtons.forEach(button => {
// button.addEventListener('click', () => {
// const modal = button.closest('.modal');
// modal.classList.remove('active');
// });
// });
//
// modals.forEach(modal => {
// modal.addEventListener('click', event => {
// if (event.target === modal) {
// modal.classList.remove('active');
// }
// });
// });
const modalCloseButton = document.querySelector(".modal-close")
const buttons = document.querySelectorAll(".open-modal-button")
const modalBlock = document.querySelector(".modal-block")
const modalName = document.querySelector(".modal__name")
const modalBirthday = document.querySelector(".modal__birthday")
const modalPersonalFile = document.querySelector(".modal__personal-file")

modalCloseButton.addEventListener("click", () => {
    modalBlock.style.visibility = "hidden"
    modalName.innerHTML = ""
    modalBirthday.innerHTML = ""
    modalPersonalFile.innerHTML = ""
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (modalBlock.style.visibility === "hidden") {
            modalBlock.style.visibility = "visible"
            modalName.innerHTML = button.dataset.name
            modalBirthday.innerHTML = button.dataset.birthday
            modalPersonalFile.innerHTML = `<a href="${button.dataset.personalFile}">Перснальная страница</a>`
        }

    })
})