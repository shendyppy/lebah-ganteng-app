import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { POST_MOVIE, FETCH_ALL, POST_TV_SERIAL } from "../graphql";
import { TagsInput } from "react-tag-input-component";
import { toast } from "react-toastify";

function AddForm(props) {
  const forMovie = props.forMovie;
  const forTV = props.forTV;

  const [postMovie, { loadingMovie, errorMovie }] = useMutation(POST_MOVIE, {
    refetchQueries: [FETCH_ALL],
  });

  const [postTV, { loadingTV, errorTV }] = useMutation(POST_TV_SERIAL, {
    refetchQueries: [FETCH_ALL],
  });

  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [poster_path, setPoster] = useState("");
  const [popularity, setPopularity] = useState(0);
  const [tags, setTags] = useState([]);
  const history = useHistory();

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

  const handlePostMovie = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      overview === "" ||
      poster_path === "" ||
      popularity === "" ||
      tags === ""
    ) {
      toast.error("Please fill your needs!", {
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
      postMovie({
        variables: {
          postMoviePayload: {
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

  const handlePostTV = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      overview === "" ||
      poster_path === "" ||
      popularity === "" ||
      tags === ""
    ) {
      toast.error("Please fill your needs!", {
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
      postTV({
        variables: {
          postTvSerialPayload: {
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

  if (loadingMovie || loadingTV) {
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

  if (errorMovie || errorTV) {
    return <h1>Something went wrong!</h1>;
  }

  if (forMovie) {
    return (
      <Form style={{ margin: "2%" }} onSubmit={handlePostMovie}>
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
            name="tags"
            value={tags}
            onChange={setTags}
            placeHolder="Tags"
            separator="Tabs"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginRight: "1%", width: "100%" }}
        >
          Add Movie
        </Button>
      </Form>
    );
  }

  if (forTV) {
    return (
      <Form style={{ margin: "2%" }} onSubmit={handlePostTV}>
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
            name="tags"
            value={tags}
            onChange={setTags}
            placeHolder="Tags"
            separator="Tabs"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginRight: "1%", width: "100%" }}
        >
          Add TV Serial
        </Button>
      </Form>
    );
  }
}

export default AddForm;
