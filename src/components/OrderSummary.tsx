import arrowDown from '../assets/svgs/arrow-down.svg';
import './OrderSummary.scss';

export interface OrderSummaryProps {
  isLoading: boolean;
}

export function OrderSummary(props: OrderSummaryProps) {
  const loadingClass = !!props.isLoading ? "loading" : '';

  return <div className="order-summary">
    <div className="centered">
      <h1>Order Summary</h1>
      <div className="section">
        <div className={`row ${loadingClass}`}>
          Credits in your account
        <span className="row-value">234</span>
        </div>
        <div className={`row ${loadingClass}`}>
          Credits required
        <span className="row-value">41</span>
        </div>
        <div className="row promo-code">
          Promo Code
        <img src={arrowDown} />
        </div>
      </div>
      <div className="section">
        <div className={`row ${loadingClass}`}>
          Subtotal
        <span className="row-value">41</span>
        </div>
        <div className={`row ${loadingClass}`}>
          Tax
        <span className="row-value">-</span>
        </div>
      </div>
      <div className="section">
        <div className={`row ${loadingClass}`}>
          TOTAL
        <span>41</span>
        </div>
      </div>
      <div className="section">
        <div className="row">
          Payment Method
      </div>
        <div className="row">
          <span>
            American Express
          <span className="ending-with"> - 1234</span>
          </span>
          <span className="change-payment">Change</span>
        </div>
      </div>
      <div className="sale-disclaimer">
        All sales are final.
    </div>
      <button>Place Order</button>
      <div className="place-order-disclaimer">
        By placing your order, you agree to the <a>Terms of Use</a> and <a>Privacy
        Policy</a>.
    </div>
    </div>
  </div>
}