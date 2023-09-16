export const sortHandler = (state) => {
	fetch(`http://localhost:3000/todos?_sort=title`)
		.then((response) => response.json())
		.then((sortedTodos) => state.setTodos(sortedTodos))
}
