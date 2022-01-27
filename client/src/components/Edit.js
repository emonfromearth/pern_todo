import {useState} from "react";

const Edit = ({todo}) => {
    const [description, setDescription] = useState(todo.description);
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            await fetch(`http://localhost:4000/${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.id}`}
        onClick={() => setDescription(todo.description)}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${todo.id}`}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className="modal-body"><input type='text' value={description} onChange={e => setDescription(e.target.value)} className="form-control"/></div>
            <div className="modal-footer">
              <button type="button" onClick={ (e) => handleEdit(e)} className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
