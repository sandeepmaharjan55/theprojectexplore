import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { Bell, Check, X, AlertTriangle, Info } from 'react-feather'

const Toast = ({ title, text, type}) => {

  return (
    <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>

      {type === "Error" &&   <Avatar size='sm' color='danger' icon={<X size={12} />} /> }
      {type === "Success" &&  <Avatar size='sm' color='success' icon={<Check size={12} />} /> }
      {type === "Primary" &&  <Avatar size='sm' color='primary' icon={<Bell size={12} />} /> }
      {type === "Warning" &&  <Avatar size='sm' color='warning' icon={<AlertTriangle size={12} />} />}
      {type === "Info" &&   <Avatar size='sm' color='info' icon={<Info size={12} />} /> }
      
        <h6 className='toast-title'>{title}</h6>
      </div>
    
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
     {text}
      </span>
    </div>
  </Fragment>
  )
}

export default Toast
