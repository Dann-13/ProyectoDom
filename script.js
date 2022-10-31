const btn = document.querySelector("[data-form-btn]");
//Fomra mejor
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value)
}
btn.addEventListener("click", createTask);
//Fomra normal
/* btn.addEventListener("click",(evento )=> {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value)
}) */