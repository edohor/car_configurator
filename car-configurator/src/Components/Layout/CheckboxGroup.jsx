import React, { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';

export default function CheckboxGroup(props) {
  const { options, ...rest } = props;
  const [selectedServices, setSelectedServices] = useState([]);

  const handleChange = (selectedService) => {
    let allSelectedServices = [...selectedServices];
    if (allSelectedServices.length === 0) {
      allSelectedServices.push(selectedService);
    } else {
      if (
        allSelectedServices.filter((e) => {
          return e.label === selectedService.label;
        }).length > 0
      ) {
        allSelectedServices = allSelectedServices.filter((service) => {
          return service.label !== selectedService.label;
        });
      } else {
        allSelectedServices.push(selectedService);
      }
    }
    setSelectedServices(allSelectedServices);
  };

  useEffect(() => {
    props.buttonSelected && props.buttonSelected(selectedServices);
  }, [selectedServices]);

  return (
    <FormGroup>
      <GridContainer>
        {options &&
          options.map((option) => (
            <GridItem key={option.label}>
              <FormControlLabel
                value={option}
                control={<Checkbox />}
                label={option.label}
                onChange={() => handleChange(option)}
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
