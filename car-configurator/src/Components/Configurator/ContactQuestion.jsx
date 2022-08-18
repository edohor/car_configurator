import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserInfo } from '../../state/reducers/configurationSlice';

export default function ContactQuestion() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.configuration.userInfo);

  const [name, setName] = useState(state?.name ? state.name : '');
  const [phoneNumber, setPhoneNumber] = useState(
    state?.phoneNumber ? state.phoneNumber : ''
  );
  const [emailAddress, setEmailAddress] = useState(
    state?.email ? state.email : ''
  );
  const [note, setNote] = useState(state?.note ? state.note : '');

  useEffect(() => {
    const userInfo = {
      name: name,
      phoneNumber: phoneNumber,
      email: emailAddress,
      note: note,
    };
    dispatch(saveUserInfo(userInfo));
  }, [name, phoneNumber, emailAddress, note]);

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Korak 3: Vaši kontakt podaci</div>
        </GridItem>
        <GridItem className="content">
          <GridContainer direction="column" className="dataInputContainer">
            <GridItem>
              <GridContainer direction="row" justifyContent="space-between">
                <GridItem className="inputContainer" xs={6}>
                  <input
                    type="text"
                    placeholder="Ime i prezime*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="dataInput"
                  />
                </GridItem>
                <GridItem className="inputContainer" xs={6}>
                  <input
                    type="text"
                    placeholder="Email adresa*"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="dataInput"
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <GridContainer direction="row" justifyContent="space-between">
                <GridItem className="inputContainer" xs={6}>
                  <input
                    type="text"
                    placeholder="Broj telefona*"
                    value={phoneNumber}
                    onChange={(e) =>
                      /^[0-9]+$|^$/.test(e.target.value)
                        ? setPhoneNumber(e.target.value)
                        : e.target.value == null
                        ? ''
                        : null
                    }
                    className="dataInput"
                  />
                </GridItem>
                <GridItem className="inputContainer" xs={6}>
                  <textarea
                    placeholder="Napomena (opcionalno)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={4}
                    style={{ resize: 'none' }}
                    className="textAreaInput"
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
