import {useEffect, useState} from "react";

const List = () => {
    const [todos, setTodos] = useState([]);
    
    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:4000/');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.log(error.message);
        }
    }

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
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td className="text-center">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
