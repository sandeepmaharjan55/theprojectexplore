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

const DestinationList = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // ** States
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);

  const [name, setDestinationName] = useState('');
  const [subName, setDestinationSubName] = useState('');
  const [desC, setDestinationDesc] = useState('');
  const [isRecommended, setDestinationIsRecommended] = useState('');
  const [type, setDestinationType] = useState('');
  const [difficulty, setDestinationDifficulty] = useState('');
  const [minDays, setDestinationMinDays] = useState('');
  const [bestSeasons, setDestinationBestSeasons] = useState('');
  const [accomodation, setDestinationAccomodation] = useState('');
  const [maxAltitude, setDestinationMaxAltitude] = useState('');
  // const [slug, setSlug] = useState('')
  const [reload, setReload] = useState(new Date())


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setDestinationName()
    // setSlug()
    setModal(!modal)
  }
  // , row.subName, row.desC, row.isRecommended, row.type, row.difficulty, row.minDays, row.bestSeasons, row.accomodation, row.maxAltitude
  const handleEdit = (row) => {
    setId(row._id)
    setDestinationName(row.name)
    setDestinationSubName(row.subName)
    setDestinationDesc(row.desC)
    setDestinationIsRecommended(row.isRecommended)
    setDestinationType(row.type)
    setDestinationDifficulty(row.difficulty)
    setDestinationMinDays(row.minDays)
    setDestinationBestSeasons(row.bestSeasons)
    setDestinationAccomodation(row.accomodation)
    setDestinationMaxAltitude(row.maxAltitude)
    // setSlug(row.slug)
    setEditModal(!editModal)
  }

  const saveDestination = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     axios.post(`${config.baseUrl}/destination/store`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Destination Saved Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 404) toast.error(<Toast title={error.response.data.message} text={error.response.data.message} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  
  const editDestination = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
     axios.post(`${config.baseUrl}/destination/edit`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
        setEditModal(!editModal)
        setReload(new Date())
        toast.success(<Toast title="Destination Edited Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 404) toast.error(<Toast title={error.response.data.message} text={error.response.data.message} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  const deleteDestination = (parameter) => {
    const formData = new FormData();
     formData.append('id', parameter);
    // console.log(parameter);
     axios.post(`${config.baseUrl}/destination/delete`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
       }
     })
   .then(function (response) {
     console.log(response);
        //setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Destination Deleted Successfully!!" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });
  }

  const handleConfirmTextDelete = (id) => {
    return MySwal.fire({
      title: 'Are you sure you want to delete the Destination?',
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
        console.log(result.value);
        deleteDestination(id);
      
      }
    })
  }


 const columns = [
  {
    name: 'Destination_Name',
    selector: 'name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Description',
    selector: 'desC',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Dest_type',
    selector: 'type',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Difficulty',
    selector: 'difficulty',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Best_Seasons',
    selector: 'bestSeasons',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Accomodation',
    selector: 'accomodation',
    sortable: true,
    minWidth: '100px'
  },
  // {
  //   name: 'Is Recommended?',
  //   selector: 'isRecommended',
  //   sortable: true,
  //   minWidth: '100px'
  // },
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
          item.desC.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.desC.toLowerCase().includes(value.toLowerCase())
         

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
    .get(`${config.baseUrl}/destination/list`, {
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
          <CardTitle tag='h4'>Destination Management  </CardTitle>

<Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setModal(!modal)}>Add New Destination</ModalHeader>
          <Form className='auth-register-form mt-2' onSubmit={saveDestination}>
          <ModalBody>
          {/* <FormGroup>
             <Input  value={_id}  name="_id" id='_id' hidden/>
              <Label for='destinationInfo'>Destination Name:</Label>
              <Input type='text' value={DestinationName} required onChange={(e) => setDestinationName(e.target.value)} name="name" id='name' />
            </FormGroup> */}
            <FormGroup>
            <div className="d-flex justify-content-between">
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Destination Name:</Label>
              <Input class="form-control" type='text' value={name} required onChange={(e) => setDestinationName(e.target.value)} name="name" id='name' />
            {/* </FormGroup>
            <FormGroup> */}
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Destination Sub Name:</Label>
              <Input class="form-control" type='text' value={subName} required onChange={(e) => setDestinationSubName(e.target.value)} name="subName" id='subName' />
           </div>
            </FormGroup>
            <FormGroup>
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Description:</Label>
              {/* <Input type='text' value={desC} required onChange={(e) => setDestinationDesc(e.target.value)} name="desC" id='desC' /> */}
              <textarea class="form-control" type='text' value={desC} required onChange={(e) => setDestinationDesc(e.target.value)} name="desC" id='desC' >
  Hello there, this is some text in a text area
</textarea>
            {/* </FormGroup>
            <FormGroup> */}
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              
            </FormGroup>
            <FormGroup>
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Destination Type:</Label>
              {/* <Input type='text' value={type} placeholder='city / trekking' required onChange={(e) => setDestinationType(e.target.value)} name="type" id='type' />
               */}
       <select class="form-control" value={type} onChange={(e) => setDestinationType(e.target.value)} name="type" id='type' >
         <option value="city">City</option>
         <option value="trekking">Trekking</option>
        </select>
{/* <Input type="radio" value="city" name="type" checked="checked"/> City
<Input type="radio" value="trekking" name="type" /> Trekking */}
            {/* </FormGroup>
            <FormGroup> */}
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
                
            </FormGroup>
            <FormGroup>
            <div className="d-flex justify-content-between">
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>MinDays:</Label>
              <Input class="form-control" type='number' value={minDays} required onChange={(e) => setDestinationMinDays(e.target.value)} name="minDays" id='minDays' />
            {/* </FormGroup>
            <FormGroup> */}
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Best Seasons:</Label>
              <Input class="form-control" type='text' value={bestSeasons} required onChange={(e) => setDestinationBestSeasons(e.target.value)} name="bestSeasons" id='bestSeasons' />
          </div>
            </FormGroup>
            <FormGroup>
            <div className="d-flex justify-content-between">
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              {/* <Label for='destinationInfo'>Description:</Label>
              <Input type='text' value={desC} required onChange={(e) => setDestinationDesc(e.target.value)} name="desC" id='desC' /> */}
            {/* </FormGroup>
            <FormGroup> */}
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Accomodation:</Label>
              <Input class="form-control" type='text' value={accomodation} required onChange={(e) => setDestinationAccomodation(e.target.value)} name="accomodation" id='accomodation' />
            
              {/* <Label for='destinationInfo'>isRecommended:</Label>
              <Input type='text' value={isRecommended} required onChange={(e) => setDestinationIsRecommended(e.target.value)} name="isRecommended" id='isRecommended' /> */}
         <Label for='destinationInfo'>isRecommended:</Label>
          <select class="form-control" value={isRecommended} onChange={(e) => setDestinationIsRecommended(e.target.value)} name="isRecommended" id='isRecommended' >
         <option value="true">Yes</option>
         <option value="false">No</option>
        </select>
          </div>
            </FormGroup>
            <FormGroup>
            <div className="d-flex justify-content-between">
             {/* <Input  value={_id}  name="_id" id='_id' hidden/> */}
              <Label for='destinationInfo'>Max Altitude:</Label>
              <Input class="form-control" type='text' value={maxAltitude} required onChange={(e) => setDestinationMaxAltitude(e.target.value)} name="maxAltitude" id='maxAltitude' />
            {/* </FormGroup>
            <FormGroup> */}
              {/* <Label for='slug'>Slug:</Label>
              <Input type='text' value={slug} required onChange={(e) => setSlug(e.target.value)} name="slug" id='slug'/> */}
            <Label for='destinationInfo'>Difficulty:</Label>
              <Input class="form-control" type='text' value={difficulty} required onChange={(e) => setDestinationDifficulty(e.target.value)} name="difficulty" id='difficulty' />
    
            </div>
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
          <Form className='auth-register-form mt-2' onSubmit={editDestination}>
          <ModalBody>
            {/* <FormGroup>
             <Input  value={_id}  name="_id" id='_id' hidden/>
              <Label for='destinationInfo'>DestinationName:</Label>
              <Input type='text' value={DestinationName} required onChange={(e) => setDestinationName(e.target.value)} name="name" id='name' />
            </FormGroup> */}
            {/* <FormGroup>
              <Label for='slug'>Slug:</Label>
              <Input type='text' value={slug} required onChange={(e) => setSlug(e.target.value)} name="slug" id='slug'/>
            </FormGroup> */}
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
              <span className='align-middle ml-50'>Add New Destination</span>
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

export default DestinationList
