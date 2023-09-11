import React from "react"
import { useState } from "react"

export default function EditTemplate({ update, cancelUpdate }) {
	const [state, setState] = useState("")
	return (
		<form onSubmit={() => update(state)}>
			<input
				type="text"
				placeholder="edit task"
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
			<button type="submit">Edit</button>
			<button onClick={cancelUpdate}>Cancel</button>
		</form>
	)
}
