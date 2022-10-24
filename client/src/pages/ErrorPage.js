import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div className="my-container">
        <div className="content">
          <h4>Opps! Page not found</h4>
          <p>The page you were looking for doesn't exist.</p>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
