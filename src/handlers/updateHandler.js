export const updateHandler = (state, newValue, id) => {
	fetch(`http://localhost:3000/todos/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		body: JSON.stringify({ title: newValue }),
	})
		.then(state.updateRefreshState())
		.finally(state.cancelEditing())
}
