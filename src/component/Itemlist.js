import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export const Itemlist = ({ itemsdata }) => {
  return (
    <Row>
      {itemsdata.length >= 1 ? (
        itemsdata.map((item) => {
          return (
            <Zoom>
              <Col key={item.id} className="mb-2" sm="12">
                <Card
                  className="d-flex flex-row "
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className=" item-title ">{item.title}</div>
                      <div className=" item-price"> {item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
};
