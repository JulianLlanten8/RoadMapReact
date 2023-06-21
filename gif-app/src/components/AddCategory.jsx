import { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    inputValue.trim();
    if (inputValue.length < 2) return;
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
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
  setCategories: propTypes.func.isRequired,
};
