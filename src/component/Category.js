import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";

export const Category = ({ filtercategory, allCategory }) => {
  const onfilter = (cat) => {
    filtercategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="justify-content-center d-flex">
        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((categ) => {
              return (
                <button
                  key={categ}
                  onClick={() => onfilter(categ)}
                  className="btn mx-2"
                  style={{ border: "1px solid #b45b35" }}
                >
                  {categ}
                </button>
              );
            })
          ) : (
            <h3>لا يوجد اصناف</h3>
          )}
        </Roll>
      </Col>
    </Row>
  );
};
