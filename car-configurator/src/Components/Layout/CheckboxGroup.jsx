import React, { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../Styles/muiTheme';

export default function CheckboxGroup(props) {
  const { options } = props;
  const [selectedOptions, setSelectedOptions] = useState(
    props?.selectedOptions ? props.selectedOptions : []
  );

  const handleChange = (selectedService) => {
    let allSelectedServices = [...selectedOptions];
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
    setSelectedOptions(allSelectedServices);
  };

  useEffect(() => {
    props.buttonSelected && props.buttonSelected(selectedOptions);
  }, [selectedOptions]);

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <GridContainer>
          {options &&
            options.map((option) => {
              let checkedOption = selectedOptions.some((selectedOption) => {
                if (selectedOption.label === option.label) {
                  return true;
                }
              });
              return (
                <GridItem key={option.label}>
                  <FormControlLabel
                    value={option}
                    control={<Checkbox checked={checkedOption} />}
                    label={option.label}
                    onChange={() => handleChange(option)}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 14,
                      },
                    }}
                  />
                </GridItem>
              );
            })}
        </GridContainer>
      </FormGroup>
    </ThemeProvider>
  );
}
