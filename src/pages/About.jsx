import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

import NavBar from "../components/Navbar";

const About = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box
        component="main"
        maxWidth="md"
        sx={{ mt: 8, mb: 4, flexGrow: 1, p: 3 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          About Expense Tracker
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Welcome to Expense Tracker
        </Typography>
        <Typography variant="body1">
          Expense Tracker is a simple and intuitive application designed to help
          you manage and track your personal finances. With our app, you can
          easily add, categorize, and monitor your income and expenses, giving
          you a clear overview of your financial situation.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Key Features:
        </Typography>
        <Box sx={{ ml: 2 }}>
          <Typography variant="body1">
            - <strong>Track Expenses:</strong> Record and categorize your daily
            expenses to keep track of where your money goes.
          </Typography>

          <Typography variant="body1">
            - <strong>Analyze Spending:</strong> Visualize your spending
            patterns with insightful charts and reports.
          </Typography>
          <Typography variant="body1">
            - <strong>User-Friendly Interface:</strong> Enjoy a clean, intuitive
            design that makes managing your finances easy and efficient.
          </Typography>
        </Box>
        <Box sx={{ mt: 4, borderTop: "1px solid #ccc", pt: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            About the Developer
          </Typography>
          <Typography variant="body1">
            This application was developed by Ashish Sahoo
          </Typography>

          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Expense Tracker. All rights
            reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Contact us:
            <Link href="ashishsahoo0013@gmail.com" sx={{ ml: 1 }}>
              ashishsahoo0013@gmail.com
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            LinkedIn:
            <Link
              href="www.linkedin.com/in/ashishsahoo899"
              target="_blank"
              rel="noopener"
              sx={{ ml: 1 }}
            >
              My LinkedIn Profile
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            GitHub:
            <Link
              href="https://github.com/AashishSahoo/Personal-Finance-Tracker-Application"
              target="_blank"
              rel="noopener"
              sx={{ ml: 1 }}
            >
              GitHub Repo
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
