import { useState } from 'react'

const initialFormValues = { text: "" };
function Form({ addTodo, todolist }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.text === '') {
            return false;
        }

        addTodo([...todolist, form]);

        setForm(initialFormValues);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="text"
                    placeholder="Enter a text"
                    value={form.text}
                    onChange={onChangeInput}
                />
            </div>
            <div className="btn">
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form