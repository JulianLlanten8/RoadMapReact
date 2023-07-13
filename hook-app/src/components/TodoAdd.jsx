import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";
export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    handleNewTodo && handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="¿Que hay que hacer?"
        className="form-conntrol"
        value={description}
        onChange={onInputChange}
        autoFocus={true}
      />
      <button type="submit" className="btn btn-outline-primary">
        Agreagar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  handleNewTodo: PropTypes.func.isRequired,
};
