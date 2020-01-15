const stae1 = {
	username : "",
}
export default function users(state = stae1, action) {
	switch (action.type) {
		case 'LOGIN':
			return { ...state }
		default:
			return state
	}
}