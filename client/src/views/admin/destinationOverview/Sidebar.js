// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import config from "@src/configs/config";
import Select from 'react-select';
import {useHistory} from 'react-router-dom';
import { selectThemeColors } from '@utils';
import { Button, FormGroup, Label, FormText } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import InputPasswordToggle from '@components/input-password-toggle'
import { DomEvent } from 'leaflet';
import Toast  from "@src/@core/components/Toast"
import ComponentSpinner from '@src/@core/components/spinner/Loading-spinner'
import { toast } from 'react-toastify'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** Function to handle form submit
  const [role, setRole] = useState([])
  const [loading, setLoading] = useState(false)

  const userData = JSON.parse(localStorage.getItem('userData'));

  const history = useHistory();

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
   // setFormModal(true);
    const formData = new FormData(event.target)
   
     const datas = JSON.stringify(Object.fromEntries(formData))
    // setData(datas);
  
    console.log(datas);
    fetch(`${config.baseUrl}/products/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      },
      body:datas
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((data) => {
      console.log(data);
      history.push('/admin/category')
    })
    .catch((error) => {
       setLoading(false)
       if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
       else toast.error(<Toast title="Succesfully Saved" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })

    });

  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='name'>Category Name</Label>
          <AvInput name='name' id='name' placeholder='Category A' required />
        </FormGroup>
          <FormGroup>
          <Label for='slug'>Slug</Label>
          <AvInput name='slug' id='slug' placeholder='slug-b' required />
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </AvForm>
    </Sidebar>
  )
}

export default SidebarNewUsers
