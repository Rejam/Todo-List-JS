const list = document.querySelector('#todosList')
const addItem = document.querySelector('#addTodo')

list.addEventListener('click', e => {
    e.target.tagName === 'LI' && toggleDone(e)
    e.target.tagName === 'SPAN' && removeItem(e)
})

function toggleDone(e) {
    e.target.classList.toggle('done')
    e.stopPropagation();

}
function removeItem(e){
    list.removeChild(e.target.parentNode)
    e.stopPropagation();
}

addItem.addEventListener('keypress', e => {
    e.key === 'Enter' && e.target.value.length > 0 && addToList(e)
})

function addToList(e) {
    list.appendChild(createLI(e.target.value))
    e.target.value = ''
}

function createLI(text){
    return document.createRange().createContextualFragment(`<li><span class='icon-delete'>x</span>${text}</li>`);
}