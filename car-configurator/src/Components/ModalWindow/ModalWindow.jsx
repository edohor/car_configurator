import React, { useState, useEffect } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import ModalWindowNavigation from './ModalWindowNavigation';
import CarMakeQuestion from '../../Components/Configurator/CarMakeQuestion';
import { useSelector, useDispatch } from 'react-redux';

export default function ModalWindow() {
  const state = useSelector((state) => state);
  console.log('state', state);

  return (
    <div className="modalWindowContainer">
      <GridContainer direction="column" className="modalWindow">
        <GridItem className="modalWindowHeader">
          <div>Konfigurator servisa</div>
        </GridItem>
        <GridItem className="modalWindowContent">
          <CarMakeQuestion />
        </GridItem>
        <GridItem className="modalWindowFooter">
          <ModalWindowNavigation />
        </GridItem>
      </GridContainer>
    </div>
  );
}
