import React, { useState, useRef, useCallback } from "react";
import useDestinationSearch from "./GetDataCard";
import classes from "./DataCard.module.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";

export default function App() {
  const [limitNumber, setLimit] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);

  const { destinations, hasMore, loading, error } = useDestinationSearch(
    limitNumber,
    pageNumber
  );

  const observer = useRef();
  const lastDestinationElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  //   function handleSearch(e) {
  //     setLimit(e.target.value);
  //     setPageNumber(1);
  //   }

  return (
    <>
      <Container>
        <Row>
          <Col xs="6" lg="9">
            <ul
              style={{
                padding: "0",
                margin: "0",
                listStyle: "none",
                display: "flex",
                WebkitFlexWrap: "wrap",
                flexWrap: "wrap",
              }}
            >
              {destinations.map((destination, index) => {
                if (destinations.length === index + 1) {
                  //   return <div ref={lastDestinationElementRef} key={destination}>{destination}</div>

                  return (
                    //   <div
                    //     ref={lastDestinationElementRef}
                    //     key={destination}
                    //   >
                    //     <li style={{ listStyle: "none", padding: "5px" }}>
                    //       <img
                    //         src="https://picsum.photos/318/180"
                    //         width="121.33"
                    //         height="75.92"
                    //       />
                    //       {destination}
                    //     </li>
                    //     <li style={{ listStyle: "none", padding: "5px" }}>
                    //       <img
                    //         src="https://picsum.photos/318/180"
                    //         width="121.33"
                    //         height="75.92"
                    //       />
                    //       {destination}
                    //     </li>
                    //   </div>
                    //   <div
                    //         ref={lastDestinationElementRef}
                    //         key={destination} style={{display:"flex", flexWrap:"wrap", flexDirection: "row"}}
                    //       >
                    <Col xs="12" lg="3">
                      <div
                        ref={lastDestinationElementRef}
                        key={destination}
                        className={classes.containerTest}
                      >
                        <Card
                          style={{ height: "250px" }}
                          className={classes.image}
                        >
                          <CardImg
                            style={{ opacity: "1" }}
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            rounded="true"
                            height="100%"
                            className={classes.imageTest}
                          />
                          <div className={classes.middleTest}>
                            <div className={classes.textTest}>
                              {destination}
                              <br/><br/>
                              <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">Difficulty:</Col><Col lg="6"><Progress animated color="success" value="25" /> </Col>
                            </div>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">MinDays:</Col><Col lg="6"><Progress animated color="info" value="55" /> </Col>
                            </div>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">Accom:</Col><Col lg="6"><Progress animated color="warning" value="75" /> </Col>
                            </div>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">MaxAlt:</Col><Col lg="6"><Progress animated color="danger" value="100" /> </Col>
                            </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                    // </div>

                    // <li style={{
                    //      background: "tomato",
                    //      padding: "5px",
                    //      width: "200px",
                    //      height: "100px",
                    //      margin: "10px",

                    //      lineHeight: "100px",
                    //      color: "white",
                    //      fontWeight: "bold",
                    //      fontSize: "2em",
                    //      textAlign: "center"
                    // }} key={destination}>{destination}</li>
                  );
                } else {
                  return (
                    //   <div key={destination}>
                    //     <li style={{ listStyle: "none", padding: "5px" }}>
                    //       <img
                    //         src="https://picsum.photos/318/180"
                    //         width="121.33"
                    //         height="75.92"
                    //       />
                    //       {destination}
                    //     </li>
                    //   </div>
                    //     <div key={destination} style={{display:"flex", flexWrap:"wrap", flexDirection: "row"}}>
                    //     <Col xs="12" lg="3">
                    //       <Card
                    //       style={{height:"250px"}}
                    //       >
                    //         <CardImg style={{opacity:"1"}}
                    //           alt="Card image cap"
                    //           src="https://picsum.photos/318/180"
                    //           rounded="true"
                    //           height="100%"
                    //         />
                    //       </Card>
                    //       {destination}
                    //     </Col>
                    //   </div>

                    // <li style={{
                    //     background: "tomato",
                    //     padding: "5px",
                    //     width: "200px",
                    //     height: "100px",
                    //     margin: "10px",

                    //     lineHeight: "100px",
                    //     color: "white",
                    //     fontWeight: "bold",
                    //     fontSize: "2em",
                    //     textAlign: "center"
                    //     }} key={destination}>{destination}</li>
                    <Col xs="12" lg="3">
                      <div key={destination} className={classes.containerTest}>
                        <Card
                          style={{ height: "250px" }}
                          className={classes.image}
                        >
                          <CardImg
                            style={{ opacity: "1" }}
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            rounded="true"
                            height="100%"
                            className={classes.imageTest}
                          />
                          <div className={classes.middleTest}>
                            <div className={classes.textTest}>
                              {destination}
                            <br/><br/>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">Difficulty:</Col><Col lg="6"><Progress animated color="success" value="25" /> </Col>
                            </div>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">MinDays:</Col><Col lg="6"><Progress animated color="info" value="55" /> </Col>
                            </div>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">Accom:</Col><Col lg="6"><Progress animated color="warning" value="75" /> </Col>
                            </div>
                            <div style={{listStyle: "none", display: "flex"}}>
                            <Col lg="6">MaxAlt:</Col><Col lg="6"><Progress animated color="danger" value="100" /> </Col>
                            </div>
                          </div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                  );
                }
              })}
            </ul>
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error"}</div>
          </Col>
          <Col xs="6" lg="3">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>This is a wider card with supporting text</CardText>
                <Button color="danger">Get Insured</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>This is a wider card with supporting text.</CardText>
                <Button color="danger">Get Insured</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
