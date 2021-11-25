import { Mail, Home, User, Circle } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/saccos/dashboard'
  },
  {
    id: 'saccosProfile',
    title: 'Update Profile',
    icon: <Circle size={12} />,
    navLink: '/saccos-profile'
  }
  
]
