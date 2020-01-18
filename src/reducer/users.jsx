const stae1 = {
	name : "",
}
export default function users(state = stae1, action) {
	switch (action.type) {
		case 'LOGIN':
			return { ...state , name: action.payload.userName }
		default:
			return state
	}
}