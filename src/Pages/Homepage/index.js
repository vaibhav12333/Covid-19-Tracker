import react,{useState,useEffect} from "react";
import Sidebar from "../../Components/Sidebar/index"
import Cards from "../../Components/Cards/Card"
import CountryPicker from "../../Components/CountryPicker/CountryPicker"
import TableState from "../../Components/Table/index"
import { fetchData,fetchStateData,fetchNewData } from '../../api/index';



import Graphs from "../../Components/Graphs/Graphs"
const covid  = "assets/covid.png"


const Home = (props)=>{
    const [data,setdata] = useState({})
    const [stateData,setstateData] = useState([])
    const [country,setcountry] = useState(" ");
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
        const stateData = await fetchStateData(country);
        const newData = await fetchNewData(country);
        console.log(newData);
        setstateData(stateData.data)
        setcountry(country);
        console.log(stateData);
      }
    }
    console.log(data)
    return(
    <>
         <Sidebar active="Home"/>
     <div className="body-case">
     {/* <Login /> */}
     <Cards data={data} />
     <CountryPicker handleCountryChange={handleCountryChange} />
     <div className="row align-items-center justify-content-center">
      <div className="col-8">
        <TableState country={country} data={stateData} />
      </div>
      <div className="col-5">
        {/* <Graphs data={data}  /> */}
      </div>
     
     </div>
     </div></>
)
}

export default Home