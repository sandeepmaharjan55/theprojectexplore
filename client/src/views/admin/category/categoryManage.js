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
  const [editModal, setEditModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);

  const [categoryName, setCategoryName] = useState('');
  const [slug, setSlug] = useState('')
  const [reload, setReload] = useState(new Date())


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setCategoryName()
    setSlug()
    setModal(!modal)
  }

  const handleEdit = (row) => {
    setId(row._id)
    setCategoryName(row.name)
    setSlug(row.slug)
    setEditModal(!editModal)
  }

  const saveCategory = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     axios.post(`${config.baseUrl}/products/category`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Category Saved Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 404) toast.error(<Toast title={error.response.data.message} text={error.response.data.message} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  
  const editCategory = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     axios.post(`${config.baseUrl}/products/category/edit`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        setEditModal(!editModal)
        setReload(new Date())
        toast.success(<Toast title="Category Edited Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 404) toast.error(<Toast title={error.response.data.message} text={error.response.data.message} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  const deleteCategory = (parameter) => {
    const formData = new FormData();
     formData.append('ids', parameter)
     axios.post(`${config.baseUrl}/products/category/delete`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Category Deleted Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });
  }

  const handleConfirmTextDelete = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to delete the Category?',
      text: "",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        deleteCategory(id);
      
      }
    })
  }


 const columns = [
  {
    name: 'Category Title',
    selector: 'name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Slug',
    selector: 'slug',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
         <Link onClick={(e) => handleEdit(row)}>
            <Edit color="green" id="enable" className="ml-1" size={23} />
            <UncontrolledTooltip placement='top' target="enable" >
       Edit
      </UncontrolledTooltip>
        </Link>
        <Link onClick={(e) => handleConfirmTextDelete(row._id)}>
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
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.slug.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.slug.toLowerCase().includes(value.toLowerCase())
         

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
    .get(`${config.baseUrl}/products/category/list`, {
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
          <CardTitle tag='h4'>Banner Management  </CardTitle>

<Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setModal(!modal)}>Add New Banner</ModalHeader>
          <Form className='auth-register-form mt-2' onSubmit={saveCategory}>
          <ModalBody>
            <FormGroup>
             <Input  value={_id}  name="_id" id='_id' hidden/>
              <Label for='bannerName'>CategoryName:</Label>
              <Input type='text' value={categoryName} required onChange={(e) => setCategoryName(e.target.value)} name="name" id='name' />
            </FormGroup>
            <FormGroup>
              <Label for='slug'>Slug:</Label>
              <Input type='text' value={slug} required onChange={(e) => setSlug(e.target.value)} name="slug" id='slug'/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' type="submit">
              Save
            </Button>{' '}
          </ModalFooter>
          </Form>
        </Modal>

        {/* to edit another modal is added */}
        <Modal isOpen={editModal} toggle={() => setEditModal(!editModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setEditModal(!editModal)}>Edit Banner</ModalHeader>
          <Form className='auth-register-form mt-2' onSubmit={editCategory}>
          <ModalBody>
            <FormGroup>
             <Input  value={_id}  name="_id" id='_id' hidden/>
              <Label for='bannerName'>CategoryName:</Label>
              <Input type='text' value={categoryName} required onChange={(e) => setCategoryName(e.target.value)} name="name" id='name' />
            </FormGroup>
            <FormGroup>
              <Label for='slug'>Slug:</Label>
              <Input type='text' value={slug} required onChange={(e) => setSlug(e.target.value)} name="slug" id='slug'/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' type="submit">
              Edit
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
