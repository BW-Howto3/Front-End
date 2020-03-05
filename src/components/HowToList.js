import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import HowToCard from "./HowToCard";

const HowToList = props => {
  const [howTo, setHowTo] = useState([]);
    useEffect(() => {
        axios.get('https://howto-be.herokuapp.com/api/howto')
            .then(response => {
              console.log(response);
              setHowTo(response.data);
            })
            .catch(error => console.log('failed to load', error)) 
    },[])
    return (
        <section className="howToList">
          {howTo.map(item => (<HowToCard info={item} />
          ))}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isLocation: state.isLocation,
        user: state.user,
        error: state.error,
        array: state.array
    }
}

export default connect(mapStateToProps, {})(HowToList)
