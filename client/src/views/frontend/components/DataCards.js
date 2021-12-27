import React, { Component, useState, useEffect} from "react";
// import Backdrop from "./modal/Backdrop";
// import Modal from "./modal/Modal";
import {
  CardDeck,
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
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

function DataCard () {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  let [page, setPage] = useState(1);
  const limit = 4;
  // const page = 1;
  const getPosts = async () => {
    setIsFetching(true);
    console.log(limit, page);
    const response = await fetch(
      `http://localhost:7000/api/destination/listnoauth?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    console.log(data);
    setPosts({...posts, ...data});
    setIsFetching(false)
  };
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }
  function getMorePosts() {
    setTimeout(() => {
      setPage(page++)
      getPosts();
    }, 2000);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => {
      getPosts();
    }, //eslint-disable-next-line
    []
  );
  useEffect(() => {
    if (!isFetching) return;
    getMorePosts();
  }, [isFetching]);

    return (
      <Container>
        <Row>
          <Col xs="6" lg="9">
        

            <Row>
              {/* <Col xs={6} md={8}> */}
              <Col xs="12" lg="3">
                <Card
                style={{height:"250px"}}
                // id="Popover1"
                // onMouseEnter={this.cardOnHover} onMouseLeave={this.cardOnHoverLeave}
                >
                  <CardImg style={{opacity:"1"}}
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
                  {/* <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Button>Button</Button>
                 </CardBody> */}
                </Card>
                {/* <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover> */}
              </Col>
              <Col xs="12" lg="3">
                <Card style={{height:"250px"}}>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
                  {/* <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Button>Button</Button>
                 </CardBody> */}
                </Card>
              </Col>
              <Col xs="12" lg="3">
                <Card style={{height:"250px"}}>
                  <CardImg
                    alt="Card im</CardBody>age cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
                  {/* <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Button</Button>
                 </CardBody> */}
                </Card>
              </Col>
              <Col xs="12" lg="3"> 
                <Card style={{height:"250px"}}>
                  <CardImg
                    alt="Card im</CardBody>age cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
                  {/* <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Button</Button>
                 </CardBody> */}
                </Card>
              </Col>
            </Row>

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
                    <CardText>
                      This is a wider card with supporting text
                    </CardText>
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
                    <CardText>
                      This is a wider card with supporting text.
                    </CardText>
                    <Button color="danger">Get Insured</Button>
                  </CardBody>
                </Card>
            
            
          </Col>
        </Row>
      </Container>
    );
  
}

export default DataCard;
