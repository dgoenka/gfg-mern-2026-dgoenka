document.addEventListener('DOMContentLoaded', function() {

    const mainentry = document.getElementById('mainentry');
    const form = document.getElementById('mainentryform');
    const submitButton = form.querySelector('button[type="submit"]');

    function updateState() {
        const hasContent = mainentry.textContent.trim().length > 0;
        if (hasContent) {
            mainentry.classList.add('has-content');
        } else {
            mainentry.classList.remove('has-content');
        }
        if (submitButton) {
            submitButton.disabled = !hasContent;
        }
    }

    mainentry.addEventListener('input', function(event) {
        updateState();
    });

    mainentry.addEventListener('keydown', function(event) {
        let currentVals = new FormData(form);
        let checked = currentVals.get('multiline');
        if(checked=="on") return;
        if (event.key === 'Enter') {
            event.preventDefault();
            form.requestSubmit();
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const entryItem = mainentry.innerHTML;
        if (!entryItem) return;

        const todolist = document.getElementById('todolist');
        const li = document.createElement('li');

        const deleteMe = ()=>{
            li.remove();
        }
        const button = document.createElement('button');
        button.innerHTML = "🗑";
        button.classList.add('delete');
        button.addEventListener('click', deleteMe);
        button.contentEditable = "false";

        const div = document.createElement('div');
        div.className = 'listitem';

        const span = document.createElement('div');
        span.style.fontFamily="serif";
        span.contentEditable = "true";
        span.innerHTML = entryItem
        div.appendChild(span);

        div.appendChild(button);


        li.appendChild(div);
        todolist.appendChild(li);
        mainentry.textContent = "";
        updateState();
    });
});
