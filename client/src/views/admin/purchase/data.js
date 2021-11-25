
// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, UserPlus, Archive, Trash, Eye, Mail } from 'react-feather'
const userData = JSON.parse(localStorage.getItem('userData'));


export let data

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Product Name',
    selector: 'product.title',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'email',
    selector: 'email',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'price',
    selector: 'price',
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
                <DropdownItem >
                  <Eye className='mr-50' size={15} /> <span className='align-middle'>View Details</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
      )
    }
  }
 
]


export default advSearchColumns
