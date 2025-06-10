const bar = document.getElementById('bar');
const button = document.getElementById('buttons');
const tasks = document.getElementById('tasks');


button.addEventListener('click',()=>{
    const btn = document.createElement('button');
    const text = bar.innerText.trim();
    if (text !== ""){
        const task = document.createElement('div');
        const span = document.createElement('span');
        const edit = document.createElement('button');
        span.innerText = text;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        task.appendChild(checkbox);
        task.appendChild(span);
        task.className = 'task';
        tasks.appendChild(task);
        btn.innerText = 'Delete';
        btn.addEventListener('click',()=>{
            task.remove();
        })
        edit.innerText = 'Edit';
        edit.addEventListener('click', () =>{
            if (edit.innerText == 'Edit'){
                span.contentEditable = true;
                span.focus();
                edit.innerText = 'Save';
            }else {
                span.contentEditable = false;
                edit.innerText = 'Edit';
            }
        } )

        const buttonGroup = document.createElement('div');
        buttonGroup.appendChild(edit);
        buttonGroup.appendChild(btn);
        task.appendChild(buttonGroup)
        bar.innerText = "";
    }
});
