import React from "react";
import { Icon, Popup } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "4em" }}>Real Estate Seller Application</h1>
            <hr />
          </div>
        </div>
        <div className="row text-center" style={{ marginBottom: "60px" }}>
          <div className="col-4 mr-auto text-center">
            <Popup
              content="Companies"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="building" size="massive" />
                </div>
              }
            />
          </div>
          <div className="col-4 ml-auto mr-auto text-center">
            <Popup
              content="Projects"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="chart bar" size="massive" />
                </div>
              }
            />
          </div>
          <div className="col-4 mr-auto ml-auto text-center">
            <Popup
              content="Seller"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="address book outline" size="massive" />
                </div>
              }
            />
          </div>
        </div>
        <div className="row text-center" style={{ marginBottom: "60px" }}>
          <div className="col-4 mr-auto text-center">
            <Popup
              content="Proposals"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="dollar sign" size="massive" />
                </div>
              }
            />
          </div>
          <div className="col-4 ml-auto mr-auto text-center">
            <Popup
              content="Documents"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="file alternate" size="massive" />
                </div>
              }
            />
          </div>
          <div className="col-4 ml-auto text-center">
            <Popup
              content="Computation"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="calculator" size="massive" />
                </div>
              }
            />
          </div>
        </div>
        <div className="row text-center" style={{ marginBottom: "60px" }}>
          <div className="col-4 mr-auto text-center">
            <Popup
              content="Commision"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="dolly flatbed" size="massive" />
                </div>
              }
            />
          </div>
          <div className="col-4 ml-auto mr-auto text-center">
            <Popup
              content="Clients"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="users" size="massive" />
                </div>
              }
            />
          </div>
          <div className="col-4 ml-auto text-center">
            <Popup
              content="Settings"
              size="small"
              position="bottom center"
              trigger={
                <div className="col-8 ml-auto mr-auto home-icon">
                  <Icon name="settings" size="massive" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
