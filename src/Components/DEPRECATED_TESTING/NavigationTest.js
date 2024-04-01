import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import News from "./Components/News/News";
import Subscribe from "./Components/Subscribe/Subscribe";
import Main from "./Components/Main/Main";
import ResourceHub from "./Components/ResourceHub/Resources";

// A BETTER NAVBAR EXAMPLE TO TRY
// https://codesandbox.io/p/sandbox/react-dtyh6?file=%2Fsrc%2FNavBar.js

const NavigationTest = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("welcome");
  const navItems = [
    { id: 1, title: "News", name: "News" },
    { id: 2, title: "Let's Play", name: "LetsPlay" },
    { id: 3, title: "Competitions", name: "Competitions" },
    { id: 4, title: "Programs", name: "Programs" },
    { id: 5, title: "Get Involved", name: "GetInvolved" },
    { id: 6, title: "Resource Hub", name: "ResourceHub" },
    { id: 7, title: "Subscribe", name: "Subscribe" },
    { id: 8, title: "Contact Us", name: "ContactUs" },
  ];

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" exact>
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/Competitions" exact>
              Competitions
            </Nav.Link>
            <Nav.Link as={Link} to="/Programs">
              Programs
            </Nav.Link>
            <NavDropdown title="Resource Hub">
              <NavDropdown.Item as={Link} to="/Resources">
                Resources
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ContactUs">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Subscribe">
              Subscribe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<News />} />
            <Route path="/Competitions" element={<Competitions />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

