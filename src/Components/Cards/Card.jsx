import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';
import {Spinner} from "reactstrap"

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <>
        <div className="container">
          <div className="row align-items-center justify-content-center" style={{"height":"100px"}}>
          <div className="col-4">
            <Spinner color="primary">
              Loading...
            </Spinner>
          </div>
          <div className="col-4">
            <Spinner color="Succcess">
              Loading...
            </Spinner>
          </div>
          <div className="col-4">
            <Spinner color="danger">
              Loading...
            </Spinner>
          </div>
          </div>
        </div>
      </>
    );
  }
console.log(confirmed)
  return (
    <div className={styles.container}>
        {/* <Typography gutterBottom variant="h4" component="h2">Global</Typography> */}
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
       <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={confirmed.value - deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of Recovered Cases "
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;