import React from "react"
import { useState } from "react"

export default function SearchForm({ searchTodo }) {
	const [inputState, setInputState] = useState("")

	return (
		<div>
			<label htmlFor="search_text">Enter text for search:</label>
			<input
				value={inputState}
				id="search_text"
				type="text"
				onChange={(e) => {
					setInputState(e.target.value)
					searchTodo(e.target.value)
				}}
			/>
		</div>
	)
}
