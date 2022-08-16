import React, { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';

export default function CheckboxGroup(props) {
  const { options, ...rest } = props;
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log('value', value);
    props.buttonSelected && props.buttonSelected(value);
  }, [value]);

  return (
    <FormGroup>
      <GridContainer>
        {options &&
          options.map((option) => (
            <GridItem key={option}>
              <FormControlLabel
                value={option}
                control={<Checkbox />}
                label={option.label}
                onChange={handleChange}
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 14,
                  },
                }}
              />
            </GridItem>
          ))}
      </GridContainer>
    </FormGroup>
  );
}
