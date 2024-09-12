import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavBar from "../components/Navbar";
import IncomeList from "../components/IncomeList";

const Income = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <IncomeList />
      </Box>
    </Box>
  );
};

export default Income;
