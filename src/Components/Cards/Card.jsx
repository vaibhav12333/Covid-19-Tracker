import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import { useSelector } from "react-redux"; 
import {Spinner} from "reactstrap"
import styled from "styled-components"

const CardWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
  }
  
  .infected {
    border-bottom: 10px solid orange;
    border-radius: 10px !important;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    background:${props=>props.isDark?"black":"white"};
    color:${props=>props.isDark?"white":"black"};
  }
  
  .recovered{
    border-bottom: 10px solid rgba(0, 255, 0, 0.5);
    border-radius: 10px !important;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    background:${props=>props.isDark?"black":"white"};
    color:${props=>props.isDark?"white":"black"};
  }
  
  .deaths{
    border-bottom: 10px solid red;
    border-radius: 10px !important;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    background:${props=>props.isDark?"black":"white"};
    color:${props=>props.isDark?"white":"black"};
  }
  .MuiTypography-colorTextSecondary{
    color:${props=>props.isDark?"white":"black"};

  }
`
const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const darkMode = useSelector((state) => state.theme);  
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
 <CardWrapper isDark={darkMode}>
      <div className="container">
        {/* <Typography gutterBottom variant="h4" component="h2">Global</Typography> */}
      <Grid container spacing={3} justify="center">
        <CardComponent
          className="infected"
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
       <CardComponent
          className="recovered"
          cardTitle="Recovered"
          value={confirmed.value - deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of Recovered Cases "
        />
        <CardComponent
          className="deaths"
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
 </CardWrapper>
  );
};

export default Info;