import React, { useEffect,useState }from 'react'
import {Table,} from 'reactstrap'
import {fetchStateData} from '../../api/index'
import CountUp from 'react-countup'
import {useSelector} from "react-redux";
import styled from "styled-components"

const Wrapper = styled.div`
    // border-radius: 10px !important;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    // padding:20px;

`
const TableState =(props)=>{
 const [data,setdata] = useState([]);
     useEffect(async()=>{
        
            const data = await fetchStateData(props.country);
            console.log(data)
            setdata({data:data.data})
        
     },[])
    
    
        
            const darkMode = useSelector((state)=>state.theme)

            if(props.data.provinceState==null){
                props.data.provinceState = props.country
            }
        return(
            <Wrapper >
          
            <Table dark={darkMode} striped={!darkMode} >
            <thead className={`text-left ${props.data.length < 2 ? "d-none":""}`}>
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                
            </thead>
            <tbody>
                 {props.data.map((data, key)=>{
                     return <tr className="text-left">
                         <td >{data.provinceState==null?props.country:data.provinceState}</td>
                         <td><CountUp start={0} end={data.confirmed} separator="," duration={1} /></td>
                         {/* <td><CountUp start={0} end={data.active} separator="," duration={1} /></td> */}
                            <td><CountUp start={0} end={data.confirmed - data.deaths} separator="," duration={1} /></td>
                         <td><CountUp start={0} end={data.deaths} separator="," duration={1} /></td>
                     </tr>
                 })}
            </tbody>
           
        </Table>
            </Wrapper>
        )

    }

export default TableState