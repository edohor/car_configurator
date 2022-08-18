import React from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector } from 'react-redux';
import SummaryCard from '../Layout/SummaryCard';
import { getLocalizedValue } from '../../Helpers/questionHelper';

export default function SummaryScreen() {
  const state = useSelector((state) => state.configuration);

  const carMakeContent = {
    contentLeft: [state.carMake],
    contentRight: null,
  };

  const getServicesNames = () => {
    let serviceNames = [];
    state.services.forEach((service) => {
      serviceNames.push(service.label.substring(0, service.label.indexOf('(')));
    });
    return serviceNames;
  };

  const getServicesPrices = () => {
    let servicePrices = [];
    state.services.forEach((service) => {
      servicePrices.push(getLocalizedValue(service.price) + ' kn');
    });
    state.discounted &&
      servicePrices.push(
        'Popust (30%): -' + getLocalizedValue(state.discount) + ' kn'
      );
    servicePrices.push(
      'UKUPNO ' + getLocalizedValue(state.discountedTotal) + ' kn'
    );
    return servicePrices;
  };

  const servicesContent = {
    contentLeft: getServicesNames(),
    contentRight: getServicesPrices(),
  };

  const getUserNameAndPhoneContent = () => {
    let nameAndPhone = [];
    nameAndPhone.push(state.userInfo.name);
    nameAndPhone.push(state.userInfo.phoneNumber);
    return nameAndPhone;
  };

  const getUserEmailAndNoteContent = () => {
    let nameAndPhone = [];
    nameAndPhone.push(state.userInfo.email);
    nameAndPhone.push(state.userInfo.note);
    return nameAndPhone;
  };

  const userNameAndPhoneContent = {
    contentLeft: ['Ime i prezime', 'Broj telefona'],
    contentRight: getUserNameAndPhoneContent(),
  };

  const userEmailAndNoteContent = {
    contentLeft: ['Email adresa', 'Napomena'],
    contentRight: getUserEmailAndNoteContent(),
  };

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
          <GridContainer direction="column">
            <GridItem>
              <GridContainer direction="row">
                <GridItem className="inputContainer">
                  <SummaryCard
                    title={'Model vozila'}
                    content={carMakeContent}
                    displayEditButton={true}
                    step={1}
                  />
                </GridItem>
                <GridItem className="inputContainer">
                  <SummaryCard
                    title={'Odabrane usluge'}
                    content={servicesContent}
                    displayEditButton={true}
                    step={2}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem className="inputContainer">
              <GridContainer direction="row">
                <GridItem className="inputContainer">
                  <SummaryCard
                    title={'Kontakt podaci'}
                    content={userNameAndPhoneContent}
                    displayEditButton={true}
                    step={3}
                  />
                </GridItem>
                <GridItem className="inputContainer">
                  <SummaryCard
                    title={''}
                    content={userEmailAndNoteContent}
                    displayEditButton={false}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
