import React, { useState, useEffect } from "react";
import axios from "axios";
import HowToCard from "./HowToCard";
import { connect } from "react-redux";
import { fetchHowTo, deleteHowTo } from "../actions";

import { axiosWithAuth } from "../AxiosWithAuth.js";
import { Link } from "react-router-dom";

const HowToList = (props) => {
  useEffect(() => {
    props.fetchHowTo();
  }, []);

  function Delete(id) {
    axiosWithAuth()
      .delete(`/howto/${id}`)
      .then((res) => console.log(res, "res"))
      .catch((err) => alert("Error Deleting Post"));
  }

  return (
    <div>
      {props.howtos.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button onClick={() => props.deleteHowTo(item.id)}>Delete</button>
            <Link to={{ pathname: "/update", updateProps: item.id }}>
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
    howtos: state.howtos
  };
};

export default connect(mapStateToProps, { fetchHowTo, deleteHowTo })(HowToList);
