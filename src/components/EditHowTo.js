import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../AxiosWithAuth.js";
import { connect } from "react-redux";
import { editHowTo } from "../actions";

const EditHowTo = (props) => {
  console.log(props.location);
  const [post, setPost] = useState({
    user_id: Number(localStorage.getItem("user_id")),
    name: "",
    description: ""
  });

  useEffect(() => {
    setPost(
      props.howtos.find((post) => post.id === props.location.updateProps)
    );
  }, [props.location.updateProps]);

  const update = (e) => {
    e.preventDefault();
    props.editHowTo({ ...post, id: props.location.updateProps });
    props.history.push("/howto");
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };
  console.log("EDITHOWTO", post);
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

        <button>Update Post</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    howtos: state.howtos
  };
};

export default connect(mapStateToProps, { editHowTo })(EditHowTo);
