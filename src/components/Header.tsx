import brandMark from '../assets/svgs/brand-mark.svg';
import magnifyingGlass from '../assets/svgs/magnifying-glass.svg';
import user from '../assets/svgs/user.svg';
import './Header.scss';

export function Header() {
  return <header className="header">
    <div className="mobile">
      <div className="end">
        <div className="more"></div>
      </div>
      <div className="brand-mark">
        <img src={brandMark} />
      </div>
      <div className="end actions">
        <img src={magnifyingGlass} />
        <img src={user} />
      </div>
    </div>
    <div className="desktop">
      <div className="logo">
        <img src="https://mtracks.azureedge.net/public/images/site/logo/en/logo-mono.svg" />
      </div>
      <div className="end actions">
        <img src={magnifyingGlass} />
        <img src={user} />
      </div>
    </div>
  </header>
}

