import { useState } from "react";

const OllyAdd = () => {
  const [MainList] = useState([
    { item1: "This", item2: "Or", item3: "That" },
    { item1: "or", item2: "That", item3: "This" },
    { item1: "That", item2: "This", item3: "Or" },
  ]);

  const [NewList, setNewList] = useState([
    { item1: "I", item2: "Am", item3: "Here" },
  ]);

  // add item handle submit new items
  const [itemInput, setItemInput] = useState("");
  const handleClick = (index) => {
    setNewList([...NewList, { NewList: itemInput }]);
    setItemInput("");
    console.log(NewList);
  };

  return (
    <div>
      <h1>A List</h1>
      <div>
        {MainList.map((items, index) => (
          <div key={index}>
            <p>
              {items.item1}
              {items.item2}
              {items.item3}
              <button onClick={handleClick}>Click</button>
            </p>
          </div>
        ))}
      </div>

      <h2>New List</h2>
      <div>
        {NewList.map((NewList, index) => (
          <div key={index}>
            <li>
              {NewList.item1}
              {NewList.item2}
              {NewList.item3}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OllyAdd;
