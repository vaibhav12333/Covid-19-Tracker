import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country)=>{
    let changeableUrl = url
    if(country==='Global'){
        changeableUrl = url
    }
    else{
                changeableUrl = `${url}/countries/${country}`

    }
    try{
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl) 
        const modifiedData = {
             confirmed,
            recovered,
            deaths,
            lastUpdate
            
        }
        return modifiedData
    }catch(error){
        console.log('failed to fetch')
    }
}


export const fetchCountries = async() =>{
   try{
    const countryData = await axios.get(`${url}/countries`)
    const countryName = countryData.data.countries.map((country)=>country.name)
    return countryName
}
    catch(error){
        console.log(`can't load countries due to ${error}`)
    }
}
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
export const fetchDailyData = async () =>{
    try{
        const daily = await axios.get(`${url}/daily`)
        const dailyData = daily.data.map((data)=>({
            confirmed: data.confirmed.total,
            deaths: data.deaths.total,
            date: data.reportDate

        }))
        return dailyData
    }
    catch(err){
        console.log(`failed to fetch daily data due to ${err}`)
    }
}
 



































