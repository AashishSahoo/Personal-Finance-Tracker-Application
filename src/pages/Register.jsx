import {
  Button,
  Stack,
  TextField,
  Typography,
  ThemeProvider,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/authSlice";
import { lightTheme, darkTheme } from "../theme";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(register({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      alert("Registered successfully!");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <form
        onSubmit={handleRegister}
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
          color: "text.primary",
          padding: "0 16px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            color: isDarkMode ? "#3EB489" : "#000",
            fontWeight: "bold",
          }}
        >
          Personal Finance Tracker Application
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 2,
            color: isDarkMode ? "#3EB489" : "#000",
          }}
        >
          Register
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 400, width: "100%", padding: 2 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: isDarkMode ? "#2E8565" : "#3EB489",
              color: "text.primary",
            }}
          >
            Register
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              href="/login"
              color="inherit"
              sx={{
                textDecoration: "none",
                color: isDarkMode ? "#2E8565" : "#3EB489",
              }}
            >
              Login
            </Link>
          </Typography>
          <Typography
            sx={{ textAlign: "center", cursor: "pointer" }}
            onClick={toggleTheme}
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Typography>
        </Stack>
      </form>
    </ThemeProvider>
  );
};

export default Register;
