import React from "react";
import { useSelector } from "react-redux";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function StackedBarChart() {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const categories = Array.from(
    new Set([
      ...income.map((item) => item.category),
      ...expense.map((item) => item.category),
    ])
  );

  const data = categories.map((category) => {
    const totalIncome = income
      .filter((item) => item.category === category)
      .reduce(
        (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
        0
      );

    const totalExpense = expense
      .filter((item) => item.category === category)
      .reduce(
        (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
        0
      );

    return {
      category,
      totalIncome,
      totalExpense,
    };
  });

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <BarChart
        height={500}
        width={1200}
        series={[
          {
            data: data.map((item) => item.totalIncome),
            label: "Total Income",
            id: "incomeId",
            stack: "total",
            color: "#68c74f",
          },
          {
            data: data.map((item) => item.totalExpense),
            label: "Total Expense",
            id: "expenseId",
            stack: "total",
            color: "red",
          },
        ]}
        xAxis={[
          {
            data: data.map((item) => item.category),
            label: "Categories",
            scaleType: "band",
          },
        ]}
        legend={{
          position: "none",
        }}
      />
    </Box>
  );
}
