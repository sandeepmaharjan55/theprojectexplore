
// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, UserPlus, Archive, Trash, Eye, Mail } from 'react-feather'

export let data

const saveClientId = (parameter) => (event) => {
  //console.log("currentIdList=" + parameter)
 localStorage.setItem('artistId', parameter); 
}
// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'id',
    selector: '_id',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Client Name',
    selector: 'name',
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
                <DropdownItem href={'/client/details?_id=' + row._id} onClick = {saveClientId(row._id)}  >
                  <Eye className='mr-50' size={15} /> <span className='align-middle'>View Details</span>
                </DropdownItem>
                <DropdownItem  onClick={e => (e, row.token)}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Disable Client</span>
                </DropdownItem>
                <DropdownItem  onClick={e => (e, row.token)}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete Client</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
      )
    }
  }
 
]

export default advSearchColumns
