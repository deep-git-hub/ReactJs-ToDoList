import React from "react";

function List(props) {
  console.log(props, "props");
  const deleteFromList = (key) => {
 const newList =   props.itemlist.filter((items) => {
      return items.key !== key;
    });
    props.setitemlist(newList);
  };

  
  return (
    <div>
      {props.itemlist.map((items) => {
        return (
          <div>
            <p>{items.item}</p>
            <button
              onClick={() => {
                deleteFromList(items.key);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
