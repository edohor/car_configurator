import React, { useState, useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';

export default function RadioButtonsGroup(props) {
  const { options, ...rest } = props;
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    props.buttonSelected && props.buttonSelected(value);
  }, [value]);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
      >
        <GridContainer>
          {options &&
            options.map((option) => (
              <GridItem key={option}>
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={option}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 14,
                    },
                  }}
                />
              </GridItem>
            ))}
        </GridContainer>
      </RadioGroup>
    </FormControl>
  );
}
