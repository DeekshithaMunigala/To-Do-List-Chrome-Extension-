const input = document.querySelector("#inputText");
const btn = document.querySelector("#btn");
const listul = document.querySelector("#list");
const containerH3 = document.querySelector("#con-h3");

btn.addEventListener('click', () => {
    let inputText = input.value;

    if(inputText.trim() !== "") {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('task-checkbox');

        const span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = inputText;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn')
        removeBtn.textContent = 'Remove';

        containerH3.style.display = "flex";

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);
        listul.appendChild(li);

        input.value ="";

    } else {
        alert("Please enter a task");
    }
});

listul.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-btn')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('task-checkbox')) {
        if(e.target.checked) {
            e.target.nextElementSibling.style.textDecoration = 'line-through';
            e.target.nextElementSibling.style.opacity= '0.5';
        } else {
            e.target.nextElementSibling.style.textDecoration = 'none';
            e.target.nextElementSibling.style.opacity= 'none';
        }
    }
});