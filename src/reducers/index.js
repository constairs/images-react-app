const initialState = {
	images: [],
	fetching: false,
	error: ''
}

export default function page(state = initialState, action) {
	
	switch (action.type) {
		case 'GET_IMAGES_REQUEST':
			return { ...state, fetching: true }

		case 'GET_IMAGES_SUCCESS':
			return { ...state, images: action.payload, fetching: false }

		case 'GET_IMAGES_FAIL':
			return { ...state, error: action.payload.message, fetching: false }

		default:
			return state
	}
	
}