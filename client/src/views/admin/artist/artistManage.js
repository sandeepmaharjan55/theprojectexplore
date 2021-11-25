// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Table Data & Columns
import axios, * as others from 'axios';
import config from "@src/configs/config";
import Toast  from "@src/@core/components/Toast"
import { toast } from 'react-toastify'
import DataTable from 'react-data-table-component'
import { ChevronDown, X, Check} from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Row, UncontrolledTooltip, Badge,
  Col, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const ArtistList = () => {

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

  const enableArtist = (parameter) => {

    const formData = new FormData();
     formData.append('id', parameter)
     formData.append('status', "true")
     axios.post(`${config.baseUrl}/users/status`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Artist Enabled Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }
  
  const handleConfirmTextEnable = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to Enable the Artist?',
      text: "",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Enable',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        enableArtist(id);
      
      }
    })
  }
  const disableArtist = (parameter) => {
    const formData = new FormData();
     formData.append('id', parameter)
     formData.append('status', "false")
     axios.post(`${config.baseUrl}/users/status`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Artist Disabled Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }


  const handleConfirmTextDisable = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to Disable the Artist?',
      text: "",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Disable',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        disableArtist(id);
      
      }
    })
  }


 const columns = [
  {
    name: 'Artist Name',
    selector: 'name',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <Link onClick={(e) => handleConfirmTextEnable(row._id)}>
            <Check color="green" id="enable" className="ml-1" size={23} />
            <UncontrolledTooltip placement='top' target="enable" >
       Enable
      </UncontrolledTooltip>
            </Link>
          <Link onClick={(e) => handleConfirmTextDisable(row._id)}>
            <X color="red" id="disable" className="ml-1" size={23} />
            <UncontrolledTooltip placement='top' target="disable" >
       Disable
      </UncontrolledTooltip>
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
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.name.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.name.toLowerCase().includes(value.toLowerCase())
         

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


  useEffect(() => {
    axios
    .get(`${config.baseUrl}/users/artistOrClient/list/artist`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      }
    
    })
      .then(response => {
        setData(response.data)
  })
  }, [reload]);

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Artist Management </CardTitle>
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

export default ArtistList
