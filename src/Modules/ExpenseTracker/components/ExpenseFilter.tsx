import React from "react";

interface PropType {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: PropType) => {
  return (
    <div className="mt-5">
      <h4>Expense List</h4>
      <div className="mb-3">
        <select
          onChange={(e) => onSelectCategory(e.target.value)}
          id="category"
          className="form-select"
        >
          <option value="All">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
