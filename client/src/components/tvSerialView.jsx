import React from "react";
import { Col, Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_TV_SERIAL, FETCH_ALL } from "../graphql";
import { favoritesVar } from "../graphql/reactiveVariables";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";

function TvSerialView(props) {
  const [deleteTVSerial] = useMutation(DELETE_TV_SERIAL, {
    refetchQueries: [FETCH_ALL],
  });
  const history = useHistory();
  const { id } = useParams();

  const onClickDetail = (id) => {
    history.push(`/tvserial/${id}`);
  };

  const onClickFavorites = () => {
    const favoriteTVSeries = favoritesVar();

    if (
      favoriteTVSeries.find((favoriteTV) => favoriteTV._id === props.tv._id)
    ) {
      toast.error("Already in your favorites!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      favoritesVar([...favoritesVar(), props.tv]);

      toast.success("You have successfully added favorite!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onClickDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteTVSerial({
            variables: {
              deleteTvSerialId: props.tv._id,
            },
          });
          swal("Poof! Your data has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your data is safe!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickUpdate = (id) => {
    history.push(`/edit-tv/${id}`);
  };

  return (
    <Col>
      <ToastContainer />
      <Card style={{ height: "550px" }}>
        <a
          href="#"
          onClick={() => {
            onClickDetail(props.tv._id);
          }}
          key={id}
        >
          <Card.Img
            variant="top"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "center",
            }}
            src={props.tv.poster_path}
          />
        </a>
        <div
          className="text-center"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        >
          <a
            href="#"
            onClick={() => {
              onClickFavorites();
            }}
            key={id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="20"
              fill="red"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </a>
          <a
            href="#"
            onClick={() => {
              onClickUpdate(props.tv._id);
            }}
            key={id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="20"
              fill="gray"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.20.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </a>

          <a
            href="#"
            onClick={() => {
              onClickDelete(props.tv._id);
            }}
            key={id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="20"
              fill="black"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </a>
        </div>
        <Card.Body className="text-center">
          <h4>{props.tv.title}</h4>

          <em>{props.tv.tags.join(", ")}</em>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TvSerialView;
