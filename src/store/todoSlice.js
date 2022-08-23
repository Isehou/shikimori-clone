import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import "./style.css";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("cant delete task");
      }
      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus = createAsyncThunk(
  "todos/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.todos.fint((todo) => todo.id === id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("cant toggle status");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "result";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
