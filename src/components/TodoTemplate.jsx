import React from "react"
import styles from "./TodoTemplate.module.scss"
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
		<div className={styles.todo} data-id={id}>
			<span className={styles.todo_text}>{title}</span>
			<button className={styles.todo_edit_btn} onClick={editTodo}>
				Edit
			</button>
			<button className={styles.todo_remove_btn} onClick={removeTodo}>
				Delete
			</button>
		</div>
	)
}
