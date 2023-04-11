import React, { useEffect, useState } from "react";
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

function DoctorPage() {
  const [DoctorsList, SetDoctorsList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const [seletectedDoctorId, setSeletectedDoctorId] = useState(null);

  const getAllDoctors = async () => {
    await fetch("http://localhost:5000/api/doctor/allDoctorsAdmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        SetDoctorsList(data);
      });
  };

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:5000/api/doctor/makeInctive/${seletectedDoctorId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getAllDoctors();
    handleClose();
  };

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      if (token != "admin") {
        navigate("/login");
        return;
      }
    } else {
      navigate("/login");
      return;
    }
    getAllDoctors();
  }, []);
  return (
    <>
      <Helmet>
        <title> Doctors </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            My Doctors
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Gender</TableCell>
                    <TableCell align="right">Licence No.</TableCell>
                    <TableCell align="right">Experience</TableCell>

                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DoctorsList.map((doctor) => {
                    return (
                      <TableRow hover key={doctor._id}>
                        <TableCell>{doctor.name}</TableCell>
                        <TableCell align="right">{doctor.email}</TableCell>
                        <TableCell align="right">{doctor.phone}</TableCell>
                        <TableCell align="right">{doctor.gender}</TableCell>
                        <TableCell align="right">
                          {doctor.licenceNumber}
                        </TableCell>
                        <TableCell align="right">{doctor.experience}</TableCell>
                        <TableCell align="right">
                          <Label
                            color={
                              (doctor.status === "Inactive" && "error") ||
                              "success"
                            }
                          >
                            {doctor.status}
                          </Label>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <Link to={`/dashboard/editDoctors/${doctor._id}`}>
                              <EditIcon style={{ color: "grey" }}></EditIcon>
                            </Link>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              setSeletectedDoctorId(doctor._id);
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
              <Button onClick={handleDelete}>Make Inactive</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default DoctorPage;
