import React, { useState } from 'react';
import GridItem from '../layout/Grid/GridItem';
import GridContainer from '../layout/Grid/GridContainer';
import RadioButtonsGroup from '../layout/RadioButtonsGroup';
import { getCarMakes } from '../../helpers/questionHelper';
import { useSelector, useDispatch } from 'react-redux';
import { selectCarMake } from '../../store/reducers/configurationSlice';

export default function CarMakeQuestion() {
  const carMakes = getCarMakes();
  const state = useSelector((state) => state.configuration);
  const dispatch = useDispatch();

  const [selectedCarMake, setSelectedCarMake] = useState(
    state?.carMake ? state.carMake : null
  );

  const saveCarMake = (carMake) => {
    setSelectedCarMake(carMake);
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
            selectedOption={selectedCarMake}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
