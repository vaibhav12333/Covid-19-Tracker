import logo from './logo.svg';
import React,{useState, useEffect} from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import { fetchData,fetchStateData } from './api/';
import Cards from "./Components/Cards/Card"
import CountryPicker from "./Components/CountryPicker/CountryPicker"
import TableState from "./Components/Table/index"
import Graphs from "./Components/Graphs/Graphs"

function App() {
  const [data,setdata] = useState({})
  const [stateData,setstateData] = useState([])
  const [country,setcountry] = useState(" ");
 useEffect(async () =>{
      const data = await fetchData();
      setdata(data);
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
      setstateData(stateData.data)
      setcountry(country);
      console.log(stateData);
    }

    

  }
  console.log(data)
  return (
    <div className="App">
     <Sidebar />
     <div className="body-case">
     <Cards data={data} />
     <CountryPicker handleCountryChange={handleCountryChange} />
     <div className="row align-items-center justify-content-center">
      <div className="col-8">
      <TableState country={country} data={stateData} />

      </div>
      {/* <div className="col-5">
        <Graphs data={data}  />
      </div> */}
     
     </div>
     </div>

    </div>
  );
}

export default App;
