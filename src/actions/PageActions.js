let images = []
import {data} from '../data/data.js'


function getImagesFromData(data) {
	images = data
}

export function getImages() {
	return (dispatch) => {
		dispatch({
			type: 'GET_IMAGES_REQUEST',
			payload: ''
		})

		getImagesFromData(data)
		
		dispatch({
			type: 'GET_IMAGES_SUCCESS',
			payload: images
		})
	}
}