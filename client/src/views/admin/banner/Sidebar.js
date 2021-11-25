// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Fragment, useState, useEffect } from 'react'
import config from "@src/configs/config";
import {useHistory} from 'react-router-dom';
import { Button, FormGroup, Label, FormText, Media, CustomInput } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import Toast  from "@src/@core/components/Toast"
import { toast } from 'react-toastify'

const SidebarNewUsers = ({open, toggleSidebar}) => {
  // ** Function to handle form submit

  const userData = JSON.parse(localStorage.getItem('userData'));

  const history = useHistory();


  const handleSubmit = (e) => {
    event.preventDefault()
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append('name', name);
    formData.append('redirectUrl', url)
  
    console.log(datas);
    fetch(`${config.baseUrl}/slideShow/store`, {
      formData,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: userData.token
      }
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((data) => {
      console.log(data);
      history.push('/admin/banner')
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
              <Label for='bannerImage'>Banner Image</Label>
              <CustomInput type='file' id='image' name='image'  accept='image/*'/>
            </FormGroup>
        <FormGroup>
          <Label for='name'>Banner Name</Label>
          <AvInput name='name' id='name' placeholder='John Doe' required />
        </FormGroup>
        <FormGroup>
          <Label for='redirectUrl'>Redirect Url</Label>
          <AvInput name='redirectUrl' id='redirectUrl' placeholder='redirectUrl' required />
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
