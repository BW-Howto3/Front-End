import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../authorization/axiosWithAuth.js";

const EditHowTo = (props) => {
  console.log(props.location);
  const [post, setPost] = useState({ name: "", description: "" });

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
      .put(
        "https://howto-be.herokuapp.com/api/howto" + post.id,
        JSON.stringify(post)
      )
      .then((res) => {
        alert("Sucessfully Updated Post");
        props.history.push("/");
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
        <label>Title: </label>
        <input
          type="text"
          name="name"
          value={post.description}
          onChange={handleChange}
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={post.description}
          onChange={handleChange}
        />

        <button>Update Post</button>
      </form>
    </div>
  );
};

export default EditHowTo;
