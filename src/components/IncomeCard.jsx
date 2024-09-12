import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

//   const income = useSelector((state) => state.income);

export default function IncomeCard() {
  const income = useSelector((state) => state.income);
  const totalIncome = income.reduce((total, item) => {
    const amount = parseInt(item.price.replace("₹", ""), 10);
    return amount + total;
  }, 0);

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ffb498" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total Income
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            ₹{totalIncome}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
