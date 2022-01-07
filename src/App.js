import logo from './logo.svg';
import React,{useState, useEffect} from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import { fetchData,fetchStateData } from './api/';
import Cards from "./Components/Cards/Card"
import CountryPicker from "./Components/CountryPicker/CountryPicker"
import TableState from "./Components/Table/index"

function App() {
  const [data,setdata] = useState({})
  const [stateData,setstateData] = useState({})
  const [country,setcountry] = useState(" ");
 useEffect(async () =>{
      const data = await fetchData();
      setdata(data);
   },[])
   const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    const stateData = await fetchStateData(country);
    setstateData(stateData.data)
    setdata(data)
    setcountry(country);
    console.log(stateData);

  }
  return (
    <div className="App">
     <Sidebar />
     <div className="body-case">
     <Cards data={data} />
     <CountryPicker handleCountryChange={handleCountryChange} />
     <TableState country={country} data={stateData} />

     </div>

    </div>
  );
}

export default App;
