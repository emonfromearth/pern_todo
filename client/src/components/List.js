import { useEffect, useState } from "react";
import Edit from "./Edit";

const List = () => {
  const [todos, setTodos] = useState([]);

  // delete a todo
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // get all todos
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container p-5">
      <h2>Todo List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td className="text-center">
                <Edit todo={todo}/>
              </td>
              <td className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
