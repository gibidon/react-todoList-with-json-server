import React from "react"
import { useState } from "react"
import styles from "./EditTemplate.module.css"

export default function EditTemplate({ update, cancelUpdate }) {
	const [state, setState] = useState("")
	return (
		<div className={styles.edit_module}>
			<form onSubmit={() => update(state)} className={styles.edit_content}>
				<input
					type="text"
					placeholder="edit task"
					value={state}
					onChange={(e) => setState(e.target.value)}
				/>
				<button type="submit">Edit</button>
				<button onClick={cancelUpdate}>Cancel</button>
			</form>
		</div>
	)
}
