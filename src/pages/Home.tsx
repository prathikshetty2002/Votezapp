import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">RegistrationPage</Link>
        </li>
        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>
        <li>
          <Link to="/personalinfo">PersonalInfo</Link>
        </li>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
        <li>
          <Link to="/frametwelve">FrameTwelve</Link>
        </li>
        <li>
          <Link to="/electionpage">ElectionPage</Link>
        </li>
        <li>
          <Link to="/votingpanel">VotingPanel</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
