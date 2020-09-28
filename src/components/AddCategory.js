import React, { useState } from "react";
import Proptypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputvalue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue.trim().length > 2) {
      setcategories((categories) => [inputvalue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={inputvalue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};
AddCategory.proptypes = {
  setcategories: Proptypes.func.isRequired
};
