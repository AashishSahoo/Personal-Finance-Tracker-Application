import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CurrencyComponent = () => {
  const getPresentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  const [dollarValue, setDollarValue] = useState("");
  const [euroValue, setEuroValue] = useState("");
  const [rupeeValue, setRupeeValue] = useState("");

  async function getCurrency() {
    const urlUSD = "https://api.frankfurter.app/latest?from=USD&to=INR";
    const urlEUP = "https://api.frankfurter.app/latest?from=EUR&to=INR";

    try {
      const responseUSD = await fetch(urlUSD);
      const resultUSD = await responseUSD.json();

      setRupeeValue(resultUSD.amount);
      setDollarValue(resultUSD.rates.INR);

      const responseEup = await fetch(urlEUP);
      const resultEup = await responseEup.json();
      setEuroValue(resultEup.rates.INR);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#a564dc" }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>
            Exchange Rate : {getPresentDate()}
          </Typography>
          <Typography>
            ${rupeeValue} USD ⇌ ₹{dollarValue}
          </Typography>
          <Typography>
            €{rupeeValue} EUR ⇌ ₹{euroValue}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CurrencyComponent;

// API Key f83d04ca27e97fa407968002
// https://v6.exchangerate-api.com/f83d04ca27e97fa407968002/latest/USD
//
