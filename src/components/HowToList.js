import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../AxiosWithAuth.js";
import { Link } from "react-router-dom";

const HowToList = (props) => {
  const [post, setPost] = useState({});

  const [howTo, sethowTo] = useState([]);

  useEffect(() => {
    setPost(props.post);
  }, [props.post]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/howto`)
      .then((res) => sethowTo(res.data));
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

export default HowToList;
