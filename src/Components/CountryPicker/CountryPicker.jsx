import React,{Component}  from 'react';
import {fetchCountries} from '../../api'
import {Form,Input} from 'reactstrap';
class CountryPicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            
        }
    }
    async componentDidMount(){
        const countries = await fetchCountries()
        this.setState({ countries:countries})


        
    }

   
    render(){
    return(
    <div className="text-center mt-5 col-6 ml-5">
        <Form>
            <Input type="select" name="Country" onChange={this.props.handleChange}>
            <option>Global</option>
    {this.state.countries.map((prop,i)=><option key={i}>{prop}</option>)}
            </Input>
        </Form>
    </div>
        
    )}
}

export default CountryPicker