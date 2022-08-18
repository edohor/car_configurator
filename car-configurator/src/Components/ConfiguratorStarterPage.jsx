import React, { useState } from 'react';
import '../Styles/ModalWindow.css';
import ModalWindowContent from './ModalWindow/ModalWindowContent';
import GridItem from './Layout/Grid/GridItem';
import GridContainer from './Layout/Grid/GridContainer';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { resetState } from '../state/reducers/configurationSlice';

export default function ConfiguratorStarterPage() {
  const dispatch = useDispatch();

  const [modalWindowOpened, setModalWindowOpened] = useState(false);

  const openModalWindow = () => {
    setModalWindowOpened(true);
  };

  const closeModalWindow = () => {
    dispatch(resetState());
    setModalWindowOpened(false);
  };

  return (
    <div className="basePage">
      <GridContainer direction="column">
        <GridItem className="basePageTitle">
          <div>Pritisnite gumb niže kako biste pokrenuli</div>
        </GridItem>
        <GridItem className="starterButton">
          <button onClick={() => openModalWindow()}>Pokreni</button>
        </GridItem>
      </GridContainer>
      <Modal open={modalWindowOpened} onClose={() => closeModalWindow()}>
        <ModalWindowContent closeModalWindow={() => closeModalWindow()} />
      </Modal>
    </div>
  );
}
