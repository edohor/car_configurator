import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import CheckboxGroup from '../Layout/CheckboxGroup';
import CouponEntry from '../Layout/CouponEntry';
import { getServices, getLocalizedValue } from '../../Helpers/questionHelper';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectServices,
  saveTotal,
} from '../../state/reducers/configurationSlice';

export default function ServicesQuestion() {
  const services = getServices();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selectedServices, setSelectedServices] = useState([]);
  const [total, setTotal] = useState(0);
  const [baseTotal, setBaseTotal] = useState(0);
  const [applyDiscount, setApplyDiscount] = useState(false);

  useEffect(() => {
    calculateTotal();
    dispatch(selectServices(selectedServices));
  }, [selectedServices]);

  useEffect(() => {
    calculateTotal();
  }, [applyDiscount]);

  useEffect(() => {
    dispatch(saveTotal(total));
  }, [total]);

  const calculateTotal = () => {
    let newTotal = 0;
    selectedServices.forEach((service) => (newTotal += service.price));
    setBaseTotal(newTotal);
    newTotal = applyDiscount ? newTotal - newTotal * 0.3 : newTotal;
    setTotal(newTotal);
  };

  const saveServices = (services) => {
    setSelectedServices(services);
  };

  //   console.log('state', state);

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
          <CouponEntry
            baseTotal={baseTotal}
            applyDiscount={(apply) => setApplyDiscount(apply)}
          />
        </GridItem>
        <GridItem className="total">
          <div>Ukupno: {getLocalizedValue(total)} kn</div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
