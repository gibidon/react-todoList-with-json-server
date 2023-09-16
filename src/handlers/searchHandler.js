export const searchHandler = (state, text) => {
	clearTimeout(state.timeout.current)
	state.timeout.current = setTimeout(() => {
		fetch(`http://localhost:3000/todos?q=${text}`)
			.then((response) => response.json())
			.then((filteredTodos) => state.setTodos(filteredTodos))
	}, 600)
}

// export async function searchHandler(state, text) {
// 	let response = await fetch(`http://localhost:3000/todos?q=${text}`)
// 	let sortedTodos = await response.json()
// 	return sortedTodos
// }
