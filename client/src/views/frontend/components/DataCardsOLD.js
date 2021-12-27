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

// function Todo(props) {
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     function handleDelete() {
//       // alert(props.text);
//       console.log("delete");
//       setModalIsOpen(true);
//     }
//     function closeModalHandler() {
//         console.log("close");
//       setModalIsOpen(false);
//     }
//     return (
//       <div className="card">
//         <h2>asdasdassda</h2>
//         <div className="actions">
//           <button className="btn" onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//         {modalIsOpen && (
//           <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
//         )}
//         {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
//       </div>
//     );
//   }

//   export default Todo;
const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const limit = 4;
  const page = 1;

  const getPosts = async () => {
    setIsFetching(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setPosts([...posts, ...data]);
    setIsFetching(false);
    console.log(data);
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

function DataCard() {
  // constructor(props) {
  //   super(props)

  //   this.toggle = this.toggle.bind(this)
  //   this.state = {
  //     popoverOpen: false,
  //   }
  // }

  // toggle() {
  //   this.setState({
  //     popoverOpen: !this.state.popoverOpen,
  //   })
  // }
  // cardOnHover = () => {
  //   console.log("hover");
  //   this.setState({
  //     popoverOpen: true,
  //   })
  // }
  
  // cardOnHoverLeave = () => {
  //   console.log("hover leave");
  //   this.setState({
  //     popoverOpen: false,
  //   })
  // }

    return (
      <Container>
        <Row>
          <Col xs="6" lg="9">
            {/* Row 1 */}
            {posts.map((post, index) => (
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
            
            ))}
     {isFetching && (
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
            {/* Row 2 */}
            {/* <Row>
              <Col xs="12" lg="3">
                <Card style={{height:"250px"}}>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
        
                </Card>
              </Col>
              <Col xs="12" lg="3">
                <Card style={{height:"250px"}}>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    rounded
                    height="100%"
                  />
        
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
        
                </Card>
              </Col>
            </Row> */}
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
