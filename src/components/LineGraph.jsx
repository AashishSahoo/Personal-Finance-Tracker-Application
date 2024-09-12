import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { Typography } from "@mui/material";

// Helper function to get the last three months
const getLastThreeMonths = () => {
  const months = [];
  const now = new Date();
  for (let i = 2; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    months.push(`${month}-${year}`);
  }
  return months;
};

export default function LineGraph() {
  const [type, setType] = React.useState("bar");

  // Retrieve income and expense data from Redux store
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  // Calculate the last three months
  const months = getLastThreeMonths();

  // Aggregate income and expenses by month
  const data = months.map((month) => {
    const totalIncome = income
      .filter((item) => item.date.includes(month))
      .reduce(
        (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
        0
      );

    const totalExpense = expense
      .filter((item) => item.date.includes(month))
      .reduce(
        (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
        0
      );

    return { month, totalIncome, totalExpense };
  });

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value)}
        label="Choose type"
        sx={{ minWidth: 150, mb: 7 }}
      >
        <MenuItem value="line">Line Graph</MenuItem>
        <MenuItem value="bar">Bar Graph</MenuItem>
      </TextField>
      <Typography sx={{ ml: 52 }}> Amount vs Month</Typography>

      <div>
        <ResponsiveContainer height={400}>
          {type === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" /> {/* Move Legend to the top */}
              <Line type="monotone" dataKey="totalIncome" stroke="#4CAF50" />
              <Line type="monotone" dataKey="totalExpense" stroke="#FF5733" />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" />
              <Bar dataKey="totalIncome" fill="#4CAF50" />
              <Bar dataKey="totalExpense" fill="#FF5733" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </Box>
  );
}
