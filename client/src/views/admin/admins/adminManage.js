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

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')
  const [gender, setGender] = useState('')


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setName();
    setId();
    setAddress();
    setPhoneNumber();
    setGender();
    setRole();
    setUsername();
    setEmail();
    setPassword();
    setModal(!modal)
  }

  const handleEdit = (row) => {
    setName(row.name);
    setEmail(row.email);
    setRole(row.role);
    setId(row._id);
    setGender(row.gender);
    setAddress(row.address);
    setPhoneNumber(row.phoneNumber);
    setUsername(row.username);
    setPassword();
    setModal(!modal)
  }


 const columns = [
  {
    name: 'Id',
    selector: '_id',
    sortable: true
  },
    {
      name: 'Name',
      selector: 'name',
      sortable: true
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true
    },
    {
      name: 'Role',
      selector: 'role',
      sortable: true
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='d-flex'>
           <Link onClick={(e) => handleEdit(row)}>
            <Edit size={15} />
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
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.username.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.username.toLowerCase().includes(value.toLowerCase()) ||
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
    .get(`${config.baseUrl}/users/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      }
    })
      .then(response => {
        setData(response.data)
        console.log(response.data)
   
  }, [])
  });

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>User Management  </CardTitle>

<Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setModal(!modal)}>Add New User</ModalHeader>
          <Form className='auth-register-form mt-2' onSubmit={saveUser}>

          <ModalBody>
            <FormGroup>
            <Input  value={_id}  name="_id" id='_id' hidden/>

              <Label for='fyYear'>Name:</Label>
              <Input type='text' value={name} required onChange={(e) => setName(e.target.value)} name="name" id='name' placeholder=' Name' />
            </FormGroup>
            <FormGroup>
              <Label for='fyYear'>Email:</Label>
              <Input type='text' value={email} required onChange={(e) => setEmail(e.target.value)} name="email" id='email' placeholder=' Email' />
            </FormGroup>
            <FormGroup>
              <Label for='fyYear'>Role:</Label>
              <Input type='text' value={role} required onChange={(e) => setRole(e.target.value)} name="role" id='role' placeholder=' Role' />
            </FormGroup>
            <FormGroup>
              <Label for='fyYear'>Phone Number:</Label>
              <Input type='text' value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" id='phoneNumber' placeholder=' Phone Number' />
            </FormGroup>
            <FormGroup>
              <Label for='fyYear'>Address:</Label>
              <Input type='text' value={address} required onChange={(e) => setAddress(e.target.value)} name="address" id='address' placeholder=' Address ' />
            </FormGroup>
            <FormGroup>
              <Label for='fyYear'>Gender:</Label>
              <Input type='text' value={gender} required onChange={(e) => setGender(e.target.value)} name="gender" id='gender' placeholder=' Gender ' />
            </FormGroup>
            <FormGroup>
              <Label for='fyYear'>UserName:</Label>
              <Input type='text' value={username} required onChange={(e) => setUsername(e.target.value)} name="username" id='username' placeholder=' UserName ' />
            </FormGroup>
            <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle className='input-group-merge' value={password} required onChange={(e) => setPassword(e.target.value)} name="password" id='password' />
            </FormGroup>
            <FormGroup>
                <Label className='form-label' for='register-password'>
                  Confirm Password
                </Label>
                <InputPasswordToggle required className='input-group-merge' id='register-password' />
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
              <span className='align-middle ml-50'>Add New User</span>
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

export default AdminList
