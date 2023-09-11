import React, { useCallback } from "react"
import { useEffect, useState } from "react"
import TodoTemplate from "./components/TodoTemplate.jsx"
import AddTaskForm from "./components/AddTaskForm.jsx"
import EditTemplate from "./components/EditTemplate.jsx"
import SearchForm from "./components/SearchForm.jsx"
// import "./main.css"

const App = () => {
	const [todos, setTodos] = useState([])
	const [refreshState, setRefreshState] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [currentEditId, setCurrentEditId] = useState(null)
	// const timeout = useRef()

	let todoElems = todos.map((todo) => (
		<TodoTemplate
			key={todo.id}
			title={todo.title}
			id={todo.id}
			editTodo={() => {
				setIsEditing(true)
				setCurrentEditId(todo.id)
			}}
			removeTodo={() => removeTask(todo.id)}
		/>
	))

	const updateRefreshState = () => setRefreshState(!refreshState)

	const addTask = (newTaskText) => {
		fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({ title: newTaskText }),
		}).then(updateRefreshState())
	}

	const removeTask = (id) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "DELETE",
		}).then(updateRefreshState())
	}

	const searchTodoInDb = (text) => {
		fetch(`http://localhost:3000/todos?q=${text}`)
			.then((response) => response.json())
			.then((filteredTodos) => setTodos(filteredTodos))
	}

	const sortByNames = () => {
		fetch(`http://localhost:3000/todos?_sort=title`)
			.then((response) => response.json())
			.then((sortedTodos) => setTodos(sortedTodos))
			.then((data) => console.log(data))
	}
	const updateTodo = (newVal, id) => {
		console.log("updateTodo working")
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({ title: newVal }),
		})
			.then(updateRefreshState())
			.finally(setIsEditing(false))
	}
	const cancelUpdate = () => setIsEditing(false)

	useEffect(() => {
		fetch("http://localhost:3000/todos")
			.then((response) => response.json())
			.then((todoList) => setTodos(todoList))
	}, [refreshState])

	return (
		<div>
			{isEditing && (
				<EditTemplate
					cancelUpdate={() => cancelUpdate()}
					// update={(newVal) => console.log(newVal)}
					update={(newVal) => {
						updateTodo(newVal, currentEditId)
						setIsEditing(false)
					}}
				/>
			)}
			<div className="container">
				<h1>ToDo list</h1>
				<div className="todo_main">{todoElems}</div>
			</div>
			<AddTaskForm addTask={(newTaskText) => addTask(newTaskText)} />
			<SearchForm searchTodo={(text) => searchTodoInDb(text)} />
			<button onClick={() => sortByNames()}>Sort</button>
		</div>
	)
}

export default App

// let scrollDelay = 100;
// 	let scrollTimeout;

// 	document.addEventListener('scroll', function(){
// 		clearTimeout(scrollTimeout);
// 		scrollTimeout = setTimeout(onScroll, scrollDelay);
// 	});
