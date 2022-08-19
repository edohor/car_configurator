import React, { useState, useEffect } from 'react';
import GridItem from '../../layout/Grid/GridItem';
import GridContainer from '../../layout/Grid/GridContainer';
import CheckboxGroup from '../../layout/CheckboxGroup';
import CouponEntry from '../../layout/CouponEntry';
import {
  getServices,
  getLocalizedValue,
} from '../../../helpers/questionHelper';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectServices,
  saveTotal,
  saveDiscounted,
  saveDiscount,
  saveDiscountedTotal,
} from '../../../store/reducers/configurationSlice';

export default function ServicesQuestion() {
  const services = getServices();
  const state = useSelector((state) => state.configuration);
  const dispatch = useDispatch();

  const [selectedServices, setSelectedServices] = useState(
    state?.services ? state.services : []
  );
  const [total, setTotal] = useState(
    state?.discountedTotal ? state.discountedTotal : 0
  );
  const [baseTotal, setBaseTotal] = useState(state?.total ? state.total : 0);
  const [applyDiscount, setApplyDiscount] = useState(
    state?.discounted ? state.discounted : false
  );

  useEffect(() => {
    calculateTotal();
    dispatch(selectServices(selectedServices));
  }, [selectedServices]);

  useEffect(() => {
    calculateTotal();
  }, [applyDiscount]);

  useEffect(() => {
    dispatch(saveTotal(baseTotal));
    dispatch(saveDiscount(baseTotal * 0.3));
    dispatch(saveDiscountedTotal(total));
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

  const handleApplyDiscount = (discountApplied) => {
    setApplyDiscount(discountApplied);
    dispatch(saveDiscounted(true));
  };

  return (
    <div className="modalWindowContainerQuestion">
      <GridContainer direction="column">
        <GridItem className="title">
          <div>Korak 2. Odaberite jednu ili više usluga za koje ste</div>
        </GridItem>
        <GridItem className="content">
          <CheckboxGroup
            options={services}
            buttonSelected={(services) => saveServices(services)}
            selectedOptions={selectedServices}
          />
        </GridItem>
        <GridItem className="totalInfo">
          <GridContainer direction="row" justifyContent="flex-end">
            <GridItem className="pricesAndCouponContainer">
              <GridContainer direction="column" className="pricesAndCoupon">
                <GridItem
                  className="couponEntry"
                  xs={3}
                  justifyContent="flex-end"
                  direction="row-reverse"
                >
                  <CouponEntry
                    baseTotal={baseTotal}
                    handleApplyDiscount={(apply) => handleApplyDiscount(apply)}
                    applyDiscount={applyDiscount}
                  />
                </GridItem>
                <GridItem className="totalContainer">
                  <div className="totalInfo">
                    Ukupno:{' '}
                    <div className="totalInfoValue">
                      {getLocalizedValue(total)} kn
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
