const initialState = {
    todos: [
        {
            id: 1,
            title: 'Lorem',
            description: 'Ipsum'
        },
        {
            id: 2,
            title: 'Lorem',
            description: 'Ipsum'
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case "DEL":
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default todoReducer;