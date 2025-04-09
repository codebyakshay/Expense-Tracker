import axios from "axios";

const BASE_URL =
  "https://react-native-course-c8ed0-default-rtdb.asia-southeast1.firebasedatabase.app";

const END_POINT = "/expense.json";

export async function storeExpense(expenseData) {
  const response = await axios.post(BASE_URL + END_POINT, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(BASE_URL + END_POINT);
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpenses(id, expenseData) {
  return axios.put(BASE_URL + `/expense/${id}.json`, expenseData);
}

export function deleteExpenses(id) {
  return axios.delete(BASE_URL + `/expense/${id}.json`);
}
