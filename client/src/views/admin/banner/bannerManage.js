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
import DataTable from 'react-data-table-component'
import { ChevronDown, Trash, Check, X, File, Edit, Copy, Plus } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Row, Form, CustomInput,
  Col, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, UncontrolledTooltip
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const BannerList = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // ** States
  const [modal, setModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);

  const [bannerName, setBannerName] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('')
  const [bannerImage, setBannerImage] = useState();
  const [reload, setReload] = useState(new Date())


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setBannerName()
    setRedirectUrl()
    setModal(!modal)
  }


  const deleteBanner = (parameter) => {

    const formData = new FormData();
     formData.append('id', parameter)
     axios.post(`${config.baseUrl}/slideShow/remove`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Banner Deleted Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  const enableBanner = (parameter) => {

    const formData = new FormData();
     formData.append('id', parameter)
     formData.append('activeStatus', "true")
     axios.post(`${config.baseUrl}/slideShow/status`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Product Enabled Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }
  
  const handleConfirmTextEnable = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to Enable the Banner?',
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
        enableBanner(id);
      
      }
    })
  }


  const disableBanner = (parameter) => {

    const formData = new FormData();
     formData.append('id', parameter)
     formData.append('activeStatus', "false")
     axios.post(`${config.baseUrl}/slideShow/status`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Product Disabled Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }


  const handleConfirmTextDisable = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to Disable the Banner?',
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
        disableBanner(id);
      
      }
    })
  }


 const columns = [
    {
      name: 'Banner Name',
      selector: 'bannerName',
      sortable: true
    },
    {
        name: 'Redirect Url',
        selector: 'redirectUrl',
        sortable: true
    },
    {
      name: 'Banner Image',
      cell: row => {
        return (
          <div className='d-flex'>
            <ReactFancyBox
               image={'https://inksvilla.com/' + row.image}
               defaultThumbnailWidth= {50} 
               defaultThumbnailHeight= {50}/>
          </div>
        )
      }
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
          <Link onClick={(e) => deleteBanner(row._id)}>
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

  const saveBanner = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     formData.append('image', bannerImage)
     axios.post(`${config.baseUrl}/slideShow/store`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Banner Uploaded Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  useEffect(() => {
    axios
    .get(`${config.baseUrl}/slideShow/list`, {
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
          <CardTitle tag='h4'>Banner Management  </CardTitle>

<Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setModal(!modal)}>Add New Banner</ModalHeader>
          <Form className='auth-register-form mt-2' onSubmit={saveBanner}>

          <ModalBody>
            <FormGroup>
            {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='bannerName'>Banner Name:</Label>
              <Input type='text' value={bannerName} required onChange={(e) => setBannerName(e.target.value)} name="bannerName" id='bannerName' />
            </FormGroup>
            <FormGroup>
              <Label for='redirectUrl'>Redirect Url:</Label>
              <Input type='text' value={redirectUrl} required onChange={(e) => setRedirectUrl(e.target.value)} name="redirectUrl" id='redirectUrl'/>
            </FormGroup>
            <FormGroup>
              <Label for='image'>Image</Label>
              <CustomInput style={{ zIndex: '5000' }} type='file' onChange={(e) => setBannerImage(e.target.files[0])} />
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
              <span className='align-middle ml-50'>Add New Banner</span>
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

export default BannerList
