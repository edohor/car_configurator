import React, { useState, useEffect } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';

export default function ModalWindow() {
  return (
    <div className="modalWindowContainer">
      <GridContainer direction="column" className="modalWindow">
        <GridItem className="modalWindowHeader">
          <text>Konfigurator servisa</text>
        </GridItem>
        <GridItem className="modalWindowContent">
          <text>Content</text>
        </GridItem>
        <GridItem className="modalWindowFooter">
          <text>Footer</text>
        </GridItem>
      </GridContainer>
    </div>
  );
}
