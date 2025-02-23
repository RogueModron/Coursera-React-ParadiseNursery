import './LandingPage.css';
import Logo from './Logo';

function LandingPage({ onStartClick }) {
  return (
    <div className="landing-page-container">
        <h1 className="landing-page-title">
            Rogue Modron&apos;s Garden
        </h1>
        <p className="landing-page-description">
            Where Plants Are NOT Free To Be Themselves
        </p>
        <div className="landing-page-action">
            <button className="landing-page-button" onClick={onStartClick}>
                Get Started
                <div style={{ display: 'inline-block', marginLeft: '1rem',  width: '16px' }}>
                    <Logo/>
                </div>
            </button>
        </div>
    </div>
  )
}

export default LandingPage;

/* Requirements:
- Background image: 1 point
- Paragraph about the company: 1 point
- Company name: 1 point
- Get Started button linking to the product listing page: 2 points
*/
