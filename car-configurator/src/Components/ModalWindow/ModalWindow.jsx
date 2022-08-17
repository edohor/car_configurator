import React, { useState, useEffect } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import ModalWindowNavigation from './ModalWindowNavigation';
import CarMakeQuestion from '../../Components/Configurator/CarMakeQuestion';
import ServicesQuestion from '../Configurator/ServicesQuestion';
import ContactQuestion from '../Configurator/ContactQuestion';
import SummaryScreen from '../Configurator/SummaryScreen';
import { useSelector, useDispatch } from 'react-redux';

export default function ModalWindow() {
  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );

  const state = useSelector((state) => state.configuration);
  console.log('state', state);

  return (
    <div className="modalWindowContainer">
      <GridContainer direction="column" className="modalWindow">
        <GridItem className="modalWindowHeader">
          <div>Konfigurator servisa</div>
        </GridItem>
        <GridItem className="modalWindowContent">
          {configurationStep === 1 ? (
            <CarMakeQuestion />
          ) : configurationStep === 2 ? (
            <ServicesQuestion />
          ) : configurationStep === 3 ? (
            <ContactQuestion />
          ) : (
            <SummaryScreen />
          )}
        </GridItem>
        <GridItem className="modalWindowFooter">
          <ModalWindowNavigation />
        </GridItem>
      </GridContainer>
    </div>
  );
}
