import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../AxiosWithAuth.js";

const EditHowTo = (props) => {
  console.log(props.location);
  const [post, setPost] = useState({
    user_id: Number(localStorage.getItem("user_id")),
    name: "",
    description: ""
  });
  useEffect(() => {
    setPost(props.location.updateProps);
  }, [props.location.updateProps]);

  const update = (e) => {
    e.preventDefault();

    console.log(
      "Updating Post with ID " + post.id + " with data ",
      JSON.stringify(post)
    );

    axiosWithAuth()
      .put("/howto" + post.id, JSON.stringify(post))
      .then((res) => {
        alert("Sucessfully Updated Post");
        props.history.push("/howto");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={update}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={post.name}
          onChange={handleChange}
        />
        <label>: </label>
        <input
          type="text"
          name="description"
          value={post.description}
          onChange={handleChange}
        />

        <button>Update Friend</button>
      </form>
    </div>
  );
};

export default EditHowTo;
