// export const searchHandler = (text) => {
// clearTimeout(state.timeout.current)
// state.timeout.current = setTimeout(() => {
// let res = fetch(`http://localhost:3000/todos?q=${text}`)
// 	.then((response) => response.json())
// 	.then((filteredTodos) => filteredTodos)
// console.log("res", res)
// return res
// }, 600)
// }

export async function searchHandler(text) {
	let response = await fetch(`http://localhost:3000/todos?q=${text}`)
	let sortedTodos = await response.json()
	console.log("search", sortedTodos)
	console.log(typeof sortedTodos)
	return sortedTodos
}
