import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import IncomeCard from "../components/IncomeCard";
import ExpenseCard from "../components/ExpenseCard";
import TotalSaving from "../components/TotalSaving";
import CurrencyComponent from "../components/CurrencyComponent";
import Grid2 from "@mui/material/Grid2"; // Adjust import for Grid2
import LineGraph from "../components/LineGraph";
import { useSelector } from "react-redux";

const Home = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const filterCurrentMonthData = (data) => {
    let recentTransaction = null;
    let totalAmount = 0;

    for (let i = 0; i < data.length; i++) {
      const [day, month, year] = data[i].date.split("-").map(Number);

      if (month === currentMonth && year === currentYear) {
        totalAmount += parseInt(data[i].price.replace("₹", ""), 10);
        if (!recentTransaction) {
          recentTransaction = data[i];
        }
      }
    }

    return { totalAmount, recentTransaction };
  };

  const { totalAmount: totalIncome, recentTransaction: recentIncome } =
    filterCurrentMonthData(income);
  const { totalAmount: totalExpense, recentTransaction: recentExpense } =
    filterCurrentMonthData(expense);

  const displayIncome = recentIncome || {
    name: "No Income",
    price: "₹0",
    date: "N/A",
  };
  const displayExpense = recentExpense || {
    name: "No Expense",
    price: "₹0",
    date: "N/A",
  };

  const recentSaving = { amount: totalIncome - totalExpense };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: 2, textAlign: "center", color: "#677698" }}
        >
          Personal Finance Tracker Application
        </Typography>

        {/* Grid layout */}
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <IncomeCard />
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <ExpenseCard />
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <TotalSaving />
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <CurrencyComponent />
          </Grid2>
        </Grid2>

        <Box display="flex" justifyContent="space-between" sx={{ mt: 5 }}>
          <Box sx={{ flexGrow: 1, mr: 2 }}>
            <LineGraph />
          </Box>

          <Box sx={{ minWidth: "300px", ml: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "cursive", fontSize: "2rem", mb: 2 }}
            >
              Recent Entries
            </Typography>

            {/* Recent Income Section */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "cursive" }} variant="subtitle1">
                Recent Income
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {displayIncome.name} - {displayIncome.price}{" "}
              </Typography>
              <Typography sx={{ color: "green" }} variant="body2">
                {displayIncome.date}
              </Typography>
            </Box>

            {/* Recent Expense Section */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "cursive" }} variant="subtitle1">
                Recent Expense
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="body1">
                {displayExpense.name} - {displayExpense.price}{" "}
              </Typography>
              <Typography sx={{ color: "#e43b37" }} variant="body2">
                {displayExpense.date}
              </Typography>
            </Box>

            {/* Savings Section */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "cursive" }} variant="subtitle1">
                Saving of this month
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", textDecoration: "underline" }}
                variant="body1"
              >
                ₹{recentSaving.amount}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
