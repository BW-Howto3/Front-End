import React, { useState, useEffect } from "react";
import axios from "axios";
import HowToCard from "./HowToCard";
import { connect } from "react-redux";

import { axiosWithAuth } from "../AxiosWithAuth.js";
import { Link } from "react-router-dom";

const HowToList = (props) => {
  const [post, setPost] = useState({});

  const [howTo, sethowTo] = useState([]);

  useEffect(() => {
    setPost(props.post);
  }, [props.post]);

  useEffect(() => {
    axios
      .get("https://howto-be.herokuapp.com/api/howto")
      .then((response) => {
        console.log(response);
        sethowTo(response.data);
      })
      .catch((error) => console.log("failed to load", error));
  }, []);

  function Delete() {
    axiosWithAuth()
      .delete(`/howto/${post.id}`)
      .then((res) => alert("Deleted Post"))
      .catch((err) => alert("Error Deleting Post"))
      .finally(() => window.location.reload());
  }

  return (
    <div>
      {howTo.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button onClick={Delete}>Delete</button>
            <Link to={{ pathname: "/EditHowTo", updateProps: { ...post } }}>
              Update Post
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLocation: state.isLocation,
    user: state.user,
    error: state.error,
    array: state.array
  };
};

export default connect(mapStateToProps, {})(HowToList);
