import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  TableHead,
  Avatar,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DoctorAppointmentsPage() {
  //   const [AppointmentsList, SetAppointmentsList] = useState([]);
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  //   const navigate = useNavigate();

  //   const [seletectedAppointmentId, setSeletectedAppointmentId] = useState(null);

  //   const getMyAppointments = async () => {
  //     var token = localStorage.getItem("checking");
  //     if (token) {
  //       if (token == "admin") {
  //         navigate("/login");
  //         return;
  //       }
  //     } else {
  //       navigate("/login");
  //       return;
  //     }
  //     if (token) {
  //       const decodedToken = jwtDecode(token);
  //       // const { id } = decodedToken;
  //       // setUserId(decodedToken.user.id);
  //       await fetch(
  //         `http://localhost:5000/api/appointment/getUserAppointments/${decodedToken.user.id}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           SetAppointmentsList(data);
  //           console.log(data);
  //         });
  //     }
  //   };

  //   const handleCancelAppointment = async () => {
  //     const response = await fetch(
  //       `http://localhost:5000/api/appointment/cancelAppointment/${seletectedAppointmentId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     getMyAppointments();
  //     handleClose();
  //   };

  //   useEffect(() => {
  //     getMyAppointments();
  //  }, []);
  return (
    <>
      <Helmet>
        <title> Doctor Appointments </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            DOCTOR Appointments
          </Typography>
        </Stack>
      </Container>
    </>
  );
}

export default DoctorAppointmentsPage;
