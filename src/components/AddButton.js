import React, { useState } from "react";


const AddButton = (props) => {
//   const [, set] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="AddItem-form">
      <button type="submit" className="AddItem-button">Add Item</button>
    </form>
  );
}
 
export default AddButton ;