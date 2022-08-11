const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: "toolkit",
  initialState: { todos: ["Добавить", "Удалить", "Состояние"] },
  reducers: {
    AddTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    RemoveTodo(state, action) {
      state.count = state.count - 1;
    },
    TooggleTodoComplete(state, action) {},
  },
});
export const {AddTodo, RemoveTodo, TooggleTodoComplete} = todoSlice.actions
export default todoSlice.reducers;
