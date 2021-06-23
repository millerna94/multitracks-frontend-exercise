import facebooLike from '../assets/pngs/facebook.png';
import twitterLike from '../assets/pngs/twitter.png';
import arrowRight from '../assets/svgs/arrow-right.svg';
import chevronDown from '../assets/svgs/chevron-down.svg';
import facebook from '../assets/svgs/facebook.svg';
import globe from '../assets/svgs/globe.svg';
import instagram from '../assets/svgs/instagram.svg';
import twitter from '../assets/svgs/twitter.svg';
import youtube from '../assets/svgs/youtube.svg';
import './Footer.scss';

export function Footer() {
  return <footer>
    <div className="footer-kitchen-sink">
      <div className="links grid-item">
        <div className="links-column">
          <h4>Products</h4>
          <a>The Connected Stage</a>
          <a>Tracks</a>
          <a>Playback</a>
          <a>Pad Player</a>
          <a>Playback Rentals</a>
          <a>Cloud Pro</a>
          <a>RehearsalMix</a>
          <a>ChartBuilder</a>
          <a>Solo Practice Bundle</a>
          <a>Charts</a>
          <a>ProPresenter</a>
          <a>Sounds</a>
          <a>Gratis License</a>
        </div>
        <div className="links-column">
          <div className="links-row">
            <h4>Resources</h4>
            <a>Songs</a>
            <a>Sounds</a>
          </div>
          <div className="links-row">
            <h4>Company</h4>
            <a>About</a>
            <a>Careers</a>
            <a>Blog</a>
            <a>Partner Contact</a>
          </div>
        </div>
        <div className="links-column">
          <div className="links-row">
            <h4>Store</h4>
            <a>Buy Credits</a>
            <a>Free Content</a>
            <a>Request a Song</a>
          </div>
          <div className="links-row">
            <h4>Extras</h4>
            <a>Sessions</a>
            <a>Testimonials</a>
            <a>Submit your Content</a>
          </div>
        </div>
        <div className="links-column">
          <h4>Account</h4>
          <a>View cart</a>
          <a>Organization</a>
          <a>My Profile</a>
          <a>Library</a>
          <a>Setlists</a>
          <a>RehearsalMix</a>
          <a>Custom Session</a>
        </div>
      </div>
      <div className="subscribe-to-newsletter grid-item">
        <h4>Subscribe to our Newsletter</h4>
        <div className="subscribe-input">
          <input aria-label="email address" placeholder="Email Address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <div className="faq grid-item">
        <h4>Have a Problem?</h4>
        <a className="faq-contact-link">View FAQs or Contact our Support Team <img src={arrowRight} /></a>
      </div>
      <div className="social-media grid-item">
        <div>
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
          <img src={youtube} />
        </div>
        <div>
          <img className="like-button" src={facebooLike} />
          <img className="like-button" src={twitterLike} />
        </div>
      </div>
    </div>
    <div className="footer-skinny">
      <div className="container">
        <div className="end">
          ©2006-2021 by MultiTracks.com LLC. All Rights Reserved
        </div>
        <div>
          Terms | Privacy Policy | Contact
        </div>
        <div className="end language-select">
          <img src={globe} />
          <span>English</span>
          <img src={chevronDown} />
        </div>
      </div>
    </div>
  </footer>
}