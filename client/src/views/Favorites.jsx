import React from "react";
import ReactStars from "react-stars";
import { Container, Row, Col, Card } from "react-bootstrap";
import { favoritesVar } from "../graphql/reactiveVariables";

function Favorites() {
  if (favoritesVar().length === 0) {
    return (
      <Container
        className="min-h-screen"
        style={{
          minHeight: "1000px",
          width: "100%",
        }}
      >
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_scgyykem.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%", marginTop: "-20%" }}
          loop
          autoplay
        ></lottie-player>
      </Container>
    );
  }
  return (
    <Container
      className="min-h-screen"
      style={{
        minHeight: "1000px",
        marginTop: "2%",
        width: "100%",
      }}
    >
      <h1 style={{ marginBottom: "1%", color: "white" }}>Favorites</h1>
      <Row xs={1} md={3} className="g-4">
        {favoritesVar().map((favorite, index) => (
          <Col key={index}>
            <Card
              style={{
                height: "800px",
              }}
            >
              <Card.Img
                variant="top"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "center",
                }}
                src={favorite.poster_path}
              />
              <Card.Body>
                <h4>{favorite.title}</h4>
                <Card.Text>
                  <ReactStars
                    count={10}
                    edit={false}
                    size={24}
                    color1={"gray"}
                    color2={"black"}
                    value={favorite.popularity}
                    style={{ marginLeft: "50%" }}
                  />
                  <em style={{ fontSize: 18 }}>
                    IMDB: {favorite.popularity}/10
                  </em>
                </Card.Text>

                <Card.Text>
                  <em>{favorite.overview}</em>
                </Card.Text>
                <em style={{ fontSize: 18, marginTop: "-1%" }}>
                  {favorite.tags.join(", ")}
                </em>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Favorites;
