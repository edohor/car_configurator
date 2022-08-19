import React from 'react';
import GridItem from '../../layout/Grid/GridItem';
import GridContainer from '../../layout/Grid/GridContainer';
import { useSelector } from 'react-redux';
import SummaryCard from '../../layout/SummaryCard';
import { getLocalizedValue } from '../../../helpers/questionHelper';
import Divider from '@mui/material/Divider';

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
      servicePrices.push(getLocalizedValue(service.price) + ' KN');
    });
    state.discounted && servicePrices.push(getLocalizedValue(state.discount));
    servicePrices.push(getLocalizedValue(state.discountedTotal));
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
    contentLeft: ['Ime i prezime:', 'Broj telefona:'],
    contentRight: getUserNameAndPhoneContent(),
  };

  const userEmailAndNoteContent = {
    contentLeft: ['Email adresa:', 'Napomena:'],
    contentRight: getUserEmailAndNoteContent(),
  };

  const getSummaryCard = (title, content, displayEditButton, step) => {
    return (
      <SummaryCard
        title={title}
        content={content}
        displayEditButton={displayEditButton}
        step={step}
      />
    );
  };

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Korak 4. Pregled i potvrda vašeg odabira</div>
        </GridItem>
        <GridItem className="summaryText">
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
            <GridItem className="summaryRow">
              <GridContainer direction="row">
                <GridItem className="summaryCardContainer" xs={6}>
                  {getSummaryCard('Model vozila', carMakeContent, true, 1)}
                </GridItem>
                <GridItem className="summaryCardContainer" xs={6}>
                  {getSummaryCard('Odabrane usluge', servicesContent, true, 2)}
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem className="summaryRow">
              <Divider
                variant="middle"
                className="divider"
                style={{ width: '100%', margin: 0 }}
              />
            </GridItem>
            <GridItem className="summaryRow">
              <GridContainer direction="row">
                <GridItem className="summaryCardContainer" xs={6}>
                  {getSummaryCard(
                    'Kontakt podaci',
                    userNameAndPhoneContent,
                    true,
                    3
                  )}
                </GridItem>
                <GridItem className="summaryCardContainer" xs={6}>
                  {getSummaryCard('', userEmailAndNoteContent, false)}
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
