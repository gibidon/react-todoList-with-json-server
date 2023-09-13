import React from "react"
import { useState } from "react"

export default function SearchForm({ searchTodo }) {
	const [inputState, setInputState] = useState("")

	return (
		<div>
			<label htmlFor="search_text">Search todo by keywords:</label>
			<input
				value={inputState}
				id="search_text"
				type="text"
				placeholder="enter the text"
				onChange={(e) => {
					setInputState(e.target.value)
					searchTodo(e.target.value)
				}}
			/>
		</div>
	)
}
