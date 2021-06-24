import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
      
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({value, handleChange}) {
  const classes = useStyles();
  // const [value, setValue] = React.useState([20, 37]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className={classes.root}>
      {console.log(value)}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max='1000'
        min={value[0]}
      />
    </div>
  );
}
