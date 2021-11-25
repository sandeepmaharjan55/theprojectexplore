// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Table Data & Columns
import axios, * as others from 'axios';
import config from "@src/configs/config";
import Toast  from "@src/@core/components/Toast"
import { toast } from 'react-toastify'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import FancyVideo from 'react-videojs-fancybox';
import DataTable from 'react-data-table-component'
import { ChevronDown, Trash, Printer, FileText, File, Edit, Copy, Plus } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Row, Form, Badge,
  Col, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup
} from 'reactstrap'

const ReportedFeedManage = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // ** States
  const [modal, setModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [reload, setReload] = useState(new Date())


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setTitle()
    setDescription()
    setModal(!modal)
  }


  const deleteReportFeed = (parameter) => {

    const formData = new FormData();
     formData.append('feedId', parameter)
     axios.post(`${config.baseUrl}/newsfeed/reportFeed/delete`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Post Deleted Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }


 const columns = [
  {
    name: 'Name',
    selector: 'userId.name',
    sortable: true
},
    {
      name: 'Caption',
      selector: 'caption',
      sortable: true
    },
    {
      name: 'Images',
      cell: row => {
        if (row.mediaType === 'image') {
          return (
            <div className='d-flex'>
               <ReactFancyBox
                  image={'https://inksvilla.com/' + row.images}
                  defaultThumbnailWidth= {50} 
                  defaultThumbnailHeight= {50}/>
             </div>
           )
        } else {
          return (
            <div className='d-flex' >
                <FancyVideo
            source={'https://inksvilla.com/' + row.videos}
            id={"video"}
            />
             </div>
           )
        }
        
      }
    },
    {
      name: 'Message',
      selector: 'report[0].message',
      sortable: true
    },
    {
      name: 'Created Date',
      selector: 'createdDate',
      sortable: true
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <Link onClick={(e) => deleteReportFeed(row._id)}>
          <Trash className="ml-1" color="red" size={23} />
          </Link>
        </div>
      )
    }
  }
  ]
 
  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.title.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.title.toLowerCase().includes(value.toLowerCase())
         

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  const sendNotification = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     const data = JSON.stringify(Object.fromEntries(formData));

     axios.post(`${config.baseUrl}/firebasenotify/bothNotify`, 
    data, {
    headers: {
     "Content-Type": "application/json",
     Authorization: userData.token
   }
 })
   .then(function (response) {
        setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Notification Successful!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  useEffect(() => {
    axios
    .get(`${config.baseUrl}/newsfeed/reportFeed/list`, {
      headers: {
        "Content-Type": "text/html",
        Authorization:  userData.token
      }
    })
      .then(response => {
        setData(response.data.data)
        //console.log(response.data)
   
  })
  }, [reload]);

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Reported Feed  </CardTitle>

<Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <Form className='auth-register-form mt-2' onSubmit={sendNotification}>

          <ModalBody>
            <FormGroup>
            <Input  value={_id}  name="_id" id='_id' hidden/>

              <Label for='title'>Title:</Label>
              <Input type='text' value={title} required onChange={(e) => setTitle(e.target.value)} name="title" id='title' placeholder=' Title' />
            </FormGroup>
            <FormGroup>
              <Label for='description'>Message:</Label>
              <Input type='textarea' value={description} required onChange={(e) => setDescription(e.target.value)} name="description" id='description' placeholder='Enter Message' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' type="submit">
              Save
            </Button>{' '}
          </ModalFooter>
          </Form>
        </Modal>
          <div className='d-flex mt-md-0 mt-1'>
          </div>
        </CardHeader>
        <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
         // selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          data={searchValue.length ? filteredData : data}
         
        />
      </Card>
      {/* <AddNewModal open={modal} handleModal={handleModal} /> */}
    </Fragment>
  )
}

export default ReportedFeedManage
