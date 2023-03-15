import { useState } from "react";

const initialFormValues = { text: "" };

// remove formValues, use addTodo in order to formvalues
function Form({ addTodo, todolist }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // useCallback
  const onSubmit = (e) => {
    e.preventDefault();

    if (formValues.text === "") {
      return false;
    }

    addTodo([...todolist, { id: todolist.length + 1, ...formValues }]);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="text"
          placeholder="Enter a text"
          value={formValues.text}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
