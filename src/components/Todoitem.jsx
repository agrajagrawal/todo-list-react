import React from "react";
function Todoitem(props) {
  return (
    <li
      onDoubleClick={() => {
        props.onPressed(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default Todoitem;
