export const addHandler = (state, newText) => {
	fetch("http://localhost:3000/todos", {
		method: "POST",
		headers: { "Content-Type": "application/json;charset=utf-8" },
		body: JSON.stringify({ title: newText }),
	}).then(state.updateRefreshState())
}
