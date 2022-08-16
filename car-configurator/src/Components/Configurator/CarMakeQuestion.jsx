import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import RadioButtonsGroup from '../Layout/RadioButtonGroup';
import { getCarMakes } from '../../Helpers/questionHelper';
import { useSelector, useDispatch } from 'react-redux';
import { selectCarMake } from '../../state/reducers/configurationSlice';

export default function CarMakeQuestion() {
  const carMakes = getCarMakes();
  const state = useSelector((state) => state.carMake);
  const dispatch = useDispatch();

  const saveCarMake = (carMake) => {
    dispatch(selectCarMake(carMake));
  };

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Korak 1: Odaberite proizvođača vašeg vozila</div>
        </GridItem>
        <GridItem className="content">
          <RadioButtonsGroup
            options={carMakes}
            buttonSelected={(carMake) => saveCarMake(carMake)}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
