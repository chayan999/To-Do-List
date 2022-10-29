const fromEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const ulEl = document.querySelector('.list')

//----gat local storage

let list = JSON.parse(localStorage.getItem('list'))
if (list) {
    list.forEach(task => {
        toDoList(task)
    })
}

fromEl.addEventListener('submit', (event) => {
    event.preventDefault();
    toDoList();
});

function toDoList(task) {
    let newTask = inputEl.value;

    //---- set for local strage
    if (task) {
        newTask = task.name
    }

    //---- set for local strage
    let liEl = document.createElement('li');
    if (task && task.checked) {
        liEl.classList.add('checked')
    }
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = '';

    //---creat check button
    const checkBtn = document.createElement('div');
    checkBtn.innerHTML = `<i class="fas fa-check-square"></i>`
    liEl.appendChild(checkBtn);


    //---- creat trash button
    const trashBtn = document.createElement('div');
    trashBtn.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtn);

    //---- torgging checked button
    checkBtn.addEventListener('click', () => {
        liEl.classList.toggle('checked')
        setStorage()
    });

    //---- remove li element by trash button
    trashBtn.addEventListener('click', () => {
        liEl.remove()
        setStorage()
    })
    setStorage()
};

//---- function for Local Stograge
function setStorage() {
    let liEls = document.querySelectorAll('li')
    let list = []
    liEls.forEach((liEl) => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains('checked')
        })
    });
    localStorage.setItem('list', JSON.stringify(list))
}
