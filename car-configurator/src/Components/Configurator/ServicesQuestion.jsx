import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import CheckboxGroup from '../Layout/CheckboxGroup';
import { getServices } from '../../Helpers/questionHelper';
import { useSelector, useDispatch } from 'react-redux';
import { selectServices } from '../../state/reducers/configurationSlice';

export default function ServicesQuestion() {
  const services = getServices();
  const state = useSelector((state) => state.carMake);
  const dispatch = useDispatch();
  const [selectedServices, setSelectedServices] = useState([]);
  const [couponClicked, setCouponClicked] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(selectServices(selectedServices));
  }, [selectedServices]);

  const saveServices = (services) => {
    console.log('services', services);
    // setSelectedServices()
    // setTotal()
  };

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Korak 2: Odaberite jednu ili više usluga za koje ste</div>
        </GridItem>
        <GridItem className="content">
          <CheckboxGroup
            options={services}
            buttonSelected={(services) => saveServices(services)}
          />
        </GridItem>
        <GridItem className="coupon">
          {couponClicked ? (
            <div>UNOS</div>
          ) : (
            <div onClick={() => setCouponClicked(true)}>Imam kupon</div>
          )}
        </GridItem>
        <GridItem className="total">
          <div>Ukupno: {total} kn</div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
