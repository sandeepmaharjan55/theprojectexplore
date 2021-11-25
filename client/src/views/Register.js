import { Fragment, useState  } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'


import config from "../configs/config";

const RegisterV2 = () => {
  const [skin, setSkin] = useSkin()
  const [disableMobile, setDisableMobile] = useState(false);
  const [verified, setVerified] = useState(false);
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [formModal, setFormModal] = useState(false)
  const history = useHistory();
  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const RememberMe = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }
  

 const handleSubmit = (event) => {
    event.preventDefault();
   // setFormModal(true);
    const formData = new FormData(event.target);
   
     const datas = JSON.stringify(Object.fromEntries(formData));
    // setData(datas);
  
    console.log(datas);
    fetch(`${config.baseUrl}/firm/firmInfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:datas
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem('userData', data);
      history.push('/home')
    })
    .catch((error) => {
      alert('error: ' + error)
     
    });
  }

 function checkMobile(mobile)  {

  fetch(`${config.baseUrl}/firm/user/checkmobile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:mobile
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    else return response.json();
  })
  .then((data) => {
    setFormModal(true);
    setMobile(mobile);
  })
  .catch((error) => {
    setFormModal(false);
   // setMobile('');
  });
  }

  const submitForm  = (event) => {
    
    const datas = {
      mobile,
      password
    }
    const data = JSON.stringify(datas);
    fetch(`${config.baseUrl}/firm/user/checkpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:data
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((data) => {
      setFormModal(false);
      setDisableMobile(true);
      setVerified(true);
    })
    .catch((error) => {
      alert('error: ' + error)
     
    });
  }
  return (
    <div className='auth-wrapper auth-v2'>
         <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Mobile Number Already Registered</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='otp'>Please Enter Your password to continue</Label>
              <InputPasswordToggle onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
            </FormGroup>
           
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={submitForm}>
              Verify
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' >
          <svg viewBox='0 0 139 95' version='1.1' height='28'>
            <defs>
              <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                <stop stopColor='#000000' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
              <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
            </defs>
            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                <g id='Group' transform='translate(400.000000, 178.000000)'>
                  <path
                    d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                    id='Path'
                    className='text-primary'
                    style={{ fill: 'currentColor' }}
                  ></path>
                  <path
                    d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                    id='Path'
                    fill='url(#linearGradient-1)'
                    opacity='0.2'
                  ></path>
                  <polygon
                    id='Path-2'
                    fill='#000000'
                    opacity='0.049999997'
                    points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                  ></polygon>
                  <polygon
                    id='Path-2'
                    fill='#000000'
                    opacity='0.099999994'
                    points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                  ></polygon>
                  <polygon
                    id='Path-3'
                    fill='url(#linearGradient-2)'
                    opacity='0.099999994'
                    points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
          <h2 className='brand-text text-primary ml-1'>Communication App</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='6' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='6' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Enroll Yourself
            </CardTitle>
            <CardText className='mb-2'>Make Communication easy and fun!</CardText>
            <Form className='auth-register-form mt-2' onSubmit={handleSubmit}>
            
              <Row>
              <Col md='6' sm='12'>
              <FormGroup>
                <Label className='form-label required' for='register-firmname'>
                  Firm Name *
                </Label>
              
                <Input  required type='text' name="firmName" id='register-firmname' placeholder='Abc Consultancy' autoFocus />
              </FormGroup>
            </Col>
              <Col md='6' sm='12'>
              <FormGroup>
                <Label className='form-label' for='panNo'>
                  PAN Number *
                </Label>
                <Input required type='number' id='panNo' name="panNo" placeholder='Pan No.'  />
              </FormGroup>
</Col>
</Row>

<Row>

<Col md='6' sm='12'>
<FormGroup>
          <Label for='country'>Country</Label>
          <Input type='select' name='country' id='country'>
            <option>Nepal</option>
          
          </Input>
        </FormGroup>
</Col>

<Col md='6' sm='12'>
<FormGroup>
          <Label for='Province'>Province</Label>
          <Input type='select' name='province' id='province'>
          <option>Please Select</option>
            <option>State No. 1</option>
            <option>State No. 2</option>
            <option>Bagmati</option>
            <option>Gandaki</option>
            <option>Lumbini</option>
            <option>Karnali</option>
            <option>Sudurpashchim</option>
          </Input>
        </FormGroup>
</Col>
</Row>
            
            <Row>

            <Col md='6' sm='12'>
            <FormGroup>
                <Label className='form-label' for='city'>
                 City
                </Label>
                <Input required type='text' id='city' name="city" placeholder='Address' />
              </FormGroup>
            </Col>

              <Col md='6' sm='12'>
              <FormGroup>
                <Label for='street'>Street</Label>
                <Input type='text' name='street' id='street' placeholder='Street' />
              </FormGroup>
            </Col>
           
            </Row>

          <Row>

            <Col md='6' sm='12'>
            <FormGroup>
                <Label className='form-label' for='contact-person'>
                 Contact Person
                </Label>
                <Input required type='text' id='contact-person' name='contactName' placeholder='Contact Person' />
              </FormGroup>
            </Col>

              <Col md='6' sm='12'>
              <FormGroup>
                <Label for='phone'>Phone No.</Label>
                <Input type='text' name='phone' id='phone' placeholder='Firm Phone No.' />
              </FormGroup>
            </Col>
           
            </Row>

            <Row>

            <Col md='6' sm='12'>
           
               
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Input required type='email' name='email' id='email' id='register-email' placeholder='john@example.com' />
              </FormGroup>
            </Col>

              <Col md='6' sm='12'>
              <FormGroup>
                <Label for='mobile'>Mobile No.</Label>
                <Input readOnly={disableMobile}  onBlur={(e) => checkMobile(e.target.value)} required type='number' name='mobile' id='mobile' placeholder='Mobile No.' />
              </FormGroup>
            </Col>
           
            </Row>
            {!verified &&
            <Row>

            <Col md='6' sm='12'>
            <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle name="password" required className='input-group-merge' id='register-password' />
              </FormGroup>
            </Col>

              <Col md='6' sm='12'>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Confirm Password
                </Label>
                <InputPasswordToggle required className='input-group-merge' id='register-password' />
              </FormGroup>
            </Col>
            </Row>}

              <FormGroup>
                <CustomInput required
                  type='checkbox'
                  className='custom-control-Primary'
                  id='remember-me'
                  label={<RememberMe />}
                />
              </FormGroup>
            
              <Button.Ripple type="submit" color='primary' block>
                Sign up
              </Button.Ripple>
              
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
           
           
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default RegisterV2
