import React,{useState,useEffect} from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart,Bar,Doughnut,Line }            from 'react-chartjs-2'
const CovidChart = ({ data: { confirmed, recovered, deaths, lastUpdate },dailyData})=>{
    const [animate,setanimate] = useState(true);
    console.log(dailyData);
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
    const daily = {
        labels:dailyData.map((da)=>{
         let date = new Date(da.Date)
         return date.toDateString();
        }),
        datasets:[
            {
            label:'Cases',
            data: dailyData.map((date)=>{
                return date.Cases
            }),
            fill:false,
            borderColor: 'blue',
            borderWidth:0.2,
            tension: 0.1

        }
        ]
    }
   
   return(
       <>
            <Line 
            data={daily}
             />
            <div >
            <Doughnut
               
                data={data}
                options={{
                    animationEnabled: true,
                    theme: "dark2",
                    plugins:{
                        title:{
                            display:true,
                            text:"Coronavirus cases"
                        }
                    }
                }}
            />
            </div>
            
       </>
   )
            }
}
export default CovidChart;