import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

enum categories {
  "Groceries" = "Groceries",
  "Utilities" = "Utilities",
  "Entertainment" = "Entertainment",
}

const DataSchema = z.object({
  description: z
    .string()
    .min(10, { message: "Description should be above 10 characters" }),
  amount: z.number().min(10, { message: "Amount Should be above 10 Rupees." }),
  category: z.nativeEnum(categories, {
    errorMap: () => ({ message: "Please Select Valid Option." }),
  }),
});

type FormData = z.infer<typeof DataSchema>;

const FormExercise = () => {
  const [data, setData] = useState<FieldValues[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(DataSchema),
  });

  const onSubmit = (data: FieldValues) => {
    setData((prevState) => [...prevState, data]);
  };

  const handleDelete = (description: string) => {
    let newArray = data;
    newArray = newArray.filter((item) => item.description !== description);
    setData([...newArray]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="form-control"
          />
          <p className="mt-1 text-danger small">
            {errors?.description?.message}
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", {
              valueAsNumber: true,
            })}
            type="number"
            id="amount"
            className="form-control"
          />
          <p className="mt-1 text-danger small">{errors?.amount?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="All">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <p className="mt-1 text-danger small">{errors?.category?.message}</p>
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mt-5">
        <h4>Expense List</h4>
        <div className="mb-3">
          <select id="category" className="form-select">
            <option value="All">All Categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.description}>
                <td>{item.description}</td>
                <td>Rs.{item.amount.toFixed(2)}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.description)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {data?.length > 0 && (
              <tr>
                <td>Total</td>
                <td>
                  Rs.
                  {data.reduce((acc, next) => acc + next.amount, 0).toFixed(2)}
                </td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default FormExercise;
