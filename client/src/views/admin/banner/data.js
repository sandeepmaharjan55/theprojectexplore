
// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, UserPlus, Archive, Trash, Eye, Mail } from 'react-feather'
import { imageOverlay } from 'leaflet';

export let data

const saveBannerId = (parameter) => (event) => {
  //console.log("currentIdList=" + parameter)
 localStorage.setItem('bannerId', parameter); 
}
// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Flag',
    selector: 'flag',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Redirect Url',
    selector: 'redirectUrl',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Avatar', 
    selector: 'image',
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
                <DropdownItem href={'/artist/details?_id=' + row._id} onClick = {saveBannerId(row._id)}  >
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
