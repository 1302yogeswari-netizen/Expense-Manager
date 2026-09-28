function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="summary">
      <h2>Total Expense</h2>
      <p>₹{total.toFixed(2)}</p>
    </div>
  );
}

export default Summary;