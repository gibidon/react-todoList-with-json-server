export const removeHandler = (state, id) => {
	fetch(`http://localhost:3000/todos/${id}`, {
		method: "DELETE",
	}).then(state.updateRefreshState())
}
