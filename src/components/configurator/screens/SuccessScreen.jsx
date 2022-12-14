import React from 'react';
import GridItem from '../../layout/Grid/GridItem';
import GridContainer from '../../layout/Grid/GridContainer';

export default function SuccessScreen(props) {
  return (
    <div className="modalWindowContainerFinal">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Vaša prijava je uspješno poslana</div>
        </GridItem>
        <GridItem className="content">
          <div>
            Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo
            vas u najkraćem mogućem roku. Hvala vam.
          </div>
        </GridItem>
        <GridItem className="closeButton">
          <button onClick={() => props.closeModal()}>Zatvori</button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
