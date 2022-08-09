const { createSlice } = require("@reduxjs/toolkit");

const ToolkitSlice = createSlice({
  name: "toolkit",
  initialState: { count: 0, todos: ["Снять", "Смонтировать", "Рассказать"] },
  reducer: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
  },
});
export default ToolkitSlice.redicer;
export const { increment, decrement, addTodo, removeLastTodo } =
  ToolkitSlice.actions;
