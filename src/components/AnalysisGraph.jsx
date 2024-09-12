import * as React from "react";
import { useSelector } from "react-redux";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AnalysisGraph() {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const data = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, "0");

    const totalIncome = income
      .filter((item) => item.date.includes(`-${month}-2024`))
      .reduce(
        (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
        0
      );

    const totalExpense = expense
      .filter((item) => item.date.includes(`-${month}-2024`))
      .reduce(
        (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
        0
      );

    return { month: i + 1, totalIncome, totalExpense };
  });

  return (
    <Box sx={{ width: "100%" }}>
      <LineChart
        xAxis={[
          {
            data: data.map((item) => item.month),
            label: "Months",
            ticks: Array.from({ length: 12 }, (_, i) => i + 1), // Ensures ticks are 1, 2, 3, ... 12
          },
        ]}
        series={[
          {
            data: data.map((item) => item.totalIncome),

            color: "#68c74f",
          },
          {
            data: data.map((item) => item.totalExpense),

            color: "red",
          },
        ]}
        height={300}
        margin={{ top: 10, bottom: 40 }}
      />

      {/* Custom Legend */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <Box
            sx={{
              width: 19,
              height: 19,
              backgroundColor: "#68c74f",
              display: "inline-block",
              mr: 1,
            }}
          />
          <Typography variant="body1">Total Income</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 19,
              height: 19,
              backgroundColor: "red",
              display: "inline-block",
              mr: 1,
            }}
          />
          <Typography variant="body1">Total Expense</Typography>
        </Box>
      </Box>
    </Box>
  );
}
