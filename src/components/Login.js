import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const signup_img = require("../assets/img/signup_img.jpg");

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "admin"
    ) {
      navigate("/dashboard");
    } else {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();

      console.log(json.authToken);

      if (json.authToken) {
        // Save the auth token and redirect
        const check = json.authToken;
        localStorage.setItem("token", check);
        localStorage.setItem("checking", JSON.stringify(check));

        setError(false);
        navigate("/userDashboard");
      } else {
        //alert("Invalid credentials Login");
        setError(true);
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const theme = createTheme();

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
                Login
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
                  {error && (
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
                        Invalid Credentials!!! Please Use Correct Credentials
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
                    <h3 style={{ color: "#fff" }}>Login</h3>
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
                    <Link className="nav-link" to="/signup">
                      New User? Click to Register
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
};

export default Login;
