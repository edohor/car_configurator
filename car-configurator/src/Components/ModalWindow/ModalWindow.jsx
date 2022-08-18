import React, { useState } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import ModalWindowNavigation from './ModalWindowNavigation';
import CarMakeQuestion from '../../Components/Configurator/CarMakeQuestion';
import ServicesQuestion from '../Configurator/ServicesQuestion';
import ContactQuestion from '../Configurator/ContactQuestion';
import SummaryScreen from '../Configurator/SummaryScreen';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementStep,
  decrementStep,
  jumpToStep,
} from '../../state/reducers/configurationSlice';

export default function ModalWindow(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.configuration);

  const [showWarningMessage, setShowWarningMessage] = useState(false);

  const [warningMessageText, setWarningMessageText] = useState('');

  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );

  const closeModalWindow = () => {
    dispatch(jumpToStep(1));
    props.closeModalWindow && props.closeModalWindow();
  };

  const displayWarningMessage = (message) => {
    setShowWarningMessage(true);
    setWarningMessageText(message);
  };

  const goToNextStep = () => {
    setShowWarningMessage(false);
    setWarningMessageText('');
    dispatch(incrementStep());
  };

  const goNext = (step) => {
    switch (step) {
      case 1:
        if (state.carMake == null) {
          displayWarningMessage('Molimo odaberite proizvođača automobila');
        } else {
          goToNextStep();
        }
        break;
      case 2:
        if (state.services.length === 0) {
          displayWarningMessage('Molimo odaberite barem jednu uslugu');
        } else {
          goToNextStep();
        }
        break;
      case 3:
        if (
          state.userInfo.name === '' ||
          state.userInfo.phoneNumber === '' ||
          state.userInfo.email === ''
        ) {
          displayWarningMessage('Molimo unesite obavezne podatke');
        } else {
          goToNextStep();
        }
        break;
      default:
        goToNextStep();
    }
  };

  const goBack = (step) => {
    setShowWarningMessage(false);
    setWarningMessageText('');
    dispatch(decrementStep());
  };

  return (
    <div className="modalWindowContainer">
      <GridContainer direction="column" className="modalWindow">
        <GridItem className="modalWindowHeader">
          <GridContainer direction="row" className="modalWindow">
            <GridItem className="modalWindowHeaderTitle">
              <div>Konfigurator servisa</div>
            </GridItem>
            <GridItem className="modalWindowHeaderCloseButton">
              <button onClick={() => closeModalWindow()}>X</button>
            </GridItem>
          </GridContainer>
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
          {showWarningMessage && <div>{warningMessageText}</div>}
          <ModalWindowNavigation
            goNext={(step) => goNext(step)}
            goBack={(step) => goBack(step)}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
