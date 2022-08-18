import React, { useState, useEffect } from 'react';
import { getLocalizedValue } from '../../Helpers/questionHelper';
import { useSelector } from 'react-redux';

export default function CouponEntry(props) {
  const state = useSelector((state) => state.configuration);

  const [couponClicked, setCouponClicked] = useState(false);
  const [couponValidated, setCouponValidated] = useState(false);
  const [showWrongCouponMessage, setShowWrongCouponMessage] = useState(false);
  const [couponText, setCouponText] = useState('');
  const [discount, setdiscount] = useState(
    state?.discount ? state.discount : 0
  );

  useEffect(() => {
    if (props?.applyDiscount && props.applyDiscount) {
      setCouponClicked(true);
      setCouponValidated(true);
    }
  }, [props, props.applyDiscount]);

  const calculateDiscount = () => {
    props.baseTotal && setdiscount(props.baseTotal * 0.3);
  };

  const checkCoupon = () => {
    if (couponText === 'Tokić123') {
      setCouponValidated(true);
      calculateDiscount();
      props.handleApplyDiscount(true);
    } else {
      setShowWrongCouponMessage(true);
    }
  };

  const changeToCouponView = () => {
    setTimeout(() => {
      document.getElementById('coupon').focus();
    }, 10);
    setCouponClicked(true);
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
        <div onClick={() => changeToCouponView()}>Imam kupon</div>
      )}
    </div>
  );
}
