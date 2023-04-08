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

function PatientPage() {
  const [PatientsList, SetPatientsList] = useState([]);

  const getAllPatients = async () => {
    await fetch("http://localhost:5000/api/patient/getMyAllPatients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        SetPatientsList(data);
      });
  };

  const DeletePatient = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/patient/deletePatient/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    var newList = PatientsList.filter((patient) => {
      return patient._id != id;
    });
    SetPatientsList(newList);
  };

  useEffect(() => {
    getAllPatients();
  }, []);
  return (
    <>
      <Helmet>
        <title> Patients </title>
      </Helmet>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Patients
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Animal Type</TableCell>
                    <TableCell align="right">Breed</TableCell>
                    <TableCell align="right">Gender</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PatientsList.map((patient) => {
                    return (
                      <TableRow hover key={patient._id}>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell align="right">
                          {patient.animalType}
                        </TableCell>
                        <TableCell align="right">{patient.breed}</TableCell>
                        <TableCell align="right">{patient.gender}</TableCell>
                        <TableCell align="right">{patient.age}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              console.log("EDIT" + patient._id);
                            }}
                          >
                            <EditIcon></EditIcon>
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              DeletePatient(patient._id);
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

export default PatientPage;
