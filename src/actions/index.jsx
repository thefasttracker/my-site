import 'whatwg-fetch'
import moment from 'moment'

export function action1(payload) {
    return {
        type: 'DO_SOMETHING',
        payload
    };
}

export const addComment = (payload) => {
	return {
		type: 'ADD_COMMENT',
		payload
	}
}

export const deleteComment = (id) => {
	return {
		type: 'DELETE_COMMENT',
		id
	}
}


