import React from 'react';
import {Card, CardTitle, CardText, CardHeader,CardBody,CardFooter} from 'reactstrap'
import styles from './Cards.module.css'

export const Cards = (props)=>{
    var nf = new Intl.NumberFormat();


    const [confirmed,recovered,deaths] = [props.confirmed,props.recovered,props.deaths].map((val)=>nf.format(val)) // "1,234,567,890"

    return(
       <div className="container">
           <div className="row">
               <div className="col-md-3 m-4">
               <Card>
                <CardHeader className={styles.headerConfirmed}>Infected</CardHeader>
            <CardBody>
    <CardTitle>{confirmed}</CardTitle>
            <CardText>{new Date(props.lastUpdate).toDateString()}</CardText>
            </CardBody>
                <CardFooter className={styles.footerConfirmed}>Confirmed cases of covid 19</CardFooter>
            </Card>
                </div>
                <div className="col-md-3 m-4">
               <Card>
                <CardHeader className={styles.headerRecovered}>Recovered</CardHeader>
            <CardBody>
    <CardTitle>{recovered}</CardTitle>
            <CardText>{new Date(props.lastUpdate).toDateString()}</CardText>
            </CardBody>
                <CardFooter className={styles.footerRecovered}>Recovered cases of covid 19</CardFooter>
            </Card>
                </div>
                <div className="col-md-3 m-4">
               <Card>
                <CardHeader className={styles.headerDeaths}>Deaths</CardHeader>
            <CardBody>
    <CardTitle>{deaths}</CardTitle>
            <CardText>{new Date(props.lastUpdate).toDateString()}</CardText>
            </CardBody>
                <CardFooter className={styles.footerDeaths}>Deaths cases of covid 19</CardFooter>
            </Card>
                </div>
           </div>
       </div>
    )
  
}


