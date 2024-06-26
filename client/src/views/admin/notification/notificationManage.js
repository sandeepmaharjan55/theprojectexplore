// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Table Data & Columns
import axios, * as others from 'axios';
import config from "@src/configs/config";
import Toast  from "@src/@core/components/Toast"
import { toast } from 'react-toastify'
import Moment from 'moment';
import Select from 'react-select';
import { selectThemeColors } from '@utils';
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Edit, Copy, Plus } from 'react-feather'
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

const NotificationList = () => {

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


 const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true
    },
    {
        name: 'Description',
        selector: 'description',
        sortable: true
    },
    {
      name: 'Created Date',
      selector: 'createdDate',
      sortable: true
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
    .get(`${config.baseUrl}/firebasenotify/bothNotify/list`, {
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
          <CardTitle tag='h4'>Notification Management  </CardTitle>

<Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setModal(!modal)}>Send Notification</ModalHeader>
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
           
            <Button className='ml-2' color='primary' onClick={handleModal}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Send Notification</span>
            </Button>
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

export default NotificationList
