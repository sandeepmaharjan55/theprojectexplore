const router = require("express").Router();
const isEmpty = require("../../services/validation/is-empty");
const schedule = require('node-schedule');
const fetch = require('node-fetch');

var AQI_API_KEY = process.env.AQI_API_KEY;

//city names
// Siddharthanagar, Western Region
// Nepalgunj, Mid Western
// Kirtipur, Central Region
// Kathmandu, Central Region
// Pokhara, Western Region
// Birganj, Central Region
// Narayani, Central Region
// Biratnagar, Eastern Region
// Hetauda, Central Region
// Dhankuta, Eastern Region

// second (0 - 59, OPTIONAL) minute (0 - 59) hour (0 - 23) day of month (1 - 31) month (1 - 12) day of week (0 - 7) (0 or 7 is Sun)
const job = schedule.scheduleJob('23 0 * * *', async (req, res) =>{
    let dat= await fetch('http://api.airvisual.com/v2/city?'+new URLSearchParams({
      city: 'Kathmandu',  
      state: 'Central Region',
      country: 'Nepal',
      key: AQI_API_KEY,
    }))
    .then(res => res.json());
    if(!isEmpty(dat)){
      let data = dat.data;
      //AQI
      let aqi_time_stamp = data.current.pollution.ts;
      let aqi_data_us = data.current.pollution.aqius;
      let aqi_from_usStation = data.current.pollution.mainus;
      let aqi_data_china = data.current.pollution.aqicn;
      let aqi_from_chinaStation = data.current.pollution.maincn;
      //Weather
      let weather_time_stamp = data.current.weather.ts;
      let weather_tp = data.current.weather.tp;
      let weather_pr = data.current.weather.pr;
      let weather_hu = data.current.weather.hu;
      let weather_ws = data.current.weather.ws;
      let weather_wd = data.current.weather.wd;
      let weather_icon = data.current.weather.ic;
      //location
      let aqi_city = data.city;
      let aqi_state = data.state;
      let aqi_country = data.country;
      let aqi_location = data.location;
      let aqi_location_type = data.location.type;
      let aqi_location_coordinate = data.location.coordinates;
     
      console.log(data);
    }
});

module.exports = router;
