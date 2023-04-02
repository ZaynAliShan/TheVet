const handleDelete = async (id) => {
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

  // const newPatients = patiets.filter((patient) => {
  //   return patient._id !== id;
  // });
  // setNotes(newPatients);

  navigate("/userDashboard");
};
