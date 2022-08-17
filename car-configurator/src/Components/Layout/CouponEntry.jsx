import React, { useState, useEffect } from 'react';
import GridItem from '../Layout/Grid/GridItem';
import GridContainer from '../Layout/Grid/GridContainer';
import { getLocalizedValue } from '../../Helpers/questionHelper';

export default function CouponEntry(props) {
  const [couponClicked, setCouponClicked] = useState(false);
  const [couponValidated, setCouponValidated] = useState(false);
  const [showWrongCouponMessage, setShowWrongCouponMessage] = useState(false);
  const [couponText, setCouponText] = useState('');
  const [discount, setdiscount] = useState(0);

  const calculateDiscount = () => {
    props.baseTotal && setdiscount(props.baseTotal * 0.3);
  };

  const checkCoupon = () => {
    if (couponText === 'Tokić123') {
      setCouponValidated(true);
      calculateDiscount();
      props.applyDiscount(true);
    } else {
      setShowWrongCouponMessage(true);
    }
  };

  useEffect(() => {
    calculateDiscount();
  }, [props, props.baseTotal]);

  return (
    <div className="coupon">
      {couponClicked ? (
        !couponValidated ? (
          <div>
            <input
              type="text"
              id="coupon"
              name="coupon"
              maxLength="8"
              size="30"
              placeholder="Unesite kod kupona ovdje"
              onChange={(e) => setCouponText(e.target.value)}
            />
            <button onClick={() => checkCoupon()}>Primijeni</button>
            {showWrongCouponMessage ? <div>Kupon nije važeći</div> : null}
          </div>
        ) : (
          <div>
            <div>Hvala vam, unijeli ste ispravan kod kupona</div>

            <div>OSNOVICA: {getLocalizedValue(props.baseTotal)} kn</div>
            <div>Popust (30%): -{getLocalizedValue(discount)} kn</div>
          </div>
        )
      ) : (
        <div onClick={() => setCouponClicked(true)}>Imam kupon</div>
      )}
    </div>
  );
}
