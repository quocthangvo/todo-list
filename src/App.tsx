import React from "react";

import "./App.css";
import TodoList from "./pages/TodoList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
