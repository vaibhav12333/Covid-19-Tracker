import React, { Component } from 'react';
import {fetchData,fetchStateData} from '../api'
import {Cards} from './Cards/Cards'
import {Graphs} from './Graphs/Graphs'
import CountryPicker from './CountryPicker/CountryPicker'
import TableState from './Table'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            confirmed: [],
            deaths: [],
            lastUpdate: "",
            recovered:[],
            country:'Global',
            countries:[],
            data:[]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    async componentDidMount(){
            const data = await fetchData(this.state.country)
            console.log(data)
            this.setState({confirmed: data.confirmed, deaths: data.deaths, lastUpdate:data.lastUpdate,recovered:data.recovered})
            
        }
    handleChange= async(event)=>{
        const country = event.target.value
        this.setState({country:event.target.value})
        console.log(country)
        const fetchedData = await fetchData(country);
        console.log(country,fetchedData)
        this.setState({confirmed: fetchedData.confirmed, deaths: fetchedData.deaths, lastUpdate:fetchedData.lastUpdate,recovered:fetchedData.recovered})
        const data = await fetchStateData(country)
        this.setState({data:data.data})
        
    }     
        
    render(){
        
        return(
        <div>
        <div className="container ">
                     
            <CountryPicker handleChange={this.handleChange} />
            <Cards confirmed={this.state.confirmed.value} deaths={this.state.deaths.value} recovered={this.state.recovered.value} lastUpdate={this.state.lastUpdate}/>
            <TableState country={this.state.country} data={this.state.data} />
            <Graphs confirmed={this.state.confirmed.value} deaths={this.state.deaths.value} recovered={this.state.recovered.value} lastUpdate={this.state.lastUpdate} country={this.state.country}  />
        </div>
        </div>
        )
    }
}

export default Main