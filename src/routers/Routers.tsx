import Products from "../pages/FakeAPI/Products";
import TodoList from "../pages/TodoList";

export const appRouters = [
  {
    path: "/todolist",
    element: <TodoList />,
    // breadcrumb: "Todo List",
  },
  {
    path: "/products",
    element: <Products />,
  },
];
