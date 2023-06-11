import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
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
import {getPatients, getDoctorPatients} from '../services/api'
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

function DoctorAppointmentsPage(id) {
     const [PatientsList, SetPatientsList] = useState([]);
     const getPatientsList = async () => {
      let response = await getDoctorPatients(id);
      //let response = await getPatients();
      SetPatientsList(response.data);
      console.log( response.data);
      
      console.log("hellosdkjfhks");

    };
    useEffect(() => {
      var token = localStorage.getItem("checking");
      var id;
      if (token) {
        const decodedToken = jwtDecode(token);
         id  = decodedToken.user.id;
         console.log(id);
      }
      getPatientsList(id);
    }, []);
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
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Patient ID</TableCell>
                    <TableCell align="right">Patient Name</TableCell>
                    <TableCell align="right">patient Type</TableCell>
                    <TableCell align="right">gender</TableCell>
                    <TableCell align="right">breed</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {PatientsList.map((patient) => {
                    return (
                      <TableRow hover key={patient._id}>
                        <TableCell>{patient._id}</TableCell>
                        <TableCell align="right">{patient.name}</TableCell>
                        <TableCell align="right">{patient.animalType}</TableCell>
                        <TableCell align="right">{patient.gender}</TableCell>
                        <TableCell align="right">{patient.breed}</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <Link
                              to={`/doctorDashboard/AddDataPage/${patient._id}`}
                            ><Button style={{ color: "white" , background: "RGB(61, 99, 133)"}}>
                                Add data
                              <AddIcon style={{ color: "white" }}></AddIcon>
                            </Button>
                              
                            </Link>
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
    </>
  );
}

export default DoctorAppointmentsPage;
