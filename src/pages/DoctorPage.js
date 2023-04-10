import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  TableHead,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";

function DoctorPage() {
  const [DoctorsList, SetDoctorsList] = useState([
    {
      _id: "6431aa1992576b6de023a845",
      name: "Doc",
      email: "doc@gmail.com",
      phone: "+923230147169",
      gender: "Male",
      licenceNumber: "123412",
      experience: "2",
      appointments: ["6431b12b689738a90b1357b5", "6431b13c689738a90b1357c5"],
      schedules: [],
      __v: 0,
    },
    {
      _id: "6431aab692576b6de023a850",
      name: "Doc213",
      email: "doc@gmail.comqwe",
      phone: "+923230147169",
      gender: "Male",
      licenceNumber: "12342112312",
      experience: "22",
      appointments: ["6431b108689738a90b135792"],
      schedules: [],
      __v: 0,
    },
    {
      _id: "6431b095689738a90b13576e",
      name: "dactar",
      email: "dactardactar@gmail.com",
      phone: "+923084772308",
      gender: "Female",
      licenceNumber: "213123",
      experience: "23",
      appointments: [],
      schedules: [],
      __v: 0,
    },
  ]);

  const getAllDoctors = async () => {
    await fetch("http://localhost:5000/api/doctor/all", {
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

  useEffect(() => {
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
                        <TableCell align="right">{doctor.status}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              console.log("EDIT" + doctor._id);
                            }}
                          >
                            <EditIcon></EditIcon>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              console.log("DELETEEEEEEEEE" + doctor._id);
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
    </>
  );
}

export default DoctorPage;
