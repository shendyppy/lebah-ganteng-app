import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FETCH_MOVIE } from "../graphql";
import ReactStars from "react-stars";

function MovieDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FETCH_MOVIE, {
    variables: { movieId: id },
  });

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

  return (
    <Container
      className="min-h-screen"
      style={{
        minHeight: "1000px",
        marginTop: "2%",
        marginLeft: "25%",
        width: "100%",
      }}
    >
      <Card
        style={{
          width: "70%",
          height: "600px",
          maxHeight: "600px",
        }}
      >
        <Card.Body style={{ borderWidth: 50 }}>
          <Row>
            <Col>
              <Card.Img
                variant="top"
                style={{
                  width: "100%",
                  height: "570px",
                  objectFit: "center",
                }}
                src={data?.Movie?.poster_path}
              />
            </Col>
            <Col>
              <h1 style={{ marginBottom: "5%", color: "black" }}>
                {data?.Movie?.title}
              </h1>
              <Card.Text>
                <strong style={{ fontSize: 24 }}>Overview:</strong>
              </Card.Text>
              <Card.Text>
                <em style={{ fontSize: 20 }}>{data?.Movie?.overview}</em>
              </Card.Text>

              <Card.Text>
                <strong style={{ fontSize: 24 }}>Popularity:</strong>
                <ReactStars
                  count={10}
                  edit={false}
                  size={24}
                  color1={"gray"}
                  color2={"#ffd700"}
                  value={data?.Movie?.popularity}
                />
                <em style={{ fontSize: 20 }}>
                  ({data?.Movie?.popularity}/10) from IMDB
                </em>
              </Card.Text>
              <Card.Text>
                <strong style={{ fontSize: 24 }}>Tags:</strong>
              </Card.Text>
              <Card.Text>
                <em style={{ fontSize: 20 }}>{data?.Movie?.tags.join(", ")}</em>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MovieDetail;
