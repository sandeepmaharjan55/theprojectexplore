import React, { useState, useRef, useCallback } from "react";
import useDestinationSearch from "./GetDestinationData";
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
  Progress
} from "reactstrap";
import 'font-awesome/css/font-awesome.min.css';
import DestinationItem from "./DestinationItem";
import classes from "./dataCard.module.css";
import imageTextClasses from "./dataCardImageText.module.css";
function Destination() {
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
                // console.log(destination);
                if (destinations.length === index + 1) {
                  //   return <div ref={lastDestinationElementRef} key={destination}>{destination}</div>

                  return (
                    <Col xs="12" lg="3" key={index}>
                    <DestinationItem
                    lastDestinationElement={lastDestinationElementRef}
                    destination={destination.name}
                    destinationSlug={destination.slug}
                  />
                  </Col>
                    // <Col xs="12" lg="3" key={index}>
                    //   <div
                    //     ref={lastDestinationElementRef}
                    //     key={destination}
                    //     className={classes.containerTest}
                    //   >
                    //     <Card
                    //       style={{ height: "250px" }}
                    //       className={classes.image}
                    //     >
                    //       {/* text on images */}
                    //       <div className={imageTextClasses.textContainer}>
                    //       <div className={imageTextClasses.bottomLeft} style={{display: "flex" }}>
                    //         <i className="fa fa-sun-o" aria-hidden="true"></i>
                    //         <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>27</div>°C
                    //         </div>
                    //         <div className={imageTextClasses.topLeft} style={{display: "flex" }}>
                    //         AQI <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>140</div>
                    //         </div>
                    //         <div className={imageTextClasses.topRight} style={{display: "flex" }}>
                    //         <i className="fa fa-wifi" aria-hidden="true"></i>
                    //         <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>2</div>Mbps
                    //         </div>
                    //         <div className={imageTextClasses.bottomRight} style={{display: "flex" }}>
                    //         Rs. <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>5000/m</div>
                    //         </div>
                    //         <div className={imageTextClasses.centered}>
                    //           {destination}
                    //         </div>
                    //       </div>
                    //       {/* end text on images */}
                    //       <CardImg
                    //         style={{ opacity: "1" }}
                    //         alt="Card image cap"
                    //         src="https://picsum.photos/318/180"
                    //         rounded="true"
                    //         height="100%"
                    //         className={classes.imageTest}
                    //       />
                    //       <div className={classes.middleTest}>
                    //         <div className={classes.textTest}>
                    //           {destination}
                    //           <br />
                    //           <br />
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">Difficulty:</Col>
                    //             <Col lg="6">
                    //               <Progress
                    //                 animated
                    //                 color="success"
                    //                 value="25"
                    //               />
                    //             </Col>
                    //           </div>
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">MinDays:</Col>
                    //             <Col lg="6">
                    //               <Progress animated color="info" value="55" />
                    //             </Col>
                    //           </div>
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">Accom:</Col>
                    //             <Col lg="6">
                    //               <Progress
                    //                 animated
                    //                 color="warning"
                    //                 value="75"
                    //               />
                    //             </Col>
                    //           </div>
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">MaxAlt:</Col>
                    //             <Col lg="6">
                    //               <Progress
                    //                 animated
                    //                 color="danger"
                    //                 value="100"
                    //               />
                    //             </Col>
                    //           </div>
                    //         </div>
                    //       </div>
                    //     </Card>
                    //   </div>
                    // </Col>
                    
                  );
                } else {
                  return (
                    <Col xs="12" lg="3" key={index}>
                    <DestinationItem
                    destination={destination.name}
                    destinationSlug={destination.slug}
                  />
                  </Col>
                    // <Col xs="12" lg="3" key={index}>
                    //   <div key={destination} className={classes.containerTest}>
                    //     <Card
                    //       style={{ height: "250px" }}
                    //       className={classes.image}
                    //     >
                    //       {/* text on images */}
                    //       <div className={imageTextClasses.textContainer}>
                    //         <div className={imageTextClasses.bottomLeft} style={{display: "flex" }}>
                    //         <i className="fa fa-sun-o" aria-hidden="true"></i>
                    //         <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>27</div>°C
                    //         </div>
                    //         <div className={imageTextClasses.topLeft} style={{display: "flex" }}>
                    //         AQI <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>140</div>
                    //         </div>
                    //         <div className={imageTextClasses.topRight} style={{display: "flex" }}>
                    //         <i className="fa fa-wifi" aria-hidden="true"></i>
                    //         <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>2</div>Mbps
                    //         </div>
                    //         <div className={imageTextClasses.bottomRight} style={{display: "flex" }}>
                    //         Rs. <div style={{marginLeft:"5px", fontWeight:"bold", fontSize:"medium"}}>5000/m</div>
                    //         </div>
                    //         <div className={imageTextClasses.centered}>
                    //           {destination}
                    //         </div>
                    //       </div>
                    //       {/* end text on images */}
                    //       <CardImg
                    //         style={{ opacity: "1" }}
                    //         alt="Card image cap"
                    //         src="https://picsum.photos/318/180"
                    //         rounded="true"
                    //         height="100%"
                    //         className={classes.imageTest}
                    //       />
                    //       <div className={classes.middleTest}>
                    //         <div className={classes.textTest}>
                    //           {destination}
                    //           <br />
                    //           <br />
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">Difficulty:</Col>
                    //             <Col lg="6">
                    //               <Progress
                    //                 animated
                    //                 color="success"
                    //                 value="25"
                    //               />
                    //             </Col>
                    //           </div>
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">MinDays:</Col>
                    //             <Col lg="6">
                    //               <Progress animated color="info" value="55" />
                    //             </Col>
                    //           </div>
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">Accom:</Col>
                    //             <Col lg="6">
                    //               <Progress
                    //                 animated
                    //                 color="warning"
                    //                 value="75"
                    //               />
                    //             </Col>
                    //           </div>
                    //           <div
                    //             style={{ listStyle: "none", display: "flex" }}
                    //           >
                    //             <Col lg="6">MaxAlt:</Col>
                    //             <Col lg="6">
                    //               <Progress
                    //                 animated
                    //                 color="danger"
                    //                 value="100"
                    //               />
                    //             </Col>
                    //           </div>
                    //         </div>
                    //       </div>
                    //     </Card>
                    //   </div>
                    // </Col>
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
export default Destination;