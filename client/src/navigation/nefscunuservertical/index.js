import { LogOut, Home, User, Circle, Columns, ShoppingCart, BarChart, Heart, Sliders, Wind, HelpCircle, Navigation } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'users',
    title: 'User Management',
    icon: <User size={20} />,
    children: [
      {
        id: 'adminList',
        title: 'Admins',
        icon: <Circle size={12} />,
        navLink: '/admin/admins'
      },
      {
        id: 'artistList',
        title: 'Artists',
        icon: <Circle size={12} />,
        navLink: '/admin/artist'
      },
      {
        id: 'clientList',
        title: 'Clients',
        icon: <Circle size={12} />,
        navLink: '/admin/client'
      }
    ]
  },  
  {
    id: 'category',
    title: 'Category',
    icon: <Columns size={20} />,
    children: [
      {
        id: 'categorylist',
        title: 'Category List',
        icon: <Circle size={12} />,
        navLink: '/admin/category'
      }
    ]
  },
  {
    id: 'designs',
    title: 'Designs',
    icon: <Heart size={20} />,
    children: [
      {
        id: 'verifiedList',
        title: 'Verified List',
        icon: <Heart size={12} />,
        navLink: '/admin/designs/verifiedDesigns'
      },
      {
        id: 'unverifiedList',
        title: 'Un-Verified List',
        icon: <Heart size={12} />,
        navLink: '/admin/designs/unverifiedDesigns'
      }
    ]
  },
  {
    id: 'banner',
    title: 'Banner',
    icon: <Columns size={20} />,
    children: [
      {
        id: 'bannerlist',
        title: 'Banner List',
        icon: <Circle size={12} />,
        navLink: '/admin/banner'
      }
    ]
  },

  {
    id: 'Purchases',
    title: 'Purchases ',
    icon: <ShoppingCart size={12} />,
    navLink: '/admin/purchase'
  },
  {
    id: 'Notification',
    title: 'Notification ',
    icon: <Navigation size={12} />,
    navLink: '/admin/notification'
  },
  {
    id: 'SupportList',
    title: 'Support ',
    icon: <HelpCircle size={12} />,
    navLink: '/admin/support'
  
},
  {
    id: 'termsandcondition',
    title: 'Terms & Condition ',
    icon: <Sliders size={12} />,
    navLink: '/admin/terms'
  },
  {
    id: 'privacypolicy',
    title: 'Privacy Policy',
    icon: <Wind size={12} />,
    navLink: '/admin/privacy'
  },
  {
    id: 'newsfeedreported',
    title: 'News Feed',
    icon: <Wind size={12} />,
    navLink: '/admin/newsfeed'
  },
  {
    id: 'transaction',
    title: 'Transaction',
    icon: <Columns size={20} />,
    children: [
      {
        id: 'tattoo',
        title: 'Tattoo Appointment',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'tattoopaidlist',
            title: 'Paid List',
            icon: <Circle size={12} />,
            navLink: '/admin/transaction/tattoopaidlist'
          },
          {
            id: 'tattoounpaidlist',
            title: 'UnPaid List',
            icon: <Circle size={12} />,
            navLink: '/admin/transaction/tattoounpaidlist'
          }
        ]
      },
      {
        id: 'artist',
        title: 'Artist Appointment',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'artistpaidlist',
            title: 'Paid List',
            icon: <Circle size={12} />,
            navLink: '/admin/transaction/artistpaidlist'
          },
          {
            id: 'artistunpaidlist',
            title: 'UnPaid List',
            icon: <Circle size={12} />,
            navLink: '/admin/transaction/artistunpaidlist'
          }
        ]
      },
      {
        id: 'purchase',
        title: 'Purchase',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'purchasepaidlist',
            title: 'Paid List',
            icon: <Circle size={12} />,
            navLink: '/admin/transaction/purchasepaidlist'
          },
          {
            id: 'purchaseunpaidlist',
            title: 'UnPaid List',
            icon: <Circle size={12} />,
            navLink: '/admin/transaction/purchaseunpaidlist'
          }
        ]
      }
    ]
  },
  {
    title: 'Logout',
    navLink: '/admin/logout',
    module_name:'',
    icon: <LogOut size={20} />
  }
]
