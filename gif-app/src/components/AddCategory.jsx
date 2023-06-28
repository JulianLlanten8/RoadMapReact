import { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length < 2) return;
    // setCategories((categories) => [newInputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} role="form">
      <input
        type="text"
        name="AddCategory"
        id="newCategory"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  // setCategories: propTypes.func.isRequired,
  onNewCategory: propTypes.func.isRequired,
};
