import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const ExpenseTracker = () => {
  const [expenses, setExpense] = useState([
    {
      id: 1,
      description: "Gas",
      category: "Utilities",
      amount: 10,
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleDelete = (id: number) => {
    let newArray = expenses;
    newArray = newArray.filter((item) => item.id !== id);
    setExpense([...newArray]);
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const visibleExpenses =
    selectedCategory !== "All"
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(data) =>
          setExpense((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 10000), ...data },
          ])
        }
      />
      <ExpenseFilter onSelectCategory={handleCategory} />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default ExpenseTracker;
