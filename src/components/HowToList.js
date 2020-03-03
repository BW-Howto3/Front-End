import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HowToCard from "./HowToCard";
export default class MovieList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        datas: []
      };
    }
}

componentDidMount() {
    axios
      .get("https://howto-be.herokuapp.com/api/name")
      .then((res) => this.setState({ datas: res.data }))
      .catch((err) => console.log(err.response));
  }

  render() {
    return (
      <div className="howto-list">
        {this.state.datas.map((header) => (
          <Details key={header.id} header={header} />
        ))}
      </div>
    );
  }
  
  function Details({ header }) {
    return (
      <Link to={`/datas/${header.id}`}>
        <HowToCard header={header} />
      </Link>
    );
  }
  //B.B