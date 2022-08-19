import React, { useState, useEffect } from 'react';
import GridItem from '../../layout/Grid/GridItem';
import GridContainer from '../../layout/Grid/GridContainer';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserInfo } from '../../../store/reducers/configurationSlice';

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
  const [showEmailValidationMessage, setShowEmailValidationMessage] =
    useState(false);

  useEffect(() => {
    const userInfo = {
      name: name,
      phoneNumber: phoneNumber,
      email: emailAddress,
      note: note,
    };
    dispatch(saveUserInfo(userInfo));
  }, [name, phoneNumber, emailAddress, note]);

  const checkEmailValidation = () => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailAddress) === false) {
      setShowEmailValidationMessage(true);
    } else {
      setShowEmailValidationMessage(false);
    }
  };

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
                  <GridContainer direction="column">
                    <GridItem className="">
                      <input
                        type="text"
                        placeholder="Email adresa*"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className={
                          showEmailValidationMessage
                            ? 'dataInputError'
                            : 'dataInput'
                        }
                        onBlur={checkEmailValidation}
                      />
                    </GridItem>
                    {showEmailValidationMessage && (
                      <GridItem className="">
                        <div className="emailValidationMessage">
                          Email adresa mora biti u formatu ime@email.com
                        </div>
                      </GridItem>
                    )}
                  </GridContainer>
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
                    maxLength="9"
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
