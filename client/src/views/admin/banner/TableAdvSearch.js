// ** React Imports
import { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
// ** Table Columns
import { data, advSearchColumns } from './data'
import config from "../../../configs/config";
import Sidebar from './Sidebar';
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardBody, CardTitle, Input, Label, FormGroup, Row, Col, Button, Media} from 'reactstrap'

const userData = JSON.parse(localStorage.getItem('userData'));

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const DataTableAdvSearch = () => {
  // ** States
  const [searchSaccosName, setSearchSaccosName] = useState('')
  const [searchEmail, setSearchEmail] = useState('')
  const [searchMobileNo, setSearchMobileNo] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState([])
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Function to handle Pagination
  const handlePagination = page => setCurrentPage(page.selected)

  // ** Table data to render
  const dataToRender = () => {
    
    if (
      searchSaccosName.length ||
      searchEmail.length ||
      searchMobileNo.length 
    
    ) {
      return filteredData
    } else {
      return data
    }
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={dataToRender().length / 7 || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'}
    />
  )


  useState(() => {
    axios
    .get(`${config.baseUrl}/slideShow/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        //Authorization:  userData.token
      }
    
    })
      .then(response => {
        console.log(JSON.stringify(response.data))
        setData(response.data.data)
   
  }, [])
  });

  // ** Function to handle name filter
  const handleNameFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchSaccosName.length || searchEmail.length || searchMobileNo.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchSaccosName(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.name.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.name.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchSaccosName(value)
    }
  }


  // ** Function to handle post filter
  const handleEmailFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchSaccosName.length || searchMobileNo.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchEmail(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.email.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.email.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchEmail(value)
    }
  }

  // ** Function to handle city filter
  const handleMobileNoFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchSaccosName.length || searchEmail.length || searchMobileNo.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchMobileNo(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.contactNo.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.contactNo.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchMobileNo(value)
    }
  }

  return (
    <Fragment>
      <Card>
        
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Banner List</CardTitle>
          <Button.Ripple className='mt-1 mb-50 ml-10' color='primary' onClick={toggleSidebar}>
            Add New Banner
        </Button.Ripple>
        </CardHeader>
        
        <CardBody>
          <Row form className='mt-1 mb-50'>
            <Col lg='3' md='6'>
              <FormGroup>
                <Label for='name'>Banner Name:</Label>
                <Input id='name' placeholder='' value={searchSaccosName} onChange={handleNameFilter} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <DataTable
          noHeader
          pagination
          columns={advSearchColumns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default DataTableAdvSearch
