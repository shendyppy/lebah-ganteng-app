import React from "react";
import { Card, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddForm from "../components/AddForm";

function AddMovie() {
  const forMovie = true;

  return (
    <Container
      className="min-h-screen"
      style={{
        minHeight: "1000px",
        marginTop: "2%",
        width: "100%",
      }}
    >
      <Card style={{ marginTop: "2%" }}>
        <ToastContainer />
        <h4 style={{ marginTop: "2%", marginLeft: "2%" }}>Add Movie</h4>
        <AddForm forMovie={forMovie} />
      </Card>
    </Container>
  );
}

export default AddMovie;
