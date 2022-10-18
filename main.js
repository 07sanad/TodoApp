const nodeList = document.getElementsByTagName('li');
let i;

for (let i = 0; i < nodeList.length; i++) {
    const span = document.createElement('span');
    span.className = 'delete';
    const txt = document.createTextNode('\u00D7');

    span.appendChild(txt);
    nodeList[i].appendChild(span);   
}

const btndel = document.getElementsByClassName('delete');
let j;

for (let j = 0; j < btndel.length; j++) {
    btndel[j].onclick= function () {
        const div = this.parentElement;
        div.style.display ='none'; 
    };   
};

const todoList = document.querySelector('ul');
todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
},false);

function addTask() {
   let todoInput = document.getElementById('inputValue').value;
    const li = document.createElement('li');
    const text = document.createTextNode(todoInput);

    li.appendChild(text);
    if (todoInput ==='') {
        alert('write here...') ; 
    }else {
        document.getElementById('todoItems').appendChild(li);
    };
    document.getElementById('inputValue').value ='';

    const span = document.createElement('span');
    span.className = 'delete';
    const txt = document.createTextNode('\u00D7');
    span.appendChild(txt);
    li.appendChild(span);

    for (let j = 0; j < btndel.length; j++) {
        btndel[j].onclick= function () {
            const div = this.parentElement;
            div.style.display ='none'; 
        };   
    };
};