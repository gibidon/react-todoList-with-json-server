import React, { useRef } from "react"
import { useEffect, useState } from "react"
import TodoTemplate from "./components/TodoTemplate.jsx"
import AddTaskForm from "./components/AddTaskForm.jsx"
import EditTemplate from "./components/EditTemplate.jsx"
import SearchForm from "./components/SearchForm.jsx" // пробовал по аналогии с хендлерами красиво все компоненты импортировать, но дает ошибку
import "./main.scss"
import {
	addHandler,
	removeHandler,
	// searchHandler,   // не получилось с ним
	sortHandler,
	updateHandler,
} from "./handlers"

const App = () => {
	const [todos, setTodos] = useState([])
	const [refreshState, setRefreshState] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [currentEditId, setCurrentEditId] = useState(null)
	const updateRefreshState = () => setRefreshState(!refreshState)
	const cancelEditing = () => setIsEditing(false)
	const timeout = useRef()

	const state = {
		todos,
		setTodos,
		refreshState,
		setRefreshState,
		isEditing,
		setIsEditing,
		currentEditId,
		setCurrentEditId,
		timeout,
		updateRefreshState,
		cancelEditing,
	}

	let todoElems = todos.map((todo) => (
		<TodoTemplate // в шаблоне устанавливаем дата атрибут чтобы вытащить информацию на каком туду нажали удалить или отредактировать
			key={todo.id}
			title={todo.title}
			id={todo.id}
			editTodo={() => {
				setIsEditing(true)
				setCurrentEditId(todo.id)
			}}
			removeTodo={() => removeHandler(state, todo.id)}
		/>
	))
	const debounceSearchTodoInDb = (text) => {
		//вот этот обработчик не получилось вынести в handlers вместе со всеми
		clearTimeout(timeout.current)
		timeout.current = setTimeout(() => {
			fetch(`http://localhost:3000/todos?q=${text}`)
				.then((response) => response.json())
				.then((filteredTodos) => setTodos(filteredTodos))
		}, 600)
	}

	useEffect(() => {
		fetch("http://localhost:3000/todos")
			.then((response) => response.json())
			.then((todoList) => setTodos(todoList))
	}, [refreshState])

	return (
		<div className="container">
			<h1>My todos:</h1>
			<div className="todo_main">{todoElems}</div>
			<br />
			<div className="todo_controls">
				<AddTaskForm addTask={(newTaskText) => addHandler(state, newTaskText)} />
				<SearchForm searchTodo={(text) => debounceSearchTodoInDb(text)} />
				<button onClick={() => sortHandler(state)} className="sortBtn">
					Sort todos by name
				</button>
			</div>
			<div className="todo_edit_form">
				{isEditing && (
					<EditTemplate
						cancelUpdate={() => cancelEditing()}
						update={(newValue) => {
							updateHandler(state, newValue, currentEditId)
						}}
					/>
				)}
			</div>
		</div>
	)
}

export default App
