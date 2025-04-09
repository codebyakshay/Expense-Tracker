import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector, useDispatch } from "react-redux";
import { getDateMinusDays } from "../utils/date";
import { useEffect, useState } from "react";
import { fetchExpense } from "../utils/http";
import { setExpenses } from "../redux/features/ExpenseSlice";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const allExpense = useSelector((state) => state.expense);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);

      try {
        const expenses = await fetchExpense();
        dispatch(setExpenses(expenses));
      } catch (err) {
        setError("Could not fetch expenses");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorOverlayHandler() {
    setError();
  }

  if (error && !isFetching)
    <ErrorOverlay message={error} onConfirm={errorOverlayHandler} />;

  if (isFetching) {
    return <LoadingOverlay />;
  }
  const sevenDaysAgo = getDateMinusDays(new Date(), 7);
  const recentExpenses = allExpense.filter((expense) => {
    return new Date(expense.date) >= sevenDaysAgo;
  });

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 Days"}
      expenses={recentExpenses}
      fallbackText={"*No recent expenses Yet"}
    />
  );
}
