import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavigationBar() {
  const history = useHistory();

  const onClickHome = () => {
    history.push(`/`);
  };

  const onClickMovies = () => {
    history.push(`/movies`);
  };

  const onClickTV = () => {
    history.push(`/tvseries`);
  };

  const onClickAddMovie = () => {
    history.push(`/add-movie`);
  };

  const onClickAddTV = () => {
    history.push(`/add-tv`);
  };

  const onClickFavorites = () => {
    history.push(`/favorites`);
  };

  return (
    <Navbar bg="light" variant="light">
      <Container className="justify-content-between">
        <Navbar.Brand
          href=""
          className="btn btn-outline-primary"
          onClick={(e) => {
            e.preventDefault();
            onClickHome();
          }}
        >
          Lebah Ganteng
        </Navbar.Brand>
      </Container>
      <Nav className="me-auto">
        <Nav.Link
          href=""
          className="text-black font-weight-bold"
          style={{ marginTop: "2%" }}
          onClick={(e) => {
            e.preventDefault();
            onClickHome();
          }}
        >
          Home
        </Nav.Link>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Creating"
          menuVariant="dark"
          style={{ marginTop: "2%" }}
        >
          <NavDropdown.Item>
            <Nav.Link
              href=""
              className="text-black font-weight-bold"
              style={{ marginTop: "2%" }}
              onClick={(e) => {
                e.preventDefault();
                onClickAddMovie();
              }}
            >
              Add Movie
            </Nav.Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Nav.Link
              href=""
              className="text-black font-weight-bold"
              style={{ marginTop: "2%" }}
              onClick={(e) => {
                e.preventDefault();
                onClickAddTV();
              }}
            >
              Add TV Serial
            </Nav.Link>
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Finding"
          menuVariant="dark"
          style={{ marginTop: "2%" }}
        >
          <NavDropdown.Item>
            <Nav.Link
              href=""
              className="text-black font-weight-bold"
              style={{ marginTop: "2%" }}
              onClick={(e) => {
                e.preventDefault();
                onClickMovies();
              }}
            >
              Movies
            </Nav.Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Nav.Link
              href=""
              className="text-black font-weight-bold"
              style={{ marginTop: "2%" }}
              onClick={(e) => {
                e.preventDefault();
                onClickTV();
              }}
            >
              TV Series
            </Nav.Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          href=""
          className="text-black font-weight-bold"
          style={{ marginTop: "2%" }}
          onClick={(e) => {
            e.preventDefault();
            onClickFavorites();
          }}
        >
          Favorites
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
