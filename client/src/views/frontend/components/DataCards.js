import React, { Component, useState } from "react";
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

export class DataCard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" lg="8">
            {/* Row 1 */}
            <Row>
              {/* <Col xs={6} md={8}> */}
              <Col xs="12" lg="3">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
                <Card>
                  <CardImg
                    alt="Card im</CardBody>age cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
                <Card>
                  <CardImg
                    alt="Card im</CardBody>age cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
            {/* Row 2 */}
            <Row>
              {/* <Col xs={6} md={8}> */}
              <Col xs="12" lg="3">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
                <Card>
                  <CardImg
                    alt="Card im</CardBody>age cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
                <Card>
                  <CardImg
                    alt="Card im</CardBody>age cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
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
          <Col xs="6" lg="4">
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

      //       <Container fluid="xs" style={{marginLeft:"10px", marginRight:"10px"}}>
      //         <Row>
      //             {/* <Col xs={6} md={8}> */}
      //             <Col xs={6} md={2} lg={2}>
      //               <Card>
      //                 <CardImg
      //                   alt="Card image cap"
      //                   src="https://picsum.photos/318/180"
      //                   top
      //                   width="100%"
      //                 />
      //                  {/* <CardBody>
      //                   <CardTitle tag="h5">Card title</CardTitle>
      //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
      //                     Card subtitle
      //                   </CardSubtitle>
      //                   <CardText>
      //                     This is a wider card with supporting text below as a natural
      //                     lead-in to additional content. This content is a little bit
      //                     longer.
      //                   </CardText>
      //                   <Button>Button</Button>
      //                  </CardBody> */}
      //               </Card>
      //             </Col>
      //             <Col xs={6} md={2} lg={2}>
      //               <Card>
      //                 <CardImg
      //                   alt="Card image cap"
      //                   src="https://picsum.photos/318/180"
      //                   top
      //                   width="100%"
      //                 />
      //                  {/* <CardBody>
      //                   <CardTitle tag="h5">Card title</CardTitle>
      //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
      //                     Card subtitle
      //                   </CardSubtitle>
      //                   <CardText>
      //                     This is a wider card with supporting text below as a natural
      //                     lead-in to additional content. This content is a little bit
      //                     longer.
      //                   </CardText>
      //                   <Button>Button</Button>
      //                  </CardBody> */}
      //               </Card>
      //             </Col>
      //             <Col xs={6} md={2} lg={2}>
      //               <Card>
      //                 <CardImg
      //                   alt="Card im</CardBody>age cap"
      //                   src="https://picsum.photos/318/180"
      //                   top
      //                   width="100%"
      //                 />
      //                  {/* <CardBody>
      //                   <CardTitle tag="h5">Card title</CardTitle>
      //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
      //                     Card subtitle
      //                   </CardSubtitle>
      //                   <CardText>
      //                     This card has supporting text below as a natural lead-in to
      //                     additional content.
      //                   </CardText>
      //                   <Button>Button</Button>
      //                  </CardBody> */}
      //               </Card>
      //             </Col>
      //               <Col xs={6} md={2} lg={2}>
      //               <Card>
      //                 <CardImg
      //                   alt="Card im</CardBody>age cap"
      //                   src="https://picsum.photos/318/180"
      //                   top
      //                   width="100%"
      //                 />
      //                  {/* <CardBody>
      //                   <CardTitle tag="h5">Card title</CardTitle>
      //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
      //                     Card subtitle
      //                   </CardSubtitle>
      //                   <CardText>
      //                     This card has supporting text below as a natural lead-in to
      //                     additional content.
      //                   </CardText>
      //                   <Button>Button</Button>
      //                  </CardBody> */}
      //               </Card>
      //             </Col>
      //             {/* side ko part */}
      //             <Col md={4} lg={4}>
      //             <ul>
      //               <Card>
      //                 <CardImg
      //                   alt="Card image cap"
      //                   src="https://picsum.photos/318/180"
      //                   top
      //                   width="100%"
      //                 />
      //                 <CardBody>
      //                   <CardTitle tag="h5">Card title</CardTitle>
      //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
      //                     Card subtitle
      //                   </CardSubtitle>
      //                   <CardText>
      //                     This is a wider card with supporting text
      //                   </CardText>
      //                   <Button color="danger">Get Insured</Button>
      //                  </CardBody>
      //               </Card>
      //               <Card>
      //                 <CardImg
      //                   alt="Card image cap"
      //                   src="https://picsum.photos/318/180"
      //                   top
      //                   width="100%"
      //                 />
      //                 <CardBody>
      //                   <CardTitle tag="h5">Card title</CardTitle>
      //                   <CardSubtitle className="mb-2 text-muted" tag="h6">
      //                     Card subtitle
      //                   </CardSubtitle>
      //                   <CardText>
      //                     This is a wider card with supporting text.
      //                   </CardText>
      //                   <Button color="danger">Get Insured</Button>
      //                  </CardBody>
      //               </Card>
      //             </ul>
      //           </Col>
      // {/* side ko part end*/}
      //           </Row>
      //       </Container>
    );
  }
}

export default DataCard;
