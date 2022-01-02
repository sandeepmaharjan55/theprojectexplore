import classes from "./dataCard.module.css";
import imageTextClasses from "./dataCardImageText.module.css";
import { Link } from 'react-router-dom';
import { Card, CardImg, Col, Progress} from "reactstrap";
import "font-awesome/css/font-awesome.min.css";

function DestinationItem(props) {
//console.log(props.destinationSlug);
  return (
    <Link to={() => `nepal/${props.destinationSlug}`}>
      {/* <Link to={() => `nepal/${props.destinationSlug}?sort=name`}> */}
      <div
        ref={props.lastDestinationElement}
        key={props.destination}
        className={classes.containerTest}
      >
        <Card style={{ height: "250px" }} className={classes.image}>
          {/* text on images */}
          <div className={imageTextClasses.textContainer}>
            <div
              className={imageTextClasses.bottomLeft}
              style={{ display: "flex" }}
            >
              <i className="fa fa-sun-o" aria-hidden="true"></i>
              <div
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "medium",
                }}
              >
                27
              </div>
              °C
            </div>
            <div
              className={imageTextClasses.topLeft}
              style={{ display: "flex" }}
            >
              AQI{" "}
              <div
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "medium",
                }}
              >
                140
              </div>
            </div>
            <div
              className={imageTextClasses.topRight}
              style={{ display: "flex" }}
            >
              <i className="fa fa-wifi" aria-hidden="true"></i>
              <div
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "medium",
                }}
              >
                2
              </div>
              Mbps
            </div>
            <div
              className={imageTextClasses.bottomRight}
              style={{ display: "flex" }}
            >
              Rs.{" "}
              <div
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "medium",
                }}
              >
                5000/m
              </div>
            </div>
            <div className={imageTextClasses.centered}>{props.destination}</div>
          </div>
          {/* end text on images */}
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
              {props.destination}
              <br />
              <br />
              <div style={{ listStyle: "none", display: "flex" }}>
                <Col lg="6">Difficulty:</Col>
                <Col lg="6">
                  <Progress animated color="success" value="25" />
                </Col>
              </div>
              <div style={{ listStyle: "none", display: "flex" }}>
                <Col lg="6">MinDays:</Col>
                <Col lg="6">
                  <Progress animated color="info" value="55" />
                </Col>
              </div>
              <div style={{ listStyle: "none", display: "flex" }}>
                <Col lg="6">Accom:</Col>
                <Col lg="6">
                  <Progress animated color="warning" value="75" />
                </Col>
              </div>
              <div style={{ listStyle: "none", display: "flex" }}>
                <Col lg="6">MaxAlt:</Col>
                <Col lg="6">
                  <Progress animated color="danger" value="100" />
                </Col>
              </div>
            </div>
          </div>
        </Card>
      </div>
     </Link>
  );
}
export default DestinationItem;
