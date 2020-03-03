import React from "react";
import { connect } from "react-redux";
import axios from "axios";



const Header = (props) => {
  return <></>;
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error
  };
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }
  componentDidMount() {
    this.fetchData(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchData(newProps.match.params.id);
    }
  }
  fetchData = (id) => {
    axios
      .get(``)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };
}

saveData = () => {
  const addToSavedList = this.props.addToSavedList;
  addToSavedList(this.state.name);
};
handleDelete = () => {
  axios
    .delete(
      ``
    )
    .then((response) => {
      console.log(response);
      this.props.history.push("/");
    })
    .catch((err) => console.log(err));
};

render() {
    if (!this.state.Header) {
      return <div>Loading...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.header} />
        <div className="save-button" onClick={this.saveData}>
          Save
        </div>
       
        <button onClick={this.handleDelete}>Delete Movie</button>
      </div>
    );
  }
}