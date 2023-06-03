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
      alert("SUCCESS!!!");
      setError({ status: false, message: "" });
      alert("You have been signed up successfully!");
      console.log(json);
      setMsg({
        status: true,
        message: "An Email is sent to your account please verify!!",
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
              backgroundSize: "cover",
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
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h3">
                Sign Up
              </Typography>
              <div className="container pb-200 fs-5">
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ fontSize: "16px" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={onChange}
                      onaria-describedby="emailHelp"
                      style={{
                        fontSize: "14px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ fontSize: "16px" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={onChange}
                      onaria-describedby="emailHelp"
                      autoComplete="email"
                      style={{
                        fontSize: "14px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ fontSize: "16px" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={onChange}
                      onaria-describedby="emailHelp"
                      autoComplete="current-password"
                      style={{
                        fontSize: "14px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  {error.status && (
                    <div className="mb-3">
                      <label
                        htmlFor="errorMessage"
                        className="form-label"
                        style={{
                          fontSize: "16px",
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
                          fontSize: "16px",
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        {msg.message}
                      </label>
                    </div>
                  )}
                  {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <h3 style={{ color: "#fff" }}>Sign Up</h3>
                  </Button>
                  {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid> */}
                  <Typography align="center" component="h1" variant="h6">
                    <Link className="nav-link" to="/login">
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
    </>
  );
}
