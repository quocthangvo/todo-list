import React from "react";

import "./App.css";
import TodoList from "./pages/TodoList";
import { ToastContainer } from "react-toastify";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <SideBar />
      {/* <TodoList /> */}
    </React.Fragment>
  );
}

export default App;
