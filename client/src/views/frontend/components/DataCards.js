import React, { useState, useRef, useCallback } from 'react'
import useDestinationSearch from './GetDataCard'
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
    Col
  } from "reactstrap";

export default function App() {
  const [query, setQuery] = useState(4)
  const [pageNumber, setPageNumber] = useState(1)

  const {
    destinations,
    hasMore,
    loading,
    error
  } = useDestinationSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
          <Container>
        <Row>
          <Col xs="6" lg="9">
      {/* <input type="text" value={query} onChange={handleSearch}></input> */}
      {destinations.map((book, index) => {
        if (destinations.length === index + 1) {
        //   return <div ref={lastBookElementRef} key={book}>{book}</div>
        return  <div ref={lastBookElementRef} key={book}> 
            
              <Col xs="12" lg="3">
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
                {book}
              </Col>
           
    </div>  
        } else {
          return <div key={book}>
              
              <Col xs="12" lg="3">
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
                {book}
              </Col>
            
          </div>
        }
      })}
      
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
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
    </>
  )
}