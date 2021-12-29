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
  PopoverBody,
  Spinner
} from "reactstrap";

function DataCard () {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  let [page, setPage] = useState(1);
  const limit = 4;
  // let oldVar = page;
  // console.log(page);
  // const page = 1;
  const getPosts = async () => {
    setIsFetching(true);
    // console.log(page);

    const response = await fetch(
      `http://localhost:7000/api/destination/listnoauth?_page=${page}&_limit=${limit}`
    );
   
    const data = await response.json();
   //console.log(data);


    // const destinationCards = ;
    // for (const key in data) {
    //   const destCard = {
    //     id: key,
    //     ...data[key],
    //   };
      // destinationCards.push(data);
  //  }

  setPosts([{...posts, ...data}]);
   console.log(posts);
    setIsFetching(false);
  };
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
     // console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight);
      return;
    }
    setIsFetching(true);
  }
  function getMorePosts() {
    setTimeout(() => {
      setPage(page++);
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
        
          {posts.map((post, index) => (
          console.log(post, index),
            <Row key={index}>
               {post.data.map((postArray, indexArray) => (
              <Col xs="12" lg="3" key={postArray[indexArray]}>
                <Card
                style={{height:"250px"}}
                >
                  <CardImg style={{opacity:"1"}}
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
                </Card>
              </Col>
               ))}
            </Row>
            
          ))}
        {isFetching && (
      <center> <Spinner>
       Loading...
     </Spinner>
     </center>
      )}
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
