import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const signup_img = require("../assets/img/signup_img.jpg");

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <h5>
        Copyright ©{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://github.com/ZaynAliShan/TheVet"
        >
          The Vet
        </a>{" "}
        {new Date().getFullYear()}.
      </h5>
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  // Code to manage Functionality of Signup functions
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState({ status: false, message: "" });
  const [msg, setMsg] = useState({ status: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    if (email == "admin@gmail.com") {
      setError({ status: true, message: "Email Already Exists!!!" });
      setMsg({
        status: false,
        message: "",
      });
      return;
    }
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      setError({ status: false, message: "" });
      console.log(json);
      setMsg({
        status: true,
        message: "An Email is sent to your account please verify.",
      });
    } else {
      alert("ERROR");
      console.log(json);
      setMsg({
        status: false,
        message: "",
      });
      setError({ status: true, message: json.error });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
        <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container d-flex justify-content-center align-items-center">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h2">
           Sign Up
        </Typography>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            style={{ backgroundImage: `url(${signup_img})` }}
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ height: "650px" , marginTop:"68px"}} // Adjust to your needs
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar> */}
              {/* <Typography component="h1" variant="h3">
                Sign Up
              </Typography> */}
<div className="container pb-200" style={{ fontSize: "18px" }}>
  <Box
    component="form"
    noValidate
    onSubmit={handleSubmit}
    sx={{ mt: 3 }}
  >
    <div className="mb-4">
      <label
        htmlFor="name"
        className="form-label"
        style={{ fontSize: "18px" }}
      >
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        onChange={onChange}
        aria-describedby="emailHelp"
        style={{
          fontSize: "16px",
          width: "100%",
          height: "auto",
          padding: "10px"
        }}
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="email"
        className="form-label"
        style={{ fontSize: "18px" }}
      >
        Email Address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        onChange={onChange}
        aria-describedby="emailHelp"
        autoComplete="email"
        style={{
          fontSize: "16px",
          width: "100%",
          height: "auto",
          padding: "10px"
        }}
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="password"
        className="form-label"
        style={{ fontSize: "18px" }}
      >
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        name="password"
        onChange={onChange}
        aria-describedby="emailHelp"
        autoComplete="current-password"
        style={{
          fontSize: "16px",
          width: "100%",
          height: "auto",
          padding: "10px"
        }}
      />
    </div>
    {error.status && (
      <div className="mb-3">
        <label
          htmlFor="errorMessage"
          className="form-label"
          style={{
            fontSize: "18px",
            color: "red",
            fontWeight: "bold",
          }}
        >
          {error.message}
        </label>
      </div>
    )}
    {msg.status && (
      <div className="mb-3">
        <label
          htmlFor="emailMessage"
          className="form-label"
          style={{
            fontSize: "18px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          {msg.message}
        </label>
      </div>
    )}
    <Button
      type="submit"
      fullWidth
      variant="contained"
      size="large"
      sx={{ mt: 3, mb: 2 }}
    >
      <h3 style={{ color: "#fff", fontSize: "20px" }}>Sign Up</h3>
    </Button>
    <Typography align="center" component="h1" variant="h6">
      <Link className="nav-link" to="/login" style={{ fontSize: "18px" }}>
        Already Have an Account? Click to Login
      </Link>
    </Typography>
    <Copyright sx={{ mt: 5 }} />
  </Box>
</div>

            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
}
