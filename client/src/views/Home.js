import { Fragment, useContext, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { kFormatter } from '@utils'
import axios from 'axios'
import config from "@src/configs/config";
import Breadcrumbs from '@components/breadcrumbs'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import {
  Users,
  Columns,
  MessageSquare,
  ShoppingBag,
  Heart,
  Award,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon,
  Database,
  Calendar,
  Layers,
  DollarSign,
  Octagon,
  Tv,
  ShoppingCart,
  Voicemail,
  Gitlab,
  GitHub
} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'

const Home = () => {
  const context = useContext(ThemeColors)
  const [data, setData] = useState([])
  const userData = JSON.parse(localStorage.getItem('userData'));

  useState(() => {
    axios
    .get(`${config.baseUrl}/dashboard/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:  userData.token
      }
    
    })
      .then(response => {
        console.log(JSON.stringify(response.data))
        setData(response.data.data)
   
  }, [])
  });

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Project Explore' breadCrumbParent='Stats'  />

      <Row>
        {/* Stats With Icons */}
        <Col xl='3' md='3' sm='6'>
          <StatsVertical icon={<Gitlab color={'Green'} size={24} />} color='info' stats={data && data.artistCount} statTitle='Artist Count' />
        </Col>
        <Col xl='3' md='3' sm='6'>
          <StatsVertical icon={<GitHub color={'Brown'} size={24} />} color='warning' stats={data && data.clientCount} statTitle='Client Count' />
        </Col>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Columns color={'Blue'} size={24} />} color='primary' stats={data.categoryCount} statTitle='Category Count' />
        </Col>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Database color={'Violet'} size={24} />} color='info' stats={data.designCount} statTitle='Design Count' />
        </Col>
      </Row>
      <Row>
        <Col xl='4' md='4' sm='2'>
          <StatsVertical icon={<Calendar  color={'Blue'} size={24} />} color='primary' stats={data && data.designAppointmentCount} statTitle=' Design Appointment Count' />
        </Col>
        <Col xl='4' md='4' sm='2'>
          <StatsVertical icon={<ShoppingCart color={'Green'} size={24} />} color='info' stats={data && data.designPurchaseCount} statTitle=' Design Purchase Count' />
        </Col>
        <Col xl='4' md='4' sm='2'>
          <StatsVertical icon={<Layers size={24} color={'Brown'}  />} color='warning' stats={data && data.artistAppointmentCount} statTitle=' Artist Appointment Count' />
        </Col>
        </Row>
        <Row>
        <Col xl='2' md='3' sm='6'>
          <StatsVertical icon={<DollarSign size={24} />} color='primary' stats={data.currency} statTitle='Currency' />
        </Col>
        <Col xl='3' md='3' sm='6'>
          <StatsVertical icon={<DollarSign size={24} />} color='danger' stats={data.sentToArtistAmount} statTitle='Sent To Artist Amount' />
        </Col>
        <Col xl='3' md='3' sm='6'>
          <StatsVertical icon={<DollarSign color={'Green'} size={24} />} color='info' stats={data.inksEarning} statTitle='Inks Earning' />
        </Col>
        <Col xl='4' md='3' sm='6'>
          <StatsVertical icon={<DollarSign color={'Blue'} size={24} />} color='primary' stats={data.revenueAmount} statTitle='Revenue Amount' />
        </Col>
        </Row>
        <Row>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Octagon size={24} />} color='info' stats={data.storyCount} statTitle='Story Count' />
        </Col>
        <Col xl='3' md='4' sm='6'>
          <StatsVertical icon={<Tv size={24} />} color='primary' stats={data.newsfeedCount} statTitle='News Feed Count' />
        </Col>
        <Col xl='6' md='4' sm='6'>
          <StatsVertical icon={<Voicemail size={24} />} color='success' stats={data.supportQueryCount} statTitle='Support Query Count' />
        </Col>
        {/* Stats With Icons */}
      </Row>
    </Fragment>
  )
}

export default Home
