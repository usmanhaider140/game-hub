import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

enum categories {
  "Groceries" = "Groceries",
  "Utilities" = "Utilities",
  "Entertainment" = "Entertainment",
}

const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50, { message: "Description should be below 50 characters." }),
  amount: z
    .number()
    .min(0.01, { message: "Amount Should be above 0.01 Rupees." })
    .max(100_000, {
      message: "Amount exceeded the limit.",
    }),
  category: z.nativeEnum(categories, {
    errorMap: () => ({ message: "Please Select Valid Option." }),
  }),
});

type ExpenseFormData = z.infer<typeof Schema>;

type PropType = {
  onSubmit: (data: ExpenseFormData) => void;
};

const ExpenseForm = (props: PropType) => {
  const { onSubmit } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(Schema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
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
    </>
  );
};

export default ExpenseForm;
