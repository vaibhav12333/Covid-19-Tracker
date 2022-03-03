import React,{useState,useEffect} from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart,Bar,Doughnut }            from 'react-chartjs-2'
const CovidChart = ({ data: { confirmed, recovered, deaths, lastUpdate } })=>{
    const [animate,setanimate] = useState(true);

    useEffect(()=>{
            setanimate(true);
    },[])
    if(!confirmed) {
       return(
           <h1>Loading...</h1>
       )
   }
   else{
   
    const data={
        labels: ['Confirmed','Recovered','Deaths'],
        datasets:[
            {
             data:[confirmed.value,confirmed.value-deaths.value, deaths.value],
                backgroundColor:[
                    'orange','yellow','red'
                ],
                borderWidth:1,
            }
        ]
    };
   
   return(
       <>
            <Doughnut
                data={data}
                options={{
                    animationEnabled: animate,
                    theme: "dark2",
                    plugins:{
                        title:{
                            display:true,
                            text:"Coronavirus cases"
                        }
                    }
                }}
            />
       </>
   )
            }
}
export default CovidChart;