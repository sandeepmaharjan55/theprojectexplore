// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Table Data & Columns
import axios, * as others from 'axios';
import config from "@src/configs/config";
import Toast from "@src/@core/components/Toast"
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

const DestinationOverviewList = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // ** States
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);

  const [destination, setDestinationName] = useState('');
  const [temperature, setDestinationOverviewTemperature] = useState('');
  const [tempUnit, setDestinationOverviewTempUnit] = useState('');
  const [cons, setDestinationOverviewCons] = useState('');
  const [pros, setDestinationOvervirePros] = useState('');
  const [languages, setDestinationOverviewLanguages] = useState('');
  const [religions, setDestinationOverviewReligions] = useState('');
  const [landscapes, setDestinationOverviewLandscapes] = useState('');
  const [tags, setDestinationOverviewTags] = useState('');
  const [internet, setDestinationOverviewInternet] = useState('');
  const [fun, setDestinationOverviewFun] = useState('');
  const [airQuality, setDestinationOverviewAirQuality] = useState('');
  const [humidity, setDestinationOverviewHumidity] = useState('');
  const [lackOfCrime, setDestinationOverviewLackOfCrime] = useState('');
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
    // setId(row._id)
    setDestinationName(row.destination)
    setDestinationOverviewTemperature(row.temperature)
    setDestinationOverviewTempUnit(row.tempUnit)
    setDestinationOverviewCons(row.cons)
    setDestinationOvervirePros(row.pros)
    setDestinationOverviewLanguages(row.languages)
    setDestinationOverviewLandscapes(row.landscapes)
    setDestinationOverviewTags(row.tags)
    setDestinationOverviewReligions(row.religions)
    setDestinationOverviewInternet(row.internet)
    setDestinationOverviewFun(row.fun)
    setDestinationOverviewAirQuality(row.airQuality)
    setDestinationOverviewHumidity(row.humidity)
    setDestinationOverviewLackOfCrime(row.lackOfCrime)
    // setSlug(row.slug)
    setEditModal(!editModal)
  }

  const saveDestination = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios.post(`${config.baseUrl}/destinationoverview/store`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
      }
    })
      .then(function (response) {
        setModal(!modal)
        setReload(new Date())
        toast.success(<Toast title="Destination Saved Successfully!!" text="" type="Success" />, { autoClose: 3000, hideProgressBar: true })
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) toast.error(<Toast title={error.response.data.message} text={error.response.data.message} type="Error" />, { autoClose: 3000, hideProgressBar: true })
        else toast.error(<Toast title="Some Error Occurred" text="" type="Error" />, { autoClose: 3000, hideProgressBar: true })

      });

  }

//edit part
  const editDestinationOverview = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios.post(`${config.baseUrl}/destinationoverview/edit`,
      formData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userData.token
      }
    })
      .then(function (response) {
        setEditModal(!editModal)
        setReload(new Date())
        toast.success(<Toast title="Destination Edited Successfully!!" text="" type="Success" />, { autoClose: 3000, hideProgressBar: true })
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) toast.error(<Toast title={error.response.data.message} text={error.response.data.message} type="Error" />, { autoClose: 3000, hideProgressBar: true })
        else toast.error(<Toast title="Some Error Occurred" text="" type="Error" />, { autoClose: 3000, hideProgressBar: true })

      });

  }
//delete part
  const deleteDestinationOverview = (parameter) => {
    const formData = new FormData();
    formData.append('id', parameter);
    // console.log(parameter);
    axios.post(`${config.baseUrl}/destinationoverview/delete`,
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
        toast.success(<Toast title="Destination Deleted Successfully!!" text="" type="Success" />, { autoClose: 3000, hideProgressBar: true })
      })
      .catch(function (error) {
        if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type="Error" />, { autoClose: 3000, hideProgressBar: true })
        else toast.error(<Toast title="Some Error Occurred" text="" type="Error" />, { autoClose: 3000, hideProgressBar: true })

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
        deleteDestinationOverview(id);

      }
    })
  }


  const columns = [
    {
      name: 'Destination_Name',
      selector: 'destination',
      sortable: true,
      minWidth: '200px'
    },
    {
      name: 'temperature',
      selector: 'temperature',
      sortable: true,
      minWidth: '100px'
    },
    {
      name: 'tempUnit',
      selector: 'tempUnit',
      sortable: true,
      minWidth: '100px'
    },
    {
      name: 'cons',
      selector: 'cons',
      sortable: true,
      minWidth: '100px'
    },
    {
      name: 'pros',
      selector: 'pros',
      sortable: true,
      minWidth: '100px'
    },
    {
      name: 'languages',
      selector: 'languages',
      sortable: true,
      minWidth: '100px'
    },
    {
      name: 'fun?',
      selector: 'fun',
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
      .get(`${config.baseUrl}/destinationoverview/list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData.token
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
          <CardTitle tag='h4'>Destination Overview Management  </CardTitle>

          <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
            <ModalHeader toggle={() => setModal(!modal)}>Add New Overview</ModalHeader>
            <Form className='auth-register-form mt-2' onSubmit={saveDestination}>
              <ModalBody>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>Destination Name:</Label>
                    {/* <Input class="form-control" type='text' value={name} required onChange={(e) => setDestinationName(e.target.value)} name="name" id='name' /> */}
                    <select class="form-control" onChange={(e) => setDestinationName(e.target.value)} name="destination" id='destination' >
                    <option value="61adb9a2cce5e32bd74d4204">Kathmandu</option>
                    <option value="61adc4fbcce5e32bd74d4205">Pokhara</option>
                    <option value="61add88e7c5797a823069fcb">Chitwan</option>
                  </select>
                    <Label for='destinationInfo'>Temperature:</Label>
                    <Input class="form-control" type='number' value={temperature} required onChange={(e) => setDestinationOverviewTemperature(e.target.value)} name="temperature" id='temperature' />
                  </div>
                </FormGroup>
                <FormGroup>

                  <Label for='destinationInfo'>Temp Unit:</Label>

                  <select class="form-control" value={tempUnit} onChange={(e) => setDestinationOverviewTempUnit(e.target.value)} name="tempUnit" id='tempUnit' >
                    <option value="centigrade">°C</option>
                    <option value="fahrenheit">°F</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>cons:</Label>
                    <Input class="form-control" type='text' value={cons} required onChange={(e) => setDestinationOverviewCons(e.target.value)} name="cons" id='cons' />
                    <Label for='destinationInfo'>Pros:</Label>
                    <Input class="form-control" type='text' value={pros} required onChange={(e) => setDestinationOvervirePros(e.target.value)} name="pros" id='pros' />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>languages:</Label>
                    <Input class="form-control" type='text' value={languages} required onChange={(e) => setDestinationOverviewLanguages(e.target.value)} name="languages" id='languages' />

                    <Label for='destinationInfo'>religions:</Label>
                    <Input class="form-control" type='text' value={religions} required onChange={(e) => setDestinationOverviewReligions(e.target.value)} name="religions" id='religions' />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>landscapes:</Label>
                    <Input class="form-control" type='text' value={landscapes} required onChange={(e) => setDestinationOverviewLandscapes(e.target.value)} name="landscapes" id='landscapes' />

                    <Label for='destinationInfo'>tags:</Label>
                    <Input class="form-control" type='text' value={tags} required onChange={(e) => setDestinationOverviewTags(e.target.value)} name="tags" id='tags' />

                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>internet:</Label>
                    <Input class="form-control" type='text' value={internet} required onChange={(e) => setDestinationOverviewInternet(e.target.value)} name="internet" id='internet' />

                    <Label for='destinationInfo'>Fun:</Label>
                    <Input class="form-control" type='text' value={fun} required onChange={(e) => setDestinationOverviewFun(e.target.value)} name="fun" id='fun' />

                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>airQuality:</Label>
                    <Input class="form-control" type='number' value={airQuality} required onChange={(e) => setDestinationOverviewAirQuality(e.target.value)} name="airQuality" id='airQuality' />

                    <Label for='destinationInfo'>humidity:</Label>
                    <Input class="form-control" type='number' value={humidity} required onChange={(e) => setDestinationOverviewHumidity(e.target.value)} name="humidity" id='humidity' />

                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label for='destinationInfo'>lackOfCrime:</Label>
                    <Input class="form-control" type='text' value={lackOfCrime} required onChange={(e) => setDestinationOverviewLackOfCrime(e.target.value)} name="lackOfCrime" id='lackOfCrime' />


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
            <Form className='auth-register-form mt-2' onSubmit={editDestinationOverview}>
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
              <span className='align-middle ml-50'>Add New Overview</span>
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

export default DestinationOverviewList
