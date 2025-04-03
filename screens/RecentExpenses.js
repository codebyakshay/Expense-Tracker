import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpenses() {
  const allExpense = useSelector((state) => state.expense);

  const sevenDaysAgo = getDateMinusDays(new Date(), 7);
  const recentExpenses = allExpense.filter((expense) => {
    return new Date(expense.date) >= sevenDaysAgo;
  });

  return (
    <ExpensesOutput expensesPeriod={"Last 7 Days"} expenses={recentExpenses} />
  );
}
