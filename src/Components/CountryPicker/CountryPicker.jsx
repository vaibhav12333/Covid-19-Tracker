import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {useSelector} from "react-redux";

import { fetchCountries } from '../../api';

import styled from "styled-components"
const TableWrapper = styled.div`
.formControl {
  width: 30%;
  margin-bottom: 30px !important;
}
.MuiNativeSelect-select{
  color:${props=>props.isDark?"white":"black"};
  
}

.MuiNativeSelect-icon{
  color:${props=>props.isDark?"white":"black"};

}
.MuiInput-underline:before{
  border-bottom:${props=>props.isDark?"1px solid white":"1px solid rgba(0, 0, 0, 0.42)"};

}
.options{
  color:${props=>props.isDark?"black":"black"};
  background:black;
}
`

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const darkMode = useSelector((state) => state.theme)

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <TableWrapper isDark={darkMode}>
    <FormControl className="formControl">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option className="options" value="Global">Global</option>
        {countries.map((country, i) => <option key={i} className="options" value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </TableWrapper>
  );
};

export default Countries;