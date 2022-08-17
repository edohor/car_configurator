import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserInfo } from '../../state/reducers/configurationSlice';

export default function SummaryScreen() {
  const dispatch = useDispatch();

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Korak 4: Pregled i potvrda vašeg odabira</div>
        </GridItem>
        <GridItem className="title">
          <div>
            Molimo vas da još jednom pregledate i potvrdite unesene podatke.
            Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb
            za uređivanje pored svake od kategorija. Kada ste provjerili i
            potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu
            za slanje upita za servis
          </div>
        </GridItem>
        <GridItem className="content">
          <GridContainer direction="row">
            <GridItem>
              <GridContainer direction="column">
                <GridItem className="title"></GridItem>
                <GridItem className="content"></GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <GridContainer direction="column">
                <GridItem className="title"></GridItem>
                <GridItem className="content"></GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
