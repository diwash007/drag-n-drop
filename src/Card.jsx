import React from "react";

function Card({ item, items, index, setItems }) {
  const onDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };
  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    let index1 = event.dataTransfer.getData("index");
    let temp = [...items];
    var x = temp[index];
    temp[index] = temp[index1];
    temp[index1] = x;
    setItems(temp);
  };
  return (
    <div
      className="col"
      onDragStart={(event) => onDragStart(event, index)}
      draggable
      onDragOver={(event) => onDragOver(event)}
      onDrop={(event) => {
        onDrop(event);
      }}
    >
      {item.title}
      <hr></hr>
      {item.childs.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
}

export default Card;
