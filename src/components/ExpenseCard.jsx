import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useSelector } from "react-redux";

export default function ExpenseCard() {
  const expense = useSelector((state) => state.expense);
  const totalExpense = expense.reduce((total, item) => {
    const amount = parseInt(item.price.replace("₹", ""), 10);
    return total + amount;
  }, 0);

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#f5f3d8" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total Expense
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            ₹{totalExpense}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
