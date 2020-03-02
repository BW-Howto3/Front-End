import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-howto">
      <h1>Welcome to How-To!</h1>
      <nav>
        <Link className="welcomeLinks" to="/signin">
          Sign in/Register
        </Link>
      </nav>
    </div>
  );
};

export default Welcome;
