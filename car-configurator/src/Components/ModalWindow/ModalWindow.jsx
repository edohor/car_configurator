import React, { useState, useEffect } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import ModalWindowNavigation from './ModalWindowNavigation';
import CarMakeQuestion from '../../Components/Configurator/CarMakeQuestion';
import ServicesQuestion from '../Configurator/ServicesQuestion';
import { useSelector, useDispatch } from 'react-redux';

export default function ModalWindow() {
  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );

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
          ) : null}
        </GridItem>
        <GridItem className="modalWindowFooter">
          <ModalWindowNavigation />
        </GridItem>
      </GridContainer>
    </div>
  );
}
