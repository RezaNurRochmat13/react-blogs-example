import { connect } from "react-redux";

const Todo = ({ todos }) => {
    console.info("INFO STATE REDUX : ", todos);
    return(
        <div>
            <h1>Todo List</h1>
            {todos.map((value, index) => {
                return (
                    <div>
                        <li key={index}>{value.title}</li>
                        <li key={index}>{value.description}</li>
                    </div>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
});

export default connect(mapStateToProps)(Todo);
