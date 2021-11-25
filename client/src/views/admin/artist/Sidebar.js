// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import config from "@src/configs/config";
import Select from 'react-select';
import {useHistory} from 'react-router-dom';
import { selectThemeColors } from '@utils';
import Toast  from "../../../@core/components/Toast";
import { Button, FormGroup, Label, FormText } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import InputPasswordToggle from '@components/input-password-toggle'
import { DomEvent } from 'leaflet';

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** Function to handle form submit
  const [role, setRole] = useState([])

  const userData = JSON.parse(localStorage.getItem('userData'));

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
   // setFormModal(true);
    const formData = new FormData(event.target)
   
     const datas = JSON.stringify(Object.fromEntries(formData))
    // setData(datas);
  
    console.log(datas);
    fetch(`${config.baseUrl}/users/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer:" + userData.token
      },
      body:datas
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((data) => {
      console.log(data);
      history.push('/user')
    })
    .catch((error) => {
      setLoading(false)
       if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
       else toast.error(<Toast title="Succesfully Saved" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })

    });

  }

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/userRole/getAllRole`)
      .then(response => setRole(response.data))
  }, [])

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
          <Label for='name'>Full Name</Label>
          <AvInput name='name' id='mane' placeholder='John Doe' required />
        </FormGroup>
        <FormGroup>
          <Label for='contactNo'>Contact No.</Label>
          <AvInput name='contactNo' id='contactNo' placeholder='johnDoe99' required />
        </FormGroup>
        <FormGroup>
          <Label for='adress'>Address</Label>
          <AvInput name='address' id='address' placeholder='New Baneshwor' required />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <AvInput type='email' name='email' id='email' placeholder='john.doe@example.com' required />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='gender'>Gender</Label>
          <AvInput name='gender' id='gender' placeholder='Male/Female' required />
        </FormGroup>
        <FormGroup>
          <Label for='userName'>UserName</Label>
          <AvInput name='username' id='username' placeholder='name23' required />
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>User Role</Label>
          <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`roleId`}
              name={`roleId`} 
              className='react-select'
              classNamePrefix='select'
              options={role}
              getOptionLabel={option => option['roleName']}
              
              getOptionValue= {option => option['roleId']}
              >
              </Select>
        </FormGroup>
        <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle name="password" required className='input-group-merge' id='register-password' />
          </FormGroup>
          <FormGroup>
                <Label className='form-label' for='register-password'>
                  Confirm Password
                </Label>
                <InputPasswordToggle required className='input-group-merge' id='register-password' />
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
