import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useSelector } from "react-redux";

export default function TotalSaving() {
  const expense = useSelector((state) => state.expense);
  const totalExpense = expense.reduce((total, item) => {
    const amount = parseInt(item.price.replace("₹", ""), 10);
    return total + amount;
  }, 0);

  const income = useSelector((state) => state.income);
  const totalIncome = income.reduce((total, item) => {
    const amount = parseInt(item.price.replace("₹", ""), 10);
    return amount + total;
  }, 0);

  var totalSaving = totalIncome - totalExpense;

  return (
    <Box width={"100%"}>
      <Card sx={{ backgroundColor: "#ce83bb" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Total Saving
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              ₹{totalSaving}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
