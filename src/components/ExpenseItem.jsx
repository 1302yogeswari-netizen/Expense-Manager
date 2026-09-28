import { useState } from "react";

function ExpenseItem({ expense, expenses, setExpenses }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);

  const handleDelete = () => {
    const updatedExpenses = expenses.filter(
      (item) => item.id !== expense.id
    );

    setExpenses(updatedExpenses);
  };

  const handleSave = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    const updatedExpenses = expenses.map((item) =>
      item.id === expense.id
        ? {
            ...item,
            title,
            amount: Number(amount),
            category,
            date
          }
        : item
    );

    setExpenses(updatedExpenses);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="expense-card">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleSave}>Save</button>

        <button onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="expense-card">
      <div>
        <h3>{expense.title}</h3>
        <p>₹{expense.amount}</p>
        <p>{expense.category}</p>
        <p>{expense.date}</p>
      </div>

      <div className="expense-actions">
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;