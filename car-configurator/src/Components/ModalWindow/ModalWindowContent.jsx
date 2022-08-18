import React, { useState } from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import ModalWindowNavigation from './ModalWindowNavigation';
import CarMakeQuestion from '../Configurator/CarMakeQuestion';
import ServicesQuestion from '../Configurator/ServicesQuestion';
import ContactQuestion from '../Configurator/ContactQuestion';
import SummaryScreen from '../Configurator/SummaryScreen';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementStep,
  decrementStep,
  jumpToStep,
} from '../../state/reducers/configurationSlice';
import { CloseIcon } from '../../assets/iconsList';

export default function ModalWindowContent(props) {
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
          state.userInfo.email === '' ||
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(state.userInfo.email) ===
            false
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
        <GridItem>
          <GridContainer direction="row">
            <GridItem className="modalWindowHeaderTitle">
              <div>Konfigurator servisa</div>
            </GridItem>
            <GridItem className="modalWindowHeaderCloseButton">
              <img
                src={CloseIcon}
                alt="close"
                height="40px"
                width="40px"
                onClick={() => closeModalWindow()}
              />
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
          {showWarningMessage && <div>{warningMessageText}</div>}
        </GridItem>
        <GridItem className="modalWindowFooter">
          <ModalWindowNavigation
            goNext={(step) => goNext(step)}
            goBack={(step) => goBack(step)}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
