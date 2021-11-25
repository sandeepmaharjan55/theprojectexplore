
// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, UserPlus, Archive, Trash, Eye, Mail } from 'react-feather'


export let data

 // ** Function to delete a category
 const saveProductId = (parameter) => (event) => {
   console.log("currentIdList=" + parameter)
  localStorage.setItem('currentId', parameter); 
}
// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Id',
    selector: '_id',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Title',
    selector: 'title',
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
    name: 'Verification',
    selector: 'verification.isVerified',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (

        <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href={'/designs/details?_id=' + row._id} onClick = {saveProductId(row._id)}>
                  <Eye className='mr-50' size={15} /> <span className='align-middle'>View Design</span>
                </DropdownItem>
                <DropdownItem >
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete Category</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
      )
    }
  }
 
]


export default advSearchColumns
