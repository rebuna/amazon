import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format'
import {useNavigate} from 'react-router-dom'

function Subtotal() {
    const [{ basket, user }, dispatch] = useStateValue();
    const getBasketTotal = (basket) =>
        basket.reduce((amount, item) => item.price + amount, 0);
    const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length}):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order Contains a Gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal