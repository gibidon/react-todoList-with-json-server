import React from "react"
import { useState } from "react"

export default function AddTaskForm({ addTask }) {
	const [inputState, setInputState] = useState("")

	const updateState = () => {}

	return (
		<form onSubmit={() => addTask(inputState)}>
			<label htmlFor="add_task">Enter text:</label>
			<input
				value={inputState}
				id="add_task"
				type="text"
				onChange={(e) => setInputState(e.target.value)}
			/>
			<button type="submit">add task</button>
		</form>
	)
}
