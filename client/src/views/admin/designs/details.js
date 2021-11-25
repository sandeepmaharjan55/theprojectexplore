// ** React Imports
import { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import img1 from '@src/assets/images/elements/tattoo1.png'

// ** Product detail components
import { Award, Clock, Shield, Share2, Facebook, Twitter, Youtube, Instagram } from 'react-feather'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Card, CardBody, Row, Col, CardText, UncontrolledButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'


import '@styles/base/pages/app-ecommerce-details.scss'
import RelatedDesigns from './RelatedDesigns'


const Details = () => {
  // ** Vars

  const [data, setData] = useState()
  
    const formData = new FormData()
    formData.append('productId', localStorage.getItem('currentId'));
     const datas = JSON.stringify(Object.fromEntries(formData))


    fetch('https://inksvilla.com/api/products/brand/id', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:datas
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
        return response.json()

    })
    .then((data) => {
      console.log(data);
      setData(data.data);
      alert(data.data.verification[0].isVerified)
    })
    .catch((error) => {
      // if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      //  else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      
    });


  // ** ComponentDidMount : Get product
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Design Details'/>
      <div className='app-ecommerce-details'>
        
          <Card>
            <CardBody>
              <Row className='my-2'>
                <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img className='img-fluid product-img' src= {data && 'https://inksvilla.com/' + data.productImage}  height="400px" width="400px"/>
                  </div>
                </Col>
                <Col md='7' xs='12'>
                  <h4>{data && data.title}</h4>
                  <CardText tag='span' className='item-company'>
                    <img className='mr-75'  src= {data && 'https://inksvilla.com/' + data.artist.avatar}  alt='angular' height='50' width='50' />
                    <a className='company-name mt-5 ml-1' >
                    {data && data.artist.name}
                    </a>
                  </CardText>
                  <hr/>
                  <CardText>
                    Verification -<span className='text-success ml-25'>IsVerified</span>
                  </CardText>
                  <CardText>{data && data.description}</CardText>
                  <hr />
                  <CardText tag='span' className='item-company'>
                    Appointment Price : 
                    <a className='company-name ml-1' href='/' onClick={e => e.preventDefault()}>
                    {data && data.appointmentPrice}
                    </a>
                  </CardText>
                  <hr />
                  <CardText tag='span' className='item-company'>
                    Selling Price : 
                    <a className='company-name ml-1' href='/' onClick={e => e.preventDefault()}>
                    {data && data.sellingPrice}
                    </a>
                  </CardText>
                  <hr/>
                  <CardText tag='span' className='item-company'>
                    Category Name: 
                    <a className='company-name ml-1' href='/' onClick={e => e.preventDefault()}>
                    {data && data.categoryName}
                    </a>
                  </CardText>
                  <hr/>
                  <CardText tag='span' className='item-company'>
                    Artist Email: 
                    <a className='company-name ml-1' href='/' onClick={e => e.preventDefault()}>
                    {data && data.artist.email}
                    </a>
                  </CardText>
                  <hr/>
                  <CardText tag='span' className='item-company'>
                    Artist Phone: 
                    <a className='company-name ml-1' href='/' onClick={e => e.preventDefault()}>
                    {data && data.artist.phoneNumber}
                    </a>
                  </CardText>
                  <div className='d-flex flex-column flex-sm-row pt-1'>
                    <UncontrolledButtonDropdown className='dropdown-icon-wrapper btn-share'>
                      <DropdownToggle className='btn-icon hide-arrow' color='secondary' caret outline>
                        <Share2 size={14} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem tag='a' href='https://www.facebook.com/supertrampAshik' target="_blank">
                          <Facebook size={14} />
                        </DropdownItem>
                        <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                          <Twitter size={14} />
                        </DropdownItem>
                        <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                          <Youtube size={14} />
                        </DropdownItem>
                        <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                          <Instagram size={14} />
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
                <Row className='text-center'>
                  <Col className='mb-4 mb-md-0' md='4' xs='12'>
                    <div className='w-75 mx-auto'>
                      <Award />
                      <h4 className='mt-2 mb-1'>100% Original</h4>
                      <CardText>Show me a man with a tattoo and I'll show you a man with an interesting past.</CardText>
                    </div>
                  </Col>
                  <Col className='mb-4 mb-md-0' md='4' xs='12'>
                    <div className='w-75 mx-auto'>
                      <Clock />
                      <h4 className='mt-2 mb-1'>LifeTime Memory</h4>
                      <CardText>My body is my journal, and my tattoos are my story.</CardText>
                    </div>
                  </Col>
                  <Col className='mb-4 mb-md-0' md='4' xs='12'>
                    <div className='w-75 mx-auto'>
                      <Shield />
                      <h4 className='mt-2 mb-1'>1 Year Warranty</h4>
                      <CardText>Wear your heart on your skin in this life.</CardText>
                    </div>
                  </Col>
                </Row>
            </CardBody>
          </Card>
          <RelatedDesigns />
      </div>
    </Fragment>
  )
}

export default Details
