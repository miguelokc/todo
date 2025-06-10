const bar = document.getElementById('bar');
const button = document.getElementById('buttons');
const tasks = document.getElementById('tasks');


button.addEventListener('click',()=>{
    const btn = document.createElement('button');
    const text = bar.innerText.trim();
    if (text !== ""){
        const task = document.createElement('div');
        task.className = 'task';
        task.innerText = text;
        tasks.appendChild(task);
        btn.innerText = 'delete';
        task.appendChild(btn);
        btn.addEventListener('click',()=>{
            task.remove();
        })
        bar.innerText = "";
    }
});
