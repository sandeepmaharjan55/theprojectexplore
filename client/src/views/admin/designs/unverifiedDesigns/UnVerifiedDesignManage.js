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
import { ChevronDown, X, Check, FileText, File, Edit, Copy, Plus } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  UncontrolledTooltip,
  Input,
  Label,
  Row, Form, Badge,
  Col, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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

  const verifyDesign = (parameter) => {

    const formData = new FormData();
     formData.append('id', parameter)
     formData.append('isVerified', "true")
     formData.append('message', "verified")
     axios.post(`${config.baseUrl}/products/brand/verifyProduct`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Product Verified Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  const handleConfirmTextVerify = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to Verify the Design?',
      text: "",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Verify',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        verifyDesign(id);
      
      }
    })
  }

 const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Category',
    selector: 'category.name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Currency',
    selector: 'currency',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Appointment Price',
    selector: 'appointmentPrice',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Selling Price',
    selector: 'sellingPrice',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Images',
    cell: row => {
        return (
          <div className='d-flex'>
             <ReactFancyBox
                image={'https://inksvilla.com/' + row.imageName[0]}
                defaultThumbnailWidth= {50} 
                defaultThumbnailHeight= {50}/>
           </div>
         )
      }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <Link onClick={(e) => handleConfirmTextVerify(row._id)}>
            <Check color="green" id="enable" className="ml-1" size={23} />
            <UncontrolledTooltip placement='top' target="enable" >
       Verify
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
          item.title.toLowerCase().startsWith(value.toLowerCase()) ||
          item.userEmail.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.userEmail.toLowerCase().includes(value.toLowerCase())

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
    .get(`${config.baseUrl}/products/brand/uvList`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      }
    
    })
      .then(response => {
        setData(response.data.data)
   
  })
  }, [reload]);

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>UnVerified Designs</CardTitle>
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
