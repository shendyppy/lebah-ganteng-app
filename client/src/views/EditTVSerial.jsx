import React, { useState, useEffect } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import { TagsInput } from "react-tag-input-component";
import { PUT_TV_SERIAL, FETCH_TV_SERIAL, FETCH_ALL } from "../graphql";
import "react-toastify/dist/ReactToastify.css";

function EditTVSerial() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(FETCH_TV_SERIAL, {
    variables: { tvSerialId: id },
  });

  const [putTVSerial] = useMutation(PUT_TV_SERIAL, {
    refetchQueries: [FETCH_ALL],
  });

  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [poster_path, setPoster] = useState("");
  const [popularity, setPopularity] = useState(0);
  const [tags, setTags] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setTitle(data?.tvSerial?.title);
    setOverview(data?.tvSerial?.overview);
    setPoster(data?.tvSerial?.poster_path);
    setPopularity(data?.tvSerial?.popularity);
    setTags(data?.tvSerial?.tags);
  }, [data]);

  if (loading) {
    return (
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_qj8z8rwa.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    );
  }

  if (error) {
    return (
      <lottie-player
        src="https://assets3.lottiefiles.com/private_files/lf30_3scgfuxp.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    );
  }

  const forTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const forOverview = (e) => {
    e.preventDefault();
    setOverview(e.target.value);
  };
  const forPoster = (e) => {
    e.preventDefault();
    setPoster(e.target.value);
  };
  const forPopularity = (e) => {
    e.preventDefault();
    setPopularity(e.target.value);
  };

  const handlePutTVSerial = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      overview === "" ||
      poster_path === "" ||
      popularity === "" ||
      tags === ""
    ) {
      return toast.error("Please fill all the field!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (popularity < 0) {
      return toast.error("Popularity can't be minus", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (popularity > 10) {
      return toast.error("Popularity can't be more than 10", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      putTVSerial({
        variables: {
          putTvSerialId: id,
          putTvSerialPayload: {
            title,
            overview,
            poster_path,
            popularity: +popularity,
            tags,
          },
        },
      });
      history.push("/");
    }
  };

  return (
    <Container
      className="min-h-screen"
      style={{
        minHeight: "1000px",
        marginTop: "2%",
        width: "100%",
      }}
    >
      <ToastContainer />
      <Card style={{ marginTop: "2%" }}>
        <h4 style={{ marginTop: "2%", marginLeft: "2%" }}>Edit TV Serial</h4>
        <Form style={{ margin: "2%" }} onSubmit={handlePutTVSerial}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={forTitle}
              value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Overview</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Overview"
              onChange={forOverview}
              value={overview}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Poster</Form.Label>
            <Form.Control
              type="text"
              placeholder="Poster"
              onChange={forPoster}
              value={poster_path}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Popularity</Form.Label>
            <Form.Control
              type="number"
              placeholder="1 - 10"
              onChange={forPopularity}
              value={popularity}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>

            <TagsInput
              value={data?.tvSerial?.tags}
              onChange={setTags}
              name="tags"
              placeHolder="Tags"
              separators="Tabs"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "1%", width: "100%" }}
          >
            Edit TV Serial
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default EditTVSerial;
