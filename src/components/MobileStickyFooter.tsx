import './MobileStickyFooter.scss';

export function MobileStickyFooter() {
  return <div className="mobile-sticky-footer">
    <div className="sticky-container">
      <div className="credits">
        <span>TOTAL</span>
        <span>41 Credits</span>
      </div>
      <div>
        <button>Place Order</button>
      </div>
    </div>
  </div>
}