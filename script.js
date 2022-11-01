(() => { //evitando que el user manipule codigo
    const btn = document.querySelector("[data-form-btn]");
    //Fomra mejor
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
        const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
        //task.innerHTML = content;
        task.appendChild(taskContent);
        list.appendChild(task);
    }
    btn.addEventListener("click", createTask);
    //Fomra normal
    /* btn.addEventListener("click",(evento )=> {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        console.log(input.value)
    }) */

    //<i class="far fa-check-square icon"></i>
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
})();