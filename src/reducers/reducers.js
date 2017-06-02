export const commentReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return [
				...state,
				{
					name: action.payload.name,
					text: action.payload.text,
					createdAt: action.payload.createdAt
				}
			];

		case "DELETE_COMMENT":
			return state.filter(({createdAt}) => createdAt !== action.id);

		default:
			return state;
	}
};
