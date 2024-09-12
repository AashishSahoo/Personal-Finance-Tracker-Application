import React from "react";
import NavBar from "../components/Navbar";
import Box from "@mui/material/Box";
import AnalysisGraph from "../components/AnalysisGraph";
import StackedBarChart from "../components/StackedBarChart";

import { Typography } from "@mui/material";

const Analysis = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3 }}>
        <Box component="main" sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">Analysis</Typography>
          <Typography variant="h6" sx={{ mb: 5, mt: 2 }}>
            Over all history
          </Typography>
          <Typography></Typography>
          <Box sx={{ width: "100%", mb: 5 }}>
            <AnalysisGraph />
          </Box>
          <Box sx={{ width: "100%", mb: 5 }}>
            <Typography variant="h6">
              Category wise distribution of Income and Expense
            </Typography>
            <StackedBarChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Analysis;
