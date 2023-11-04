import React, { ChangeEvent, FormEvent, useState } from "react";
type FormType = {
  id: number;
  description: string;
  amount: number;
  category: string;
};
const FormExercise = () => {
  const [form, setForm] = useState<FormType>({
    id: 1,
    description: "",
    amount: 0,
    category: "",
  });
  const [options] = useState(["Groceries", "Entertainment", "Utilities"]);
  const [List, setList] = useState<FormType[]>([]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.description || !form.amount || form.category === "") return;
    setList((List) => {
      return [...List, form];
    });
    setForm((form) => ({
      id: form.id + 1,
      description: "",
      amount: 0,
      category: "",
    }));
  };

  const handleDelete = (id: number) => {
    const newList = List.filter((item) => item.id !== id);
    setList(() => newList);
  };

  return (
    <div className="px-4">
      <h1>Form Exercise</h1>
      <form>
        <label htmlFor="description" className="form-label">
          Description{" "}
        </label>
        <input
          type="text"
          name="description"
          className="form-control"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="amount" className="form-label">
          Amount{" "}
        </label>
        <input
          type="text"
          name="amount"
          className="form-control"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="category" className="form-label">
          Category{" "}
        </label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          className="form-select"
        >
          {options.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          <option value="Categories">Categories</option>
        </select>
        <button
          className="btn btn-primary my-2 ms-auto d-block"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {List.length ? (
            List.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>There is noting to show</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FormExercise;
