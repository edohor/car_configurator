import React from 'react';
import '../../styles/ModalWindow.css';
import GridItem from '../layout/Grid/GridItem';
import GridContainer from '../layout/Grid/GridContainer';
import { useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';

export default function ModalWindowNavigation(props) {
  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );

  const postData = () => {
    // send data to API
    props.goNext(configurationStep);
  };

  return (
    <div className="modalWindowNavigation">
      <Divider
        variant="middle"
        className="divider"
        style={{
          marginLeft: '30px',
          marginRight: '30px',
        }}
      />
      <div className="modalWindowNavigationContainer">
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
    </div>
  );
}
