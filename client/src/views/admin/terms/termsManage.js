// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
// ** Table Data & Columns
import axios, * as others from 'axios';
import config from "@src/configs/config";
import Toast  from "@src/@core/components/Toast"
import { toast } from 'react-toastify'
import { Editor } from '@tinymce/tinymce-react'
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Row, Form, Badge,
  Col, FormGroup
} from 'reactstrap'

const TermsList = ({ theme }) => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  // ** States
  const [modal, setModal] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [datas, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [_id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [reload, setReload] = useState(new Date())


  const saveTerms = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('description', description);
    const data = JSON.stringify(Object.fromEntries(formData));
    //alert(data)
     axios.post(`${config.baseUrl}/termsandconditions/edit`, 
    data, {
    headers: {
     "Content-Type": "application/json; charset=utf-8",
     Authorization:  userData.token
   }
 }
   
   )
   .then(function (response) {
        setReload(new Date())
        toast.success(<Toast title="New Terms Saved" text="" type ="Success"/>, { autoClose: 3000, hideProgressBar: true })
   })
   .catch(function (error) {
      if (error.response && error.response.status === 400) toast.error(<Toast title={error.response.data.message} text={error.response.data.errors.Error} type ="Error"/>, { autoClose: 3000, hideProgressBar: true })
      else toast.error(<Toast title="Some Error Occurred" text="" type ="Error"/>, { autoClose: 3000, hideProgressBar: true })

   });

  }

  useState(() => {
    axios
    .get(`${config.baseUrl}/termsandconditions/fetch`, {
      headers: {
        "Content-Type": "application/json"
        // Authorization:  userData.token
      }
    })
      .then(response => {
        setData(response.data.data)
        console.log(response.data.data)
   
  }, [])
  });

  return (
    <Fragment>
      <Card>
          <Form className='auth-register-form mt-2' onSubmit={saveTerms}>
          <FormGroup tag={Col} md='12' >
            <Input  value={datas && datas._id}  name="id" id='_id' hidden/>
              <Label style={{fontWeight:'bold'}} for='fyYear'>Title:</Label>
              <Input type='text' value={datas && datas.title} required onChange={(e) => setTitle(e.target.value)} name="title" id='title' placeholder='Title' />
            </FormGroup>
            <FormGroup tag={Col} md='12'>
            <Label style={{fontWeight:'bold'}}  for='fyYear'>Description:</Label>
            <Editor
            name='description'
            value= {datas && datas.description}
            onChange={(e) => setDescription(e.target.getContent())}
          apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
          init={{
            selector: 'textarea#full-featured-non-premium',
            plugins:
              'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
            imagetools_cors_hosts: ['picsum.photos'],
            menubar: 'file edit view insert format tools table help',
            toolbar:
              'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
            toolbar_sticky: true,
            autosave_ask_before_unload: true,
            autosave_interval: '30s',
            autosave_prefix: '{path}{query}-{id}-',
            autosave_restore_when_empty: false,
            autosave_retention: '2m',
            image_advtab: true,
            link_list: [
              { title: 'My page 1', value: 'https://www.tiny.cloud' },
              { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_list: [
              { title: 'My page 1', value: 'https://www.tiny.cloud' },
              { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_class_list: [
              { title: 'None', value: '' },
              { title: 'Some class', value: 'class-name' }
            ],
            importcss_append: true,
            file_picker_callback(callback, value, meta) {
              /* Provide file and text for the link dialog */
              if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', { text: 'My text' })
              }

              /* Provide image and alt text for the image dialog */
              if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' })
              }

              /* Provide alternative source and posted for the media dialog */
              if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' })
              }
            },
            templates: [
              {
                title: 'New Table',
                description: 'creates a new table',
                content:
                  '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
              },
              { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
              {
                title: 'New list with dates',
                description: 'New List with dates',
                content:
                  '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
              }
            ],
            template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
            height: 500,
            image_caption: true,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_noneditable_class: 'mceNonEditable',
            toolbar_mode: 'sliding',
            contextmenu: 'link image imagetools table',
            skin: theme === 'dark' ? 'dark' : undefined,
            content_css: theme === 'dark' ? 'dark' : undefined
          }}
        />
        <Button className = 'mt-2' color='primary' type="submit">
              Save
            </Button>{' '}
        </FormGroup>
          </Form>
      </Card>
    </Fragment>
  )
}

export default TermsList
