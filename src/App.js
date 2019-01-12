import React, { Component } from "react";
import "./App.scss";
//import Home from "./Components/Home/Home";
//import About from "./Components/About/About";
//import Services from "./Components/Services/Services";
//import Gallery from "./Components/Gallery/Gallery";
//import Contact from "./Components/Contact/Contact";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-sm pt-5 mb-5 navbar-dark">
              {/*  <!-- Brand --> */}
              <div>
                <ul className="navbar-nav">
                  <li className="nav-item font-weight-bold">
                    <img
                      src={require("./img/logo.png")}
                      className="img-fluid"
                      alt="Logo"
                    />
                  </li>
                </ul>
              </div>

              {/*  <!-- Toggler/collapsibe Button --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>

              {/*  -- Navbar links -- */}
              <div
                className="collapse navbar-collapse justify-content-end"
                id="collapsibleNavbar"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={{
                        pathname: "/about",
                        search: "?a=1&b=2",
                        hash: "wpt-hash"
                      }}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={{
                        pathname: "/services"
                      }}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            {/*  <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/404"
              render={() => (
                <div className="container">
                  <h1>404 Page is not found</h1>
                </div>
              )}
            />
            <Redirect to={"/404"} />
          </Switch> */}
          </div>
          <div className="container pt-5">
            <div className="row">
              <div className="col mb-5">
                {" "}
                <p className="mb-5">
                  SELL YOUR <br />
                  <span>CAR NOW</span>
                </p>
                <span className="">
                  Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry. Lorem Ipsum has been the <br />{" "}
                  industry's standard dummy text ever since the 1500s
                </span>
              </div>
            </div>
            {/* */}
          </div>
        </div>
        {/* mainpart */}
        <div className="container mainpart pb-5">
          <div className="row">
            <div className="col">
              {" "}
              <p className="pt-5 pb-5">OUR SERVICES</p>
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-lg-3">
              <div className="card h-100 border-0">
                <img
                  className="mx-auto d-block"
                  src={require("./img/heart.png")}
                />
                <div className="card-body">
                  <p className="card-text pt-5 text-center">
                    Making your trip <br /> beautiful and easier
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              {" "}
              <div className="card h-100 border-0">
                <img
                  className="mx-auto d-block price_card"
                  src={require("./img/tools.png")}
                />
                <div className="card-body">
                  <p className="card-text pt-5 text-center">
                    Tools to help you <br /> succeed tommorow
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card h-100 border-0">
                <img
                  className="mx-auto d-block price_card"
                  src={require("./img/bulb.png")}
                />
                <div className="card-body">
                  <p className="card-text pt-5 text-center">
                    Ideas that will blow
                    <br />
                    you out the blue.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card h-100 border-0">
                <img
                  className="mx-auto d-block price_card"
                  src={require("./img/compass.png")}
                />
                <div className="card-body">
                  <p className="card-text pt-5 text-center">
                    Navigate your path
                    <br />
                    to beautiful world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Storyblock */}
        <div className="storyblock">
          <div className="container ">
            <div className="row p-4">
              <div className="col-lg-8 col-sm-12">
                <p className='text-justify'>
                  We are in business for over 6 years providing amazing services
                  to client <br /> and people love them to the core. View our
                  story to know more.
                </p>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-row justify-content-center">
                <button className="btn btn-danger">Our story</button>
              </div>
            </div>
          </div>
        </div>
        {/* Pricingblock */}
        <div className="pricingblock pt-5">
          <div className="container ">
            <div className="row">
              <div className="col">
                <h1 className="text-center">Pricing</h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-sm-12">
                <div className="card m-2">
                  <div className="card-body text-center started">
                    <h4 className="card-title">Starter</h4>
                    <h1 className="card-title">Free</h1>
                    <p className="card-text text-center">Free Service</p>
                    <p className="card-text text-center">Multiple Accounts</p>
                    <p className="card-text text-center">Management No</p>
                    <p className="card-text text-center">--</p>
                    <p className="card-text text-center">--</p>
                    <a href="#" className="btn btn-light mt-3 w-75">
                      Try
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card m-2">
                  <div className="card-body text-center business">
                    <h4 className="card-title">Business</h4>
                    <h1 className="card-title">$97</h1>
                    <p className="card-text text-center">Free Service</p>
                    <p className="card-text text-center">Multiple Accounts</p>
                    <p className="card-text text-center">Management No</p>
                    <p className="card-text text-center">Unlimited Data</p>
                    <p className="card-text text-center">--</p>
                    <a href="#" className="btn btn-light mt-3 popular w-75">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card m-2">
                  <div className="card-body text-center professional">
                    <h4 className="card-title">Professional</h4>
                    <h1 className="card-title">$297</h1>
                    <p className="card-text text-center">Free Service</p>
                    <p className="card-text text-center">Multiple Accounts</p>
                    <p className="card-text text-center">Management No</p>
                    <p className="card-texttext-center">Unlimited Data</p>
                    <p className="card-texttext-center">Whatever You Need</p>
                    <a href="#" className="btn btn-light mt-3 w-75">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testemonials */}
        <div className="testemonials pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h1 className="text-center mb-3">Testemonial</h1>
                <div className="card">
                  <div className="card-body">
                    <img
                      className="rounded-circle float-right img-fluid"
                      src={require("./img/djbravo.png")}
                      alt="Card image"
                      style={{ border: ".5px solid lightgrey" }}
                    />
                    <blockquote className="blockquote">
                      <p>
                        I have been involved with this company for ages and just
                        want to say this is a great work by designcoon.
                      </p>
                      <p className="blockquote-footer">
                        DJ Bravo - Frequent Travelera
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <h1 className="text-center gallery mb-3">Gallery</h1>
                <div className="d-flex flex-row justify-content-around flex-wrap">
                  <div className="m-2">
                    <img
                      className="img-fluid rounded-circle"
                      src={require("./img/1.png")}
                    />
                  </div>
                  <div className="m-2">
                    <img
                      className="img-fluid rounded-circle"
                      src={require("./img/2.png")}
                    />
                  </div>
                  <div className="m-3">
                    <img
                      className="img-fluid rounded-circle"
                      src={require("./img/3.png")}
                    />
                  </div>
                  <div className="m-2">
                    <img
                      className="img-fluid rounded-circle"
                      src={require("./img/4.png")}
                    />
                  </div>
                  <div className="m-2">
                    <img
                      className="img-fluid rounded-circle"
                      src={require("./img/5.png")}
                    />
                  </div>
                  <div className="m-2">
                    <img
                      className="img-fluid rounded-circle"
                      src={require("./img/6.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="text-center p-2" style={{ marginBottom: "0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 order-2 order-sm-1">
                <h6 className="" href="#">
                  All Rights Reserved | 2019 | Designed with love by DesignCoon
                </h6>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 order-1 order-sm-2">
                <img
                  className="img-responsive p-2"
                  src={require("./img/logo.png")}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
