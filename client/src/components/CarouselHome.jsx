import React from "react";
import ReactStars from "react-stars";
import { Container, Card, Row, Col } from "react-bootstrap";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function CarouselHome(props) {
  const bestMovies = props.bestMovies;
  const bestTvSeries = props.bestTvSeries;

  const isHome = props.isHome;
  const isMovies = props.isMovies;
  const isTVSeries = props.isTVSeries;

  if (isHome) {
    return (
      <Carousel plugins={["arrows"]}>
        <Card style={{ marginTop: "1%" }}>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestMovies[0].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestMovies[0].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>{bestMovies[0].overview}</em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestMovies[0].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestMovies[0].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestMovies[0].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 2 in Our Movie Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
        <Card>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestTvSeries[0].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestTvSeries[0].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[0].overview}
                      </em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestTvSeries[0].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestTvSeries[0].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[0].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 1 with three others TV Series in Our TV Series
                        Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
        <Card>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestTvSeries[2].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestTvSeries[2].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[2].overview}
                      </em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestTvSeries[2].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestTvSeries[2].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[2].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 2 in Our TV Series Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
      </Carousel>
    );
  }

  if (isTVSeries) {
    return (
      <Carousel plugins={["arrows"]}>
        <Card style={{ marginTop: "1%" }}>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestTvSeries[0].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestTvSeries[0].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[0].overview}
                      </em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestTvSeries[0].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestTvSeries[0].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[0].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 1 with three others TV Series in Our TV Series
                        Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
        <Card>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestTvSeries[1].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestTvSeries[1].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[1].overview}
                      </em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestTvSeries[1].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestTvSeries[1].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[1].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 1 with three others TV Series in Our TV Series
                        Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
        <Card>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestTvSeries[3].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestTvSeries[3].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[3].overview}
                      </em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestTvSeries[3].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestTvSeries[3].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestTvSeries[3].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 1 with three others TV Series in Our TV Series
                        Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
      </Carousel>
    );
  }

  if (isMovies) {
    return (
      <Carousel plugins={["arrows"]}>
        <Card style={{ marginTop: "1%" }}>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestMovies[1].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestMovies[1].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>{bestMovies[1].overview}</em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestMovies[1].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestMovies[1].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestMovies[1].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 1 in Our Movie Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
        <Card>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestMovies[0].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestMovies[0].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>{bestMovies[0].overview}</em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestMovies[0].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestMovies[0].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestMovies[0].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 3 in Our Movie Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
        <Card>
          <Container
            className="min-h-screen"
            style={{
              marginTop: "1%",
              marginBottom: "1%",
              width: "100%",
            }}
          >
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "80%",
                        height: "570px",
                        objectFit: "center",
                      }}
                      src={bestMovies[2].poster_path}
                    />
                  </Col>
                  <Col>
                    <h1 style={{ marginBottom: "5%", color: "black" }}>
                      {bestMovies[2].title}
                    </h1>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Overview:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>{bestMovies[2].overview}</em>
                    </Card.Text>

                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Popularity:</strong>
                      <ReactStars
                        count={10}
                        edit={false}
                        size={24}
                        color1={"gray"}
                        color2={"#ffd700"}
                        value={bestMovies[2].popularity}
                      />
                      <em style={{ fontSize: 20 }}>
                        ({bestMovies[2].popularity}/10) from IMDB
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong style={{ fontSize: 24 }}>Tags:</strong>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 20 }}>
                        {bestMovies[2].tags.join(", ")}
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <em style={{ fontSize: 30, color: "red" }}>
                        Number 2 in Our Movies Chart!
                      </em>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Card>
      </Carousel>
    );
  }
}
export default CarouselHome;
