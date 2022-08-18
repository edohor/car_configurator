import React from 'react';
import '../Styles/ModalWindow.css';
import GridItem from './Layout/Grid/GridItem';
import GridContainer from './Layout/Grid/GridContainer';

export default function ConfiguratorStarterPage(props) {
  const openModalWindow = () => {
    props.openModalWindow && props.openModalWindow();
  };

  return (
    <div className="basePage">
      <GridContainer direction="column" className="">
        <GridItem className="">
          <div>Pritisnite gumb niže kako biste pokrenuli</div>
        </GridItem>
        <GridItem className="">
          <button onClick={() => openModalWindow()}>Pokreni</button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
