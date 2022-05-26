import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoAction";

const Todo = ({ todos, addTodo }) => {
    console.info("INFO STATE REDUX : ", todos);

    const addNewTodo = () => {
        const data = {
            id: 3,
            title: 'Kuota',
            description: 'Tolong cepat turun'
        }
        addTodo(data);
    }

    return(
        <div>
            <h1>Todo List</h1>
            <button onClick={addNewTodo}>Add</button>
            {todos.map((value, index) => {
                return (
                    <div>
                        <ol key={index}>
                            <li>{value.title}</li>
                            <li>{value.description}</li>
                        </ol>
                    </div>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
});

export default connect(mapStateToProps, {addTodo})(Todo);
