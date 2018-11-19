import React from "react";
import "./Dashboard.css";

const Dashboard = () => (
  // page container
  <div className="uk-container-large page-container">
    {/* title and dashboard title container */}
    <div className="uk-padding-medium">
      <h1 className="uk-heading-primary pvw">Player VS World</h1>
      <h1 className="prof">My Profile</h1>
    </div>
    {/* card container */}
    <div className="cardRows">
      {/* friend card */}
      <div className="uk-child-width-1-1@s cardBody uk-grid-collapse uk-grid">
        <div className="uk-card-transparent dashboardCards uk-card-default uk-card-hover uk-card-body">
          <h2 className="uk-card-title">My Friends</h2>
          <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      {/* game card */}
      <div className="uk-child-width-1-1@s cardBody uk-grid-collapse uk-grid">
        <div className="uk-card-transparent dashboardCards uk-card-default uk-card-hover uk-card-body">
          <h2 className="uk-card-title">My Games</h2>
          <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      {/* group card */}
      <div className="uk-child-width-1-1@s cardBody uk-grid-collapse uk-grid">
        <div className="uk-card-transparent dashboardCards uk-card-default uk-card-hover uk-card-body">
          <h2 className="uk-card-title">My Groups</h2>
          <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;