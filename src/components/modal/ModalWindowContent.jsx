import React, { useState } from 'react';
import '../../styles/ModalWindow.css';
import GridItem from '../layout/Grid/GridItem';
import GridContainer from '../layout/Grid/GridContainer';
import ModalWindowNavigation from './ModalWindowNavigation';
import CarMakeQuestion from '../configurator/questions/CarMakeQuestion';
import ServicesQuestion from '../configurator/questions/ServicesQuestion';
import ContactQuestion from '../configurator/questions/ContactQuestion';
import SummaryScreen from '../configurator/screens/SummaryScreen';
import ClosingScreen from '../configurator/screens/SuccessScreen';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementStep,
  decrementStep,
  jumpToStep,
} from '../../store/reducers/configurationSlice';
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
    props?.closeModalWindow();
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
                className="closeModalButton"
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
          ) : configurationStep === 4 ? (
            <SummaryScreen />
          ) : (
            <ClosingScreen closeModal={() => closeModalWindow()} />
          )}
          {showWarningMessage && <div>{warningMessageText}</div>}
        </GridItem>
        <GridItem className="modalWindowFooter">
          {configurationStep < 5 && (
            <ModalWindowNavigation
              goNext={(step) => goNext(step)}
              goBack={(step) => goBack(step)}
            />
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
