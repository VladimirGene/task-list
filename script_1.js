/*
   ЗАДАЧА 12: Финальное мини-приложение "Список дел". Реализовать через CLASS!
   Создай UI:
     - input
     - button "Добавить"
     - список ul > li
 
   Функционал:
     1. Добавление задач
     2. Удаление задач
     3. Отмечать задачу выполненной (клик по li → добавляется класс "done")
       
   Требования:
     1. Приятная адаптивная верстка (с дизайном. Дизайн на свое усмотрение)
*/

class TaskList {
	constructor() {
		this.button = document.querySelector('[data-js-add-task]')
		this.input = document.querySelector('[data-js-input]')
		this.list = document.querySelector('[data-js-list]')
		this.todos = []
		this.button.addEventListener('click', () => this.addTodo())
	}

	addTodo() {
		const text = this.input.value.trim()
		if (text === '') return
		const todo = { id: 'id', text: text, isCompleted: false }
		this.todos.push(todo)
		this.input.value = ''
		this.render()
	}

	render() {
		this.list.innerHTML = ''
		for (const todo of this.todos) {
			const li = document.createElement('li')
			const closeBtn = document.createElement('button')
			closeBtn.textContent = 'Закрыть'
			li.textContent = todo.text
			li.dataset.id = todo.id
			li.classList.toggle('done', todo.isCompleted)
			li.classList.add('todos')
			li.append(closeBtn)
			this.list.append(li)
		}
	}
}

new TaskList()
