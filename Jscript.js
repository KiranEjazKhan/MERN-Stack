window.addEventListener('load', () => {
    const form = document.querySelector('#new_task_form')
    const input = document.querySelector('#new_task_input')
    const list_el = document.querySelector('#tasks')
    console.log(input)

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Please fil out the task")
        }
        else {
            console.log("success")
        }
        const task_el = document.createElement("div")
        task_el.classList.add("task")

        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content")
        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el)
       
        const task_actions_el = document.createElement("div")
        task_actions_el.classList.add("actions")

        const task_edit_btn = document.createElement("button")
        task_edit_btn.classList.add('edit')
        task_edit_btn.innerHTML = "Edit"

        const task_delete_btn = document.createElement("button")
        task_delete_btn.classList.add('delete')
        task_delete_btn.innerHTML = "Delete"

        task_actions_el.appendChild(task_edit_btn)
        task_actions_el.appendChild(task_delete_btn)
        task_el.appendChild(task_actions_el)
        input.value = " ";

        task_edit_btn.addEventListener('click', ()=>{
            if(task_edit_btn.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly")
                task_input_el.focus()
                task_edit_btn.innerText = "Save"
            }
            else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_btn.innerText = "Edit";
             
            }
        })

        task_delete_btn.addEventListener('click',()=>{
            list_el.removeChild(task_el)
        })

        list_el.appendChild(task_el)
    })
})