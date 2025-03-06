import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

export const NavBar = ({ filterbySearch }) => {
  const [Searchvalue, setSearchvalue] = useState("");
  const onsearch = () => {
    filterbySearch(Searchvalue);
    setSearchvalue("");
  };

  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="font" href="#">
            <div className="brand-color">مطعم الحبايب</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="Text"
                placeholder="ابحث.."
                className="mx-2"
                onChange={(e) => {
                  setSearchvalue(e.target.value);
                }}
                value={Searchvalue}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onsearch();
                }}
                className="btn-search mx-2"
              >
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
