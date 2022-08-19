import React, { useState } from 'react';
import '../styles/ModalWindow.css';
import ModalWindowContent from './modal/ModalWindowContent';
import GridItem from './layout/Grid/GridItem';
import GridContainer from './layout/Grid/GridContainer';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { resetState } from '../store/reducers/configurationSlice';
import { TokicLogo } from '../assets/imagesList';

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
      <GridContainer direction="row" className="basePageHeader">
        <GridItem className="basePageLogoContainer">
          <img src={TokicLogo} alt="logo" height="60px" />
        </GridItem>
        <GridItem className="basePageHeaderTitleContainer">
          <div className="basePageHeaderTitle">Konfigurator servisa</div>
          <div className="basePageHeaderSubtitle">
            Izračunajte trošak servisa
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer direction="column">
        <GridItem className="basePageTitle">
          <div>Pritisnite gumb niže kako biste pokrenuli</div>
        </GridItem>
        <GridItem className="starterButton">
          <button onClick={() => openModalWindow()}>Pokreni</button>
        </GridItem>
      </GridContainer>
      <Modal
        open={modalWindowOpened}
        onClose={() => closeModalWindow()}
        className="modalWindow"
        style={{}}
      >
        <ModalWindowContent closeModalWindow={() => closeModalWindow()} />
      </Modal>
    </div>
  );
}
