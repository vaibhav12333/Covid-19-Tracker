import React from 'react'
import {Line,Bar} from 'react-chartjs-2'

export const Graphs = (props) =>{

{/*       const lineChart = (
        dailyData.length?
        <Line 
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                label:'Infected',
                data: dailyData.map(({confirmed})=>confirmed)
                ,fill:true,
                borderColor: '#3333ff'
            },{
                label:'Deaths',
                data: dailyData.map(({deaths})=>deaths)
                ,fill:true,
                borderColor: 'rgba(255,0,0,0.5)',
                fill:true
            }]
        }}
        />:null
    ) */}
    const barchart = (
        props.confirmed?
         <Bar 
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:['blue','orange','red']
                ,data:[props.confirmed,props.recovered,props.deaths]
            }],
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:'Current state in ' + props.country}
        }}/>:null
    )
    return(
        <div className="col-md-6">
            {barchart}
        </div>
    )
}