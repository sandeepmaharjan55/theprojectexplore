
// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, UserPlus, Archive, Trash, Eye, Mail } from 'react-feather'
const userData = JSON.parse(localStorage.getItem('userData'));


export let data

 // ** Function to delete a category
 const clickMe = (parameter) => (event) => {
  // Do something
  console.log(parameter);
    fetch(`${config.baseUrl}/products/category/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      },
      parameter:{ids: parameter}
    })
    .then(response => response.json())
    .then(data => { 
      console.log(data);
    alert(data.message)
    })
}
// ** Table Adv Search Column
export const advSearchColumns = [
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

        <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/'  >
                  <Eye className='mr-50' size={15} /> <span className='align-middle'>Edit Category</span>
                </DropdownItem>
                <DropdownItem  onClick = {clickMe(row._id)}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete Category</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
      )
    }
  }
 
]


export default advSearchColumns
