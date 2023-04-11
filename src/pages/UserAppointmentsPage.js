import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet-async";

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

function UserAppointmentsPage() {
  const [AppointmentsList, SetAppointmentsList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [seletectedDoctorId, setSeletectedDoctorId] = useState(null);

  const getMyAppointments = async () => {
    var token = localStorage.getItem("checking");
    if (token) {
      const decodedToken = jwtDecode(token);
      // const { id } = decodedToken;
      // setUserId(decodedToken.user.id);
      await fetch(
        `http://localhost:5000/api/appointment/getUserAppointments/${decodedToken.user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          SetAppointmentsList(data);
          console.log(data);
        });
    }
  };

  //   const handleDelete = async () => {
  //     const response = await fetch(
  //       `http://localhost:5000/api/doctor/makeInctive/${seletectedDoctorId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     getAllDoctors();
  //     handleClose();
  //   };

  useEffect(() => {
    getMyAppointments();
  }, []);
  return (
    <>
      <Helmet>
        <title> Appointments </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            My Appointments
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Attendent</TableCell>
                    {/* <TableCell align="right">Email</TableCell> */}
                    <TableCell align="right">Patient</TableCell>
                    <TableCell align="right">Doctor</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Time</TableCell>

                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {AppointmentsList.map((appointment) => {
                    return (
                      <TableRow hover key={appointment.AppointmentId}>
                        <TableCell>
                          {appointment.AppointmentAttendent}
                        </TableCell>
                        {/* <TableCell align="right">{doctor.email}</TableCell> */}
                        <TableCell align="right">
                          {appointment.patientName}
                        </TableCell>
                        <TableCell align="right">
                          {appointment.AppointmentDoctor.name}
                        </TableCell>
                        <TableCell align="right">
                          {appointment.AppointmentScheduleDate.substring(0, 10)}
                        </TableCell>
                        <TableCell align="right">
                          {appointment.AppointmentScheduleTime}
                        </TableCell>
                        <TableCell align="right">
                          <Label
                            color={
                              (appointment.AppointmentCaseStatus === "Cancel" &&
                                "error") ||
                              "success"
                            }
                          >
                            {appointment.AppointmentCaseStatus}
                          </Label>
                        </TableCell>
                        <TableCell align="right">
                        <IconButton >
                            <Link to={`/userDashboard/editAppt/${appointment.AppointmentId}`}>
                            <EditIcon style={{ color: "grey" }}></EditIcon>
                            </Link>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              handleOpen();
                            }}
                          >
                            <DeleteIcon></DeleteIcon>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>

      {/* ///////////////////////////// */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Delete Doctor!!!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Are you sure. This Doctor is Inactive?
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Button onClick={handleClose}>Make Inactive</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default UserAppointmentsPage;
