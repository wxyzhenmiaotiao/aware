const stae1 = {
	data : {}
}
export default function users(state = stae1, action) {
	switch (action.type) {
		case 'LOGIN':
			console.log(action.payload)
			return { ...state }
		default:
			return state
	}
}