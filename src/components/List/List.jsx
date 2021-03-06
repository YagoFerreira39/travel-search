import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import useStyles from './ListStyles';

const List = (props) => {
  const classes = useStyles();
  const [type, setType] = useState();
  const [rating, setRating] = useState();

  return (
    <div className={ classes.container }>
      <Typography variant='h4'>
        {"Restaurants, Hotels & Attractions around you"}
      </Typography>
      <FormControl className={ classes.formControl }>
        <InputLabel>{"Type"}</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">{"Restaurants"}</MenuItem>
          <MenuItem value="hotels">{"Hotels"}</MenuItem>
          <MenuItem value="attractions">{"Attractions"}</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={ classes.formControl }>
        <InputLabel>{"Rating"}</InputLabel>
        <Select value={type} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>{"All"}</MenuItem>
          <MenuItem value={3}>{"Above 3"}</MenuItem>
          <MenuItem value={4}>{"Above 4"}</MenuItem>
          <MenuItem value={4.5}>{"Above 4.5"}</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
};

export default List;
