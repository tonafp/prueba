import React, { useState } from "react";

const FormTodo = props => {
  const { handleAddItem } = props; //(C-1)
  const [description, setDescription] = useState(""); // (F-1)
  const handleSubmit = e => {
    e.preventDefault(); // para que no se refresque la pagina
    // (C-2)
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription(""); // se limpia el estatus del formulario
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <input //entrada
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)} //deshabilitar la xuxa
          />
          {/*(A)*/}
          <button //boton
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;