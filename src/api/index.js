import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } 
  catch (error) {
    return error;
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async (country) => {
  let changeableUrl = 'https://api.covid19api.com/total/dayone/country/india/status/confirmed';

  if (country) {
    changeableUrl = `https://api.covid19api.com/total/dayone/country/${country}/status/deaths`;
  }
  try {
      const { data } = await axios.get(changeableUrl);
      return data;
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
export const fetchStateData = async(country)=>{
  let stateUrl = `${url}/countries/${country}/confirmed`
   try{
       const data = await axios.get(stateUrl)
       const stateCase = {
           state: data.data.map((da)=>da.provinceState),
           confirmed: data.data.map((da)=>da.confirmed), 
           deaths: data.data.map((da)=>da.deaths) ,
           recovered: data.data.map((da)=>da.recovered)
       }
       return data

   }catch(err){
       console.log(err)
   }
}


export const fetchNewData = async (country) =>{
  try{
      const daily = await axios.get(`https://api.covid19api.com/summary`)
      // const dailyData = daily.data.map((data)=>({
      //     confirmed: data.confirmed.total,
      //     deaths: data.deaths.total,
      //     date: data.reportDate

      // }))
      const dailyData = daily.data.Countries
      .filter((coun)=>{return coun.Country === country})
      return dailyData;
  }
  catch(err){
      console.log(`failed to fetch daily data due to ${err}`)
  }
}