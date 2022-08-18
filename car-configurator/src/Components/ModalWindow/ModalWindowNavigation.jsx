import React from 'react';
import '../../Styles/ModalWindow.css';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { sendForm } from '../../state/reducers/configurationSlice';

export default function ModalWindowNavigation(props) {
  const dispatch = useDispatch();
  const configurationStep = useSelector(
    (state) => state.configuration.configurationStep
  );

  return (
    <div className="modalWindowNavigation">
      <GridContainer direction="row">
        {configurationStep > 1 && (
          <GridItem>
            <button onClick={() => props.goBack()}>Nazad</button>
          </GridItem>
        )}
        <GridItem>
          {configurationStep < 4 ? (
            <button onClick={() => props.goNext(configurationStep)}>
              Dalje
            </button>
          ) : (
            <button onClick={() => dispatch(sendForm())}>Pošalji</button>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
