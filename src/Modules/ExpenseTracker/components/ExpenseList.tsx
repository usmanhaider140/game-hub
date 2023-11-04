import React from "react";
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface PropType {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = (props: PropType) => {
  const { expenses, onDelete } = props;
  return (
    <>
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
          {expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>Rs.{item.amount.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => onDelete(item.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {expenses?.length > 0 && (
            <tr>
              <td>Total</td>
              <td>
                Rs.
                {expenses
                  .reduce((acc, next) => acc + next.amount, 0)
                  .toFixed(2)}
              </td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
