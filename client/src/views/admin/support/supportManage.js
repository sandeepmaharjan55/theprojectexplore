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

const AdminList = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // ** States
  const [modal, setModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);

 const columns = [
  {
    name: 'Id',
    selector: '_id',
    sortable: true
  },
    {
      name: 'Full Name',
      selector: 'fullName',
      sortable: true
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true
    },
    {
      name: 'Message',
      selector: 'message',
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
          item.fullName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.fullName.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) 
         

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

  const saveUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     const data = JSON.stringify(Object.fromEntries(formData));

     axios.post(`${config.baseUrl}/users/register`, 
    data, {
    headers: {
     "Content-Type": "application/json"
   }
 }
   
   )
   .then(function (response) {
        setModal(!modal)
        window.location.reload();
        toast.error(<Toast title="New User Saved" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  useState(() => {
    axios
    .get(`${config.baseUrl}/supportQuery/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      }
    })
      .then(response => {
        setData(response.data.data)
   
  }, [])
  });

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Support List  </CardTitle>
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

export default AdminList
