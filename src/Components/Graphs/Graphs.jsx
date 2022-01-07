import React,{useState,useEffect} from "react";
import {Bar} from "react-chartjs-2"
import { fetchData } from "../../api";

const BarGraph = ()=>{
    const [data,setdata] = useState({})
   
     useEffect(() =>{
        const data =  fetchData();
        setdata(data);
        console.log(data)
     },[]) 
     const data1={
        labels: ['Confirmed','Recovered','Deaths'],
        datasets:[
            {
                label:'No. of Cases',
                data:[100,200,300],
                backgroundColor:[
                    'orange','blue','red'
                ],
            }
        ]
     }
    // if (!data.confirmed.value) {
    //     return 'Loading...';
    //   }
    return(
      
        <>
            <Bar 
                data={data1}
            />
        </>
    )

}
export default BarGraph;