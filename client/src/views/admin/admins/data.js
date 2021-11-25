
// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, UserPlus, Archive, Trash, Eye, Mail } from 'react-feather'

export let data


// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (

        <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow'  color='transparent' size='sm' caret> 
                
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/'  >
                  <Eye className='mr-50' size={15} /> <span className='align-middle'>View Details</span>
                </DropdownItem>
                <DropdownItem  onClick={e => (e, row.token)}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Disable Artist</span>
                </DropdownItem>
                <DropdownItem  onClick={e => (e, row.token)}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete Artist</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
      )
    }
  }
 
]

export default advSearchColumns
