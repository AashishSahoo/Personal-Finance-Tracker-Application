import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavBar from "../components/Navbar";
import ExpenseList from "../components/ExpenseList";

const Expense = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ExpenseList />
      </Box>
    </Box>
  );
};

export default Expense;
