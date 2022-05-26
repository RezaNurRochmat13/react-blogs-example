export const addTodo = data => {
    return({
        type: "ADD",
        payload: data
    });
}