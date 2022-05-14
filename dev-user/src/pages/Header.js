import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal as Bmodal, Button } from "react-bootstrap";
import SearchBar from "react-js-search";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconName } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
export default function Header() {
  let hist = useNavigate();
  {
    console.log("******j*", localStorage.getItem("Token"));
  }
  const [update, setupdate] = useState(localStorage.getItem("Token"));
  const [show, setshow] = useState(false);
  const [alertData, setAlerdata] = useState({ title: "", body: "" });
  const [loginhide, setloginhide] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    let token = localStorage.getItem("Token");
    if (token) setloginhide(true);
  });

  const logoutfunction = () => {
    // let decision = window.confirm('Are you sure');
    setAlerdata({ title: "Logout", body: "Login out !!" });
    setshow(true);

    // setshow(true)
    // if (decision) {
    localStorage.removeItem("Token");
    localStorage.removeItem("user");
    window.location.reload();
    hist.push("/");

    // }
  };
  const loginsubmit = (url = 0) => {
    let local = localStorage.getItem("Token");
    if (local) {
      if (url !== 0) {
        hist(url);
      }
    } else {
      setAlerdata({ title: "Sorry", body: "Login and registration First" });
      setshow(true);
    }
  };
  const handleClose = () => setshow(false);
  var dataObjects = [
    { number: 12, name: "ABOUT", position: "ST", success: true },
    { number: 21, name: "Pirlo", position: "MC", success: false },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB", success: true },
    { number: 4, name: "Cannavaro", position: "CB" },
    { number: 2, name: "Puyol", position: "CB", success: false },
    { number: 15, name: "Abate", position: "LB" },
    { number: 16, name: "Locatelli", position: "MDI" },
    { number: 1, name: "Buffon", position: "GK" },
    { number: 21, name: "Pirlo", position: "MC" },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB" },
  ];
  const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "About Us",
      path: "/about-us",
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
    },
    {
      title: "How we do",
      path: "/how-we-do",
      icon: <FaIcons.FaQuestion />,
      cName: "nav-text",
    },
    {
      title: "Therapies",
      path: "/therapy",
      icon: <IoIcons.IoMdPeople />,
      cName: "nav-text",
    },

    {
      title: "Research",
      path: "/research",
      icon: <FaIcons.FaSistrix />,
      cName: "nav-text",
    },
    {
      title: "Support Network",
      path: "/support",
      icon: <FaIcons.FaNetworkWired />,
      cName: "nav-text",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <FaIcons.FaPhoneAlt />,
      cName: "nav-text",
    },
  ];

  const items = [
    {
      id: 0,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 9,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Support Network",
      path: "/support",
    },
    {
      id: 2,
      name: "Therapies",
      path: "/therapy",
    },
    {
      id: 3,
      name: "About Us",
      path: "/about-us",
    },

    {
      id: 5,
      name: "Digital Human Library",
      path: "/primary-library",
    },
    {
      id: 6,
      name: "Profil",
      path: "/profile",
    },
    {
      id: 7,
      name: "Cart",
      path: "/Cart/xyz",
    },

    {
      id: 22,
      name: "Docter booking",
      path: "/bookingAppoint",
    },
    {
      id: 34,
      name: "Manodayam ecosystem",
      path: "/eco-system",
    },

    {
      id: 8,
      name: "Eco-Systam",
      path: "/eco-system",
    },
    {
      id: 10,
      name: "Doctors",
      path: "/bookingAppoint",
    },
    {
      id: 8,
      name: "Tele-phychiatry",
      path: "/bookingAppoint",
    },
    {
      id: 78,
      name: "Research",
      path: "/research",
    },
    {
      id: 99,
      name: "Sprituality",
      path: "primary-sprituality",
    },
    {
      id: 77,
      name: "Self-Awareness",
      path: "self-awareness",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    hist(item.path);
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const formatResult = (item) => {
    let local = localStorage.getItem("Token");
    if (local) {
      return (
        <>
          <span style={{ display: "block", textAlign: "left", color: "black" }}>
            {item.name}
          </span>
        </>
      );
    } else {
      setAlerdata({ title: "Sorry", body: "Login and registration First" });
      setshow(true);
    }
  };
  return (
    <>
      {/* <Login /> */}
      <div className="fixed">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-logo">
                  <Link to="/">
                    <img src="assets/image/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <div className="search-part">
                <SearchBar
                  // onSearchTextChange={(term, hits) => onSearchChange(term, hits)}
                  // onSearchButtonClick={this.onSearchClick}
                  placeHolderText={"Search here..."}
                  data={dataObjects}
                  className="search"
                />
              </div> */}

              <div className="App">
                <header className="App-header">
                  <div style={{ width: 555 }}>
                    <ReactSearchAutocomplete
                      items={items}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      autoFocus
                      formatResult={formatResult}
                    />
                  </div>
                </header>
              </div>

              {/* <div className="col-lg-4 col-sm-8">
                <div className="header-contact justify-content-end">
                  <button
                    className="btn-web hvr-float-shadow"
                    data-toggle="tooltip"
                    onClick={showSidebar}
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                </div>
                <IconContext.Provider value={{ color: "#fff" }}>
                  <div className="navbara">
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path} className="menu-icon">
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </IconContext.Provider>
              </div> */}
            </div>
          </div>

          <header className="web-header">
            <div className="container">
              <nav className="navbar navbar-expand-md">
                <a className="navbar-brand d-logo" href="#">
                  <img src="assets/image/logo.png" alt="" />
                </a>

                <div
                  className="collapse navbar-collapse"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav nav-custom">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about-us" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/how-we-do" className="nav-link">
                        How we do
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to="/therapy" className="nav-link">
                        Therapies
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/research" className="nav-link">
                        Research
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/support" className="nav-link">
                        Support Network
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav nav-custom ml-auto btn-nav">
                    {loginhide && (
                      <li className="nav-item ">
                        <button
                          className="btn-web hvr-float-shadow"
                          data-toggle="tooltip"
                          title="Profile!"
                          onClick={() => loginsubmit("/profile")}
                        >
                          <li className="fa fa-user navicon"></li>
                          {/* Profile */}
                        </button>
                      </li>
                    )}
                    {loginhide && (
                      <li className="nav-item">
                        <Link to="/Cart/xyz">
                          <button
                            className="btn-web hvr-float-shadow"
                            data-toggle="tooltip"
                            title="Cart!"
                            // onClick={() => loginsubmit("/Cart")}
                          >
                            <li className="fa fa-shopping-cart navicon"></li>

                            {/* Cart */}
                          </button>
                        </Link>
                      </li>
                    )}

                    {!loginhide && (
                      <li className="nav-item">
                        <button
                          className="btn-web hvr-float-shadow "
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Login
                        </button>
                      </li>
                    )}

                    {!loginhide && (
                      <li className="nav-item">
                        <button
                          className="btn-web hvr-float-shadow"
                          data-toggle="modal"
                          data-target="#registermodal"
                        >
                          Register
                        </button>
                      </li>
                    )}

                    {loginhide && (
                      <li className="nav-item">
                        <button
                          className="btn-web hvr-float-shadow"
                          onClick={logoutfunction}
                        >
                          Logout
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </div>

      <Bmodal show={show}>
        <Bmodal.Header closeButton>
          <Bmodal.Title className="modal-head">{alertData.title}</Bmodal.Title>
        </Bmodal.Header>
        <Bmodal.Body className="modal-body">{alertData.body}</Bmodal.Body>

        <Bmodal.Footer>
          <Button className="modal-btn-ok" onClick={handleClose}>
            ok
          </Button>
        </Bmodal.Footer>
      </Bmodal>
    </>
  );
}
