function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') return;
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <button class="edit" onclick="editTodo(this)">Edit</button>
            <button onclick="deleteTodo(this)">Delete</button>
        </div>
    `;
    
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

function editTodo(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Edit todo:', span.textContent);
    
    if (newText && newText.trim() !== '') {
        span.textContent = newText.trim();
    }
}

function deleteTodo(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}