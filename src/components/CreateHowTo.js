import React, { useState } from "react";
import { connect } from "react-redux";
import { createHowTo } from "../actions";

const CreateHowTo = (props) => {
  const [post, setPost] = useState({
    user_id: localStorage.getItem("user_id"),
    name: "",
    description: ""
  });

  const create = (e) => {
    e.preventDefault();
    props.createHowTo(post);
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={create}>
        <label>Title: </label>
        <input
          type="text"
          name="name"
          value={post.name}
          onChange={handleChange}
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={post.description}
          onChange={handleChange}
        />

        <button>Create Post</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { createHowTo })(CreateHowTo);
