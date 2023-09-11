import React from "react"
import styles from "./TodoTemplate.module.css"
import edit_btn from "../assets/editButton.svg"
import remove_btn from "../assets/remove_btn.png"
import EditTemplate from "./EditTemplate.jsx"

export default function TodoTemplate({
	title,
	removeTodo,
	id,
	editTodo,
	isEditing,
	cancelUpdateTodo,
}) {
	return isEditing ? (
		<EditTemplate id={id} cancelUpdate={() => cancelUpdateTodo()} />
	) : (
		// <EditTemplate id={id} />
		<div className={styles.todo} data-id={id}>
			<span className={styles.todo_text}>{title}</span>
			<button className="todo_edit_btn" onClick={editTodo}>
				<img src={edit_btn} alt="edit_btn" />
			</button>
			<button className="todo_remove_btn" onClick={removeTodo}>
				<img src={remove_btn} alt="remove_btn" />
			</button>
		</div>
	)
}
