import React, { useState, useEffect } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementStep,
  decrementStep,
  sendForm,
} from '../../state/reducers/configurationSlice';

export default function ModalWindowNavigation() {
  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );
  const dispatch = useDispatch();

  return (
    <div className="modalWindowNavigation">
      <GridContainer direction="row">
        {configurationStep > 1 && (
          <GridItem>
            <button onClick={() => dispatch(decrementStep())}>Nazad</button>
          </GridItem>
        )}
        <GridItem>
          {configurationStep < 4 ? (
            <button onClick={() => dispatch(incrementStep())}>Dalje</button>
          ) : (
            <button onClick={() => dispatch(sendForm())}>Pošalji</button>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
