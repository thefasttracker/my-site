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

export const loginReducer = (state = [], action) => {
	switch (action.type) {
		case "LOGIN":
			return [
				...state,
				{
					user: action.payload.user,
					password: action.payload.password
				}
			];
		case "SIGNUP":
			return [
				...state,
				{
					name: action.payload.name,
					surename: action.payload.surename,
					username: action.payload.username,
					age: action.payload.age,
					sex: action.payload.sex
				}
			];
		default:
			return state;
	}
};
