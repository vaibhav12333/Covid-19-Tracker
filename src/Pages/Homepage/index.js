import React,{useState,useEffect,Fragment} from "react";
import Sidebar from "../../Components/Sidebar/index"
import Cards from "../../Components/Cards/Card"
import CountryPicker from "../../Components/CountryPicker/CountryPicker"
import TableState from "../../Components/Table/index"
import CoviChart from "../../Components/Graphs/Graphs";
import { fetchData,fetchStateData,fetchNewData,fetchDailyData } from '../../api/index';



// import Graphs from "../../Components/Graphs/Graphs"
const covid  = "assets/covid.png"


const Home = (props)=>{
    const [data,setdata] = useState({})
    const [stateData,setstateData] = useState([])
    const [country,setcountry] = useState(" ");
    const [dailyData,setdailyData] = useState({});
    useEffect( () =>{
       const myApi = async()=>{
        const data = await fetchData();
        setdata(data);
       }
       myApi();
      
     },[])
     const handleCountryChange = async (country) => {
      if(country === 'Global')
      {
        const data = await fetchData();
      setdata(data)
      setstateData([])
  
    }
      else{
        const data = await fetchData(country);
        
        setdata(data)
        const dailyData = await fetchDailyData(country);
        setdailyData(dailyData) 
        const stateData = await fetchStateData(country);
        const newData = await fetchNewData(country);
        console.log(newData);
        setstateData(stateData.data)

        setcountry(country);
        console.log(stateData);
      }
    }
    return(
    <Fragment isdark={true}>
         <Sidebar active="Home"/>
     <div className="body-case">
     {/* <Login /> */}
     <Cards data={data} />
     <CountryPicker handleCountryChange={handleCountryChange} />
     <div className="container">
     <div className="row ">
      <div className="col-6">
        <TableState country={country} data={stateData} />
      </div>
      <div className="col-5">
        <CoviChart data={data} dailyData={dailyData} />
      </div>
     
     </div>
     </div>
     </div>
     </Fragment>
)
}

export default Home