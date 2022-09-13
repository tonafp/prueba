import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
  // propiedades
  const { list, setList } = props;
// recibira los datos del checkbox que haya cambiado
  const onChangeStatus = e => {
    const { name, checked } = e.target;

    // actualizacion de la lista
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  // filtrado de lista
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  // setlist actualiza la lista
  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return ( //si la lista viene vacia mostrar no tasks
    <div className="todo-list">
      {/*(A-1)*/}
      {list.length ? chk : "No tasks"} 
      {/*(B)*/} 
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;