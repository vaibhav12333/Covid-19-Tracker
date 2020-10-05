import React, { Component }from 'react'
import {Table,} from 'reactstrap'
import {fetchStateData} from '../api'
import CountUp from 'react-countup'

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
            console.log(this.state.data.data)
            if(this.props.data.provinceState==null){
                this.props.data.provinceState = this.props.country
            }
        return(
            <Table dark>
                <thead className="text-left">
                    <td>State</td>
                    <td>Confirmed</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                    
                </thead>
                <tbody>
                     {this.props.data.map((data, key)=>{
                         return <tr className="text-left">
                             <td >{data.provinceState}</td>
                             <td><CountUp start={0} end={data.confirmed} separator="," duration={1} /></td>
                             <td><CountUp start={0} end={data.active} separator="," duration={1} /></td>
                                <td><CountUp start={0} end={data.recovered} separator="," duration={1} /></td>
                             <td><CountUp start={0} end={data.deaths} separator="," duration={1} /></td>
                         </tr>
                     })}
                </tbody>
               
            </Table>
        )

    }
}
export default TableState