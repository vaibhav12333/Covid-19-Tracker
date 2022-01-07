import React, { Component }from 'react'
import {Table,} from 'reactstrap'
import {fetchStateData} from '../../api/index'
import CountUp from 'react-countup'
import styled from "styled-components"

const Wrapper = styled.div`
    // border-radius: 10px !important;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    // padding:20px;

`

class TableState extends Component{
    constructor(props){
        super(props)
        this.state={
            
            data:[]
                
        }
    }
    async componentDidMount(){
        const data = await fetchStateData(this.props.country);
        console.log(data)
        this.setState({data:data.data})
    }
    render()
    
        {
            console.log(this.props.data)
            if(this.props.data.provinceState==null){
                this.props.data.provinceState = this.props.country
            }
        return(
            <Wrapper>
           {!this.props.data.length < 2?
            <Table striped >
            <thead className="text-left">
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                
            </thead>
            <tbody>
                 {this.props.data.map((data, key)=>{
                     return <tr className="text-left">
                         <td >{data.provinceState==null?this.props.country:data.provinceState}</td>
                         <td><CountUp start={0} end={data.confirmed} separator="," duration={1} /></td>
                         {/* <td><CountUp start={0} end={data.active} separator="," duration={1} /></td> */}
                            <td><CountUp start={0} end={data.confirmed - data.deaths} separator="," duration={1} /></td>
                         <td><CountUp start={0} end={data.deaths} separator="," duration={1} /></td>
                     </tr>
                 })}
            </tbody>
           
        </Table>:""}
            </Wrapper>
        )

    }
}
export default TableState