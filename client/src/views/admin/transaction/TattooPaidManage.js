// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Table Data & Columns
import axios, * as others from 'axios';
import config from "@src/configs/config";
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
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

const TattooPaidManage = () => {

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

 const columns = [
  {
    name: 'Product Image',
    cell: row => {
        return (
          <div className='d-flex'>
             <ReactFancyBox
                image={'https://inksvilla.com/' + row.product.imageName}
                defaultThumbnailWidth= {50} 
                defaultThumbnailHeight= {50}/>
           </div>
         )
      }
  },
  {
    name: 'Product Title ',
    selector: 'product.title',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Currency',
    selector: 'product.currency',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Product Selling Price',
    selector: 'product.sellingPrice',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Artist Name',
    selector: 'artist.name',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Product Image',
    cell: row => {
        return (
          <div className='d-flex'>
             <ReactFancyBox
                image={'https://inksvilla.com/' + row.artist.profilePicture}
                defaultThumbnailWidth= {50} 
                defaultThumbnailHeight= {50}/>
           </div>
         )
      }
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Currency',
    selector: 'currency',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Paid Status',
    selector: 'paidStatus',
    sortable: true,
    minWidth: '100px'
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
          item.product.title.toLowerCase().startsWith(value.toLowerCase()) ||
          item.artist.name.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.product.title.toLowerCase().includes(value.toLowerCase()) ||
          item.artist.name.toLowerCase().includes(value.toLowerCase())
         

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
    .get(`${config.baseUrl}/transaction/tattooappointment/paidlist`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      }
    
    })
      .then(response => {
        setData(response.data.data)
        console.log(response.data)
  })
  }, [reload]);

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Tattoo Appointment Paid List</CardTitle>
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

export default TattooPaidManage
