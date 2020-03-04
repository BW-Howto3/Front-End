import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

const HowToList = (props) => {
  useEffect(() => {
    axios
      .get("https://howto-be.herokuapp.com/api/howto")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return <></>;
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
