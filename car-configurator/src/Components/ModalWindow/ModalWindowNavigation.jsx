import React from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector } from 'react-redux';

export default function ModalWindowNavigation(props) {
  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );

  const postData = (step) => {
    // send data to API
    props.goNext(configurationStep);
  };

  return (
    <div className="modalWindowNavigation">
      <GridContainer direction="row">
        {configurationStep > 1 && (
          <GridItem>
            <button onClick={() => props.goBack()}>Nazad</button>
          </GridItem>
        )}
        <GridItem className="forwardNavigationContainer">
          {configurationStep < 4 ? (
            <button onClick={() => props.goNext(configurationStep)}>
              Dalje
            </button>
          ) : (
            <button onClick={() => postData()}>Pošalji</button>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
