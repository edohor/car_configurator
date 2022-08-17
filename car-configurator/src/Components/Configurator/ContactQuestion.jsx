import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserInfo } from '../../state/reducers/configurationSlice';
import { TextField } from '@mui/material';

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
          <GridContainer direction="column">
            <GridItem>
              <GridContainer direction="row">
                <GridItem className="inputContainer">
                  <TextField
                    id="name"
                    value={name}
                    placeholder="Ime i prezime*"
                    size="small"
                    onChange={(e) => setName(e.target.value)}
                  />
                </GridItem>
                <GridItem className="inputContainer">
                  <TextField
                    id="email"
                    value={emailAddress}
                    placeholder="Email adresa*"
                    size="small"
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <GridContainer direction="row">
                <GridItem className="inputContainer">
                  <TextField
                    id="phoneNumber"
                    value={phoneNumber}
                    placeholder="Broj telefona*"
                    size="small"
                    onChange={(e) =>
                      /^[0-9]+$/.test(e.target.value)
                        ? setPhoneNumber(e.target.value)
                        : null
                    }
                  />
                </GridItem>
                <GridItem className="inputContainer">
                  <TextField
                    id="note"
                    multiline
                    rows={4}
                    value={note}
                    placeholder="Napomena (opcionalno)"
                    onChange={(e) => setNote(e.target.value)}
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
