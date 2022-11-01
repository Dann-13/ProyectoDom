const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");//agreagando clase nueva del icono
    element.classList.toggle("completeIcon")
    element.classList.toggle("far");//eliminado la vieja
}
export default checkComplete